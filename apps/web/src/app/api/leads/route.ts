import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, name, company } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log lead capture (in production, save to database or send to CRM)
    console.log('Lead captured:', {
      email,
      name: name || undefined,
      company: company || undefined,
      timestamp: new Date().toISOString(),
    })

    // Here you can add integration with your CRM, database, or analytics service
    // For example:
    // - Save to database
    // - Send to HubSpot/Mailchimp
    // - Track in analytics

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

