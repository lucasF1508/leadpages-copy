import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { imageURL } = await req.json()

    if (!imageURL) {
      return NextResponse.json(
        { error: 'imageURL is required' },
        { status: 400 }
      )
    }

    // Normalize the image URL to a local path
    // Extract the path from the URL
    let objectPath = imageURL

    // If it's a full URL, extract the path
    try {
      const url = new URL(imageURL)
      objectPath = url.pathname
    } catch {
      // If it's already a path, use it as is
      objectPath = imageURL.startsWith('/') ? imageURL : `/${imageURL}`
    }

    // Remove leading /objects/ if present
    if (objectPath.startsWith('/objects/')) {
      objectPath = objectPath.replace('/objects/', '')
    }

    return NextResponse.json({ objectPath })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

