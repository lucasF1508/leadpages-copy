import { NextResponse } from 'next/server'
import { imageStorage } from '../../api/images/storage'

export async function GET(
  req: Request,
  { params }: { params: { objectPath: string[] } }
) {
  try {
    const objectPath = params.objectPath.join('/')

    if (!objectPath) {
      return NextResponse.json(
        { error: 'Object path is required' },
        { status: 400 }
      )
    }

    // Remove 'objects/' prefix if present
    const imageId = objectPath.replace(/^objects\//, '')

    // Check if image exists in storage
    const image = imageStorage.get(imageId)

    if (!image) {
      return NextResponse.json(
        { error: 'Image not found or expired' },
        { status: 404 }
      )
    }

    // Check if image has expired (24 hours)
    const now = Date.now()
    if (now > image.expiresAt) {
      imageStorage.delete(imageId)
      return NextResponse.json(
        { error: 'Image not found or expired' },
        { status: 404 }
      )
    }

    // Return the image
    return new NextResponse(image.data, {
      headers: {
        'Content-Type': image.contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

