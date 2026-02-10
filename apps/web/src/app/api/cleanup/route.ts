import { NextResponse } from 'next/server'
import { imageStorage } from '../images/storage'

export async function POST(req: Request) {
  try {
    const now = Date.now()
    let deletedCount = 0

    // Clean up expired temporary images (older than 24 hours)
    const keysToDelete: string[] = []
    imageStorage.forEach((value, key) => {
      if (now > value.expiresAt) {
        keysToDelete.push(key)
      }
    })
    
    keysToDelete.forEach(key => {
      imageStorage.delete(key)
      deletedCount++
    })

    // In production, this would clean up actual files from object storage
    // Example with Vercel Blob:
    // const blobs = await list({ prefix: 'temp/' })
    // const expired = blobs.filter(blob => now - blob.uploadedAt > expirationTime)
    // await Promise.all(expired.map(blob => del(blob.url)))
    // deletedCount = expired.length

    return NextResponse.json({
      success: true,
      deletedCount,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

