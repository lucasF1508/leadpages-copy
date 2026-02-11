import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/queries'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const slug = searchParams.get('slug') || 'lead-magnet-ebook'

    // Query the specific template - fetch ALL fields using spread operator
    const template = await query(
      `*[_type == 'template' && slug.current == $slug] | order(_updatedAt desc) [0] {
        ...,
        "hasId": defined(id),
        "idValue": id,
        "idLength": length(string(id)),
        "idIsEmpty": id == '' || id == null,
        "idIsUndefined": !defined(id),
        "hasPreviewUrl": defined(previewUrl),
        "previewUrlValue": previewUrl,
        "hasThumbnailUrlWebp": defined(thumbnailUrlWebp),
        "hasCustomThumbnailUrl": defined(customThumbnailUrl),
        "hasFullPageScreenshotUrlWebp": defined(fullPageScreenshotUrlWebp)
      }`,
      {
        params: { slug },
        preview: false,
      }
    ).data

    if (!template) {
      return NextResponse.json({ 
        error: 'Template not found',
        slug 
      })
    }

    return NextResponse.json({ 
      template,
      analysis: {
        hasId: template.hasId,
        idValue: template.idValue,
        idLength: template.idLength,
        idIsEmpty: template.idIsEmpty,
        idIsUndefined: template.idIsUndefined,
        kind: template.kind,
        enabled: template.enabled,
        shouldAppear: !template.hasId || template.idIsEmpty || template.idIsUndefined || (template.idLength && template.idLength < 10),
        // Thumbnail analysis
        hasPreviewUrl: template.hasPreviewUrl,
        previewUrlValue: template.previewUrlValue,
        hasThumbnailUrlWebp: template.hasThumbnailUrlWebp,
        hasCustomThumbnailUrl: template.hasCustomThumbnailUrl,
        hasFullPageScreenshotUrlWebp: template.hasFullPageScreenshotUrlWebp,
        canGenerateThumbnail: template.hasPreviewUrl && !template.hasThumbnailUrlWebp && !template.hasCustomThumbnailUrl && !template.hasFullPageScreenshotUrlWebp,
        // Show all keys for debugging
        allKeys: Object.keys(template)
      }
    }, {
      // Pretty print for easier reading
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (error: any) {
    console.error('Error fetching template:', error)
    return NextResponse.json(
      { error: 'Failed to fetch template', message: error.message },
      { status: 500 }
    )
  }
}
