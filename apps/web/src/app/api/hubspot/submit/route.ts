import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { success: true, skipped: true },
        { status: 200 }
      )
    }

    // Call HubSpot API
    const portalId = process.env.HUBSPOT_DEFAULT_PORTAL_ID || '21794907'
    const formId = process.env.HUBSPOT_DEFAULT_FORM_ID || 'c3520deb-f584-401a-9f62-e51f5e6eefe3'

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            {
              name: 'email',
              value: email,
            },
          ],
          context: {
            pageUri: req.headers.get('referer') || '',
            pageName: 'Email Signature Generator',
          },
        }),
      }
    )

    const hubspotData = await hubspotResponse.json()

    if (!hubspotResponse.ok || hubspotData?.status === 'error') {
      return NextResponse.json(
        { success: true, skipped: true },
        { status: 200 } // Return 200 even if HubSpot fails, but mark as skipped
      )
    }

    return NextResponse.json({ success: true, skipped: false })
  } catch (error: any) {
    // Return success even if there's an error, but mark as skipped
    return NextResponse.json(
      { success: true, skipped: true },
      { status: 200 }
    )
  }
}

