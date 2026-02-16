import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/queries'

export async function POST(request: NextRequest) {
  try {
    const { kind } = await request.json()
    
    // Map TemplateKind to Sanity kind values
    // Sanity can have both "LeadpageTemplate" (no space) and "Leadpage Template" (with space)
    const kindMap: Record<string, string[]> = {
      'LeadpageTemplate': ['LeadpageTemplate', 'Leadpage Template'],
      'SiteTemplate': ['SiteTemplate', 'Site Template'],
      'Leadpage': ['LeadpageTemplate', 'Leadpage Template'],
      'Site': ['SiteTemplate', 'Site Template'],
    }
    
    const sanityKinds = kindMap[kind] || [kind]
    
    if (!kind) {
      return NextResponse.json(
        { error: 'Kind parameter is required' },
        { status: 400 }
      )
    }

    // Query templates from Sanity that don't have Template ID
    // AND that are NOT synced from Mandrel (exclude if has lastMandrelUpdate or originalCreatedAt)
    // Check for both kind formats: "LeadpageTemplate" and "Leadpage Template"
    const filterQuery = `*[_type == 'template' && kind in $sanityKinds && (
      !defined(id) || 
      id == null ||
      id == '' ||
      id match "*example*" || 
      id match "*test*" || 
      id match "*ejemplo*" || 
      id match "*prueba*" || 
      length(id) < 10
    ) && !defined(lastMandrelUpdate) && !defined(originalCreatedAt)] | order(_updatedAt desc)`
    
    const templates = await query(
      `${filterQuery} {
        ...,
        _id,
        _type,
        title,
        heading,
        "content": content {
          description
        },
        slug,
        kind,
        id,
        thumbnailUrlWebp,
        thumbnailUrl,
        fullPageScreenshotUrlWebp,
        thumbnailAspect,
        fullPageScreenshotUrlWebpAspectRatio,
        previewUrl,
        path,
        lastMandrelUpdate,
        originalCreatedAt,
        "customThumbnailUrl": customThumbnail.asset->url,
        "customThumbnailAspect": customThumbnail.asset->metadata.dimensions.aspectRatio,
        categories[],
        tags[],
        enabled,
        "_meta": {
          "id": id
        }
      }`,
      {
        params: { sanityKinds },
        preview: false,
      }
    ).data
    
    // Transform to match Mandrel API format
    const transformedTemplates = await Promise.all(templates.map(async (template: any) => {
      // Trim whitespace from previewUrl to avoid issues
      const previewUrl = template.previewUrl?.trim() || (template.slug?.current ? `/templates/preview/${template.slug.current}` : null)
      
      // 1) Prioridad máxima: si el doc trae thumbnailUrlWebp (URL pegada / importada), usarlo tal cual.
      // Esto evita screenshots y respeta el comportamiento de `/templates`.
      let thumbnailUrlWebp: string | null = template.thumbnailUrlWebp || null

      // 2) Si no hay thumbnailUrlWebp, preferir thumbnail manual (asset) si existe
      if (!thumbnailUrlWebp) {
        thumbnailUrlWebp = template.customThumbnailUrl || null
      }
      
      // 3) Si no hay thumbnail manual, intentar generar desde previewUrl
      if (!thumbnailUrlWebp && previewUrl) {
        try {
          // Clean and normalize the previewUrl
          const cleanedPreviewUrl = previewUrl.trim()
          const origin = request.nextUrl.origin
          const fullPreviewUrl = cleanedPreviewUrl.startsWith('http')
            ? cleanedPreviewUrl
            : `${origin}${cleanedPreviewUrl}`
          
          // Use generate-thumbnail endpoint (works without API key configuration)
          // It will try Puppeteer first, then fallback to public screenshot service
          
          // For server-side fetch, we need an absolute URL
          const absoluteThumbnailApiUrl = `${origin}/api/generate-thumbnail`
          
          // Create AbortController for timeout
          // Increase timeout to 90 seconds to allow for slow page loads and screenshot generation
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 90000) // 90 seconds timeout
          
          const thumbnailResponse = await fetch(absoluteThumbnailApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ previewUrl: fullPreviewUrl }),
            signal: controller.signal,
          }).finally(() => {
            clearTimeout(timeoutId)
          })
          
          if (thumbnailResponse.ok) {
            const thumbnailData = await thumbnailResponse.json()
            
            if (thumbnailData.thumbnailUrl) {
              // Ensure the thumbnail URL is valid and can be used by Next.js Image
              thumbnailUrlWebp = thumbnailData.thumbnailUrl
            }
          } else {
            // Don't set thumbnailUrlWebp - let it remain null
          }
        } catch (error: any) {
          console.error(`[sanity-templates API] ❌ Error generando imagen desde previewUrl para "${template.title}":`, {
            message: error.message,
            name: error.name,
            code: error.code,
            stack: error.stack,
            previewUrl: previewUrl?.substring(0, 100),
            previewUrlLength: previewUrl?.length,
            errorType: error instanceof Error ? error.constructor.name : typeof error
          })
          // Don't set thumbnailUrlWebp if there's an error - let it remain null
        }
      } else if (!thumbnailUrlWebp && !previewUrl) {
        // 4) Fallback: solo si NO hay previewUrl ni thumbnail manual, intentar otros campos
        thumbnailUrlWebp =
          template.thumbnailUrlWebp ||
          template.fullPageScreenshotUrlWebp ||
          template.thumbnailUrl ||
          null
      }
      
      const thumbnailAspect = template.customThumbnailAspect ||
                             template.thumbnailAspect || 
                             template.fullPageScreenshotUrlWebpAspectRatio || 
                             16/9

      // Extract description from content.description (blockContent)
      let description = ''
      if (template.content?.description) {
        // If it's an array of block content, extract text
        if (Array.isArray(template.content.description)) {
          description = template.content.description
            .map((block: any) => {
              if (block._type === 'block' && block.children) {
                return block.children.map((child: any) => child.text || '').join('')
              }
              return ''
            })
            .join(' ')
            .trim()
        } else if (typeof template.content.description === 'string') {
          description = template.content.description
        }
      }

      // Map Sanity kind to TemplateKind format
      // Sanity has "LeadpageTemplate" or "SiteTemplate", we need to map to TemplateKind
      const templateKind = kind === 'Leadpage' || kind === 'LeadpageTemplate' 
        ? 'LeadpageTemplate' 
        : 'SiteTemplate'
      
      const transformed = {
        kind: templateKind,
        _meta: {
          id: template.id || template._id,
        },
        template: {
          name: template.title || 'Untitled Template',
          heading: template.heading || '',
          description: description || '',
          slug: template.slug,
          thumbnailUrlWebp,
          thumbnailAspect,
          previewUrl: previewUrl || `/templates/preview/${template.slug?.current || ''}`,
          categories: template.categories?.map((cat: any) => cat.value || cat.label || cat) || [],
          tags: template.tags?.map((tag: any) => tag.value || tag.label || tag) || [],
          enabled: template.enabled !== false,
        },
      }
      return transformed
    }))

    return NextResponse.json({ templates: transformedTemplates })
  } catch (error) {
    console.error('Error fetching Sanity templates:', error)
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    )
  }
}
