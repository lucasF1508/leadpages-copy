import { NextResponse } from 'next/server'
import { getSignature, setSignature } from '../storage'

export async function POST(req: Request) {
  try {
    const { sessionId, htmlContent, signatureData } = await req.json()

    if (!sessionId || !htmlContent || !signatureData) {
      return NextResponse.json(
        { error: 'Missing required fields: sessionId, htmlContent, signatureData' },
        { status: 400 }
      )
    }

    // Parse signatureData if it's a string
    const parsedSignatureData = typeof signatureData === 'string' 
      ? JSON.parse(signatureData) 
      : signatureData

    // Get existing signature to preserve ID if updating
    const existingSignature = getSignature(sessionId)
    
    // Create signature object
    const signature = {
      id: existingSignature?.id || Date.now(),
      sessionId,
      htmlContent,
      signatureData: typeof signatureData === 'string' ? signatureData : JSON.stringify(signatureData),
      createdAt: existingSignature?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Store signature (in production, save to database)
    setSignature(sessionId, signature)

    return NextResponse.json({
      success: true,
      signature,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}


