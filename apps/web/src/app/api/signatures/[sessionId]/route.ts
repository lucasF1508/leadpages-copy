import { NextResponse } from 'next/server'
import { getSignature } from '../storage'

export async function GET(
  req: Request,
  { params }: { params: { sessionId: string } }
) {
  try {
    const { sessionId } = params

    if (!sessionId) {
      return NextResponse.json(
        { error: 'sessionId is required' },
        { status: 400 }
      )
    }

    const signature = getSignature(sessionId)

    if (!signature) {
      return NextResponse.json(
        { error: 'Signature not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      signature,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

