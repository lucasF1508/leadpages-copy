import { NextResponse } from 'next/server'
import { imageStorage } from '../storage'

export async function POST(req: Request) {
  try {
    // Get the uploaded file from the request
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { error: 'File is required' },
        { status: 400 }
      )
    }

    // Validate file type (images only)
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      )
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 10MB limit' },
        { status: 400 }
      )
    }

    // Generate a unique upload ID
    const uploadId = `img-${Date.now()}-${Math.random().toString(36).substring(7)}`

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Store the image (expires in 24 hours)
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    imageStorage.set(uploadId, {
      data: buffer,
      contentType: file.type,
      expiresAt,
    })

    // In production, upload to actual object storage (Vercel Blob, S3, etc.)
    // Example with Vercel Blob:
    // import { put } from '@vercel/blob'
    // const blob = await put(uploadId, buffer, { contentType: file.type })
    // return NextResponse.json({ url: blob.url })

    // Return the object path and URL
    const objectPath = `objects/${uploadId}`
    const url = `/${objectPath}`
    
    return NextResponse.json({
      success: true,
      uploadId,
      objectPath,
      url,
      contentType: file.type,
      size: file.size,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to upload image' },
      { status: 500 }
    )
  }
}

