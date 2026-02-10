import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, timestamp } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Here you can add analytics tracking logic
    // For now, we'll just return success
    // You can integrate with your analytics service (e.g., Google Analytics, Mixpanel, etc.)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

