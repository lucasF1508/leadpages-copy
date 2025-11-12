export const dynamic = 'force-dynamic'

const INTERNAL_KEYS = new Set([
  'portalId',
  'formId',
  'page_name',
  'page_url',
  'hutk',
  'ipAddress',
])

const formatFormFields = (data: Record<string, any>) =>
  Object.entries(data)
    .filter(([k, v]) => !INTERNAL_KEYS.has(k) && v !== undefined)
    .map(([name, value]) => ({ name, value }))

export async function POST(req: Request) {
  try {
    const envPortal = process.env.HUBSPOT_DEFAULT_PORTAL_ID ?? ''
    const envForm = process.env.HUBSPOT_DEFAULT_FORM_ID ?? ''

    const data = (await req.json()) as any
    const {
      portalId = envPortal,
      formId = envForm,
      page_name,
      page_url,
      hutk = null,
      email,
      ...rest
    } = data ?? {}

    if (!portalId || !formId || !email) {
      return Response.json(
        {
          error: {
            message: `formApiSubmission error: Missing required data: ${JSON.stringify({
              email: !email ? 'missing' : undefined,
              formId: !formId ? 'missing' : undefined,
              portalId: !portalId ? 'missing' : undefined,
            })}`,
          },
        },
        { status: 400 }
      )
    }

    const header = (name: string) => req.headers.get(name) ?? ''

    // RFC 7239 Forwarded: for=1.2.3.4 (o IPv6 con brackets)
    const forwarded = header('forwarded')
    const forwardedIp = (() => {
      if (!forwarded) return ''
      const m = forwarded.split(',')[0]?.match(/for=([^;]+)/i)
      const v = m?.[1]?.trim()
      if (!v) return ''
      return v
        .replace(/^"|"$/g, '')  
        .replace(/^\[|\]$/g, '')
        .replace(/:\d+$/, '')    
    })()

    const candidates = [
      header('cf-connecting-ip'),
      header('x-vercel-forwarded-for'),
      header('x-forwarded-for'),
      header('x-real-ip'),
      header('fastly-client-ip'),
      header('x-client-ip'),
      forwardedIp,
    ].filter(Boolean)

    const rawIp = candidates.find(Boolean) ?? ''
    const ipAddress = (rawIp.split(',')[0] ?? '').trim() || undefined

    const uri = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
    const body = {
      context: {
        hutk,
        ipAddress,
        pageName: page_name,
        pageUri: page_url,
      },
      fields: formatFormFields({ email, ...rest }),
    }

    const hsRes = await fetch(uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const text = await hsRes.text()
    let parsed: any
    try {
      parsed = JSON.parse(text)
    } catch {
      parsed = { raw: text }
    }

    if (!hsRes.ok || parsed?.status === 'error') {
      return Response.json(
        {
          error: {
            code: hsRes.status || 500,
            message: parsed?.message || 'HubSpot submission failed',
            response: parsed,
          },
        },
        { status: hsRes.status || 500 }
      )
    }

    return Response.json(
      {
        message: parsed?.inlineMessage ?? 'Submitted',
        response: parsed,
      },
      { status: 200 }
    )
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('HubSpot submit error:', err)
    return Response.json(
      { error: { message: err?.message ?? 'Unknown error' } },
      { status: 500 }
    )
  }
}

