import { NextRequest, NextResponse } from 'next/server'

/**
 * Generate thumbnail screenshot from a preview URL
 * Uses Puppeteer if available, otherwise uses public screenshot service (no API key required)
 */
export async function POST(request: NextRequest) {
  try {
    const { previewUrl } = await request.json()

    if (!previewUrl) {
      return NextResponse.json(
        { error: 'previewUrl is required' },
        { status: 400 }
      )
    }

    // Clean and normalize the previewUrl (trim whitespace)
    const cleanedPreviewUrl = typeof previewUrl === 'string' ? previewUrl.trim() : previewUrl

    // Option 1: Try to use Puppeteer if available (works in Vercel with @sparticuz/chromium)
    let puppeteer: any
    try {
      puppeteer = require('puppeteer')
    } catch (e) {
      try {
        puppeteer = require('puppeteer-core')
      } catch (e2) {
        // Puppeteer not available, use public screenshot service
      }
    }

    // If Puppeteer is available, use it
    if (puppeteer) {
      try {
        // Launch browser
        const browser = await puppeteer.launch({
          headless: true,
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu',
          ],
        })

        try {
          const page = await browser.newPage()
          
          // Set viewport size (typical thumbnail size)
          await page.setViewport({
            width: 1280,
            height: 810,
            deviceScaleFactor: 1,
          })

          // Navigate to the preview URL
          await page.goto(cleanedPreviewUrl, {
            waitUntil: 'networkidle0',
            timeout: 60000, // 60 seconds timeout for page load
          })

          // Wait a bit for any animations/loading to complete
          // Use Promise instead of waitForTimeout (deprecated in newer Puppeteer versions)
          await new Promise(resolve => setTimeout(resolve, 2000))

          // Take screenshot
          const screenshot = await page.screenshot({
            type: 'webp',
            quality: 85,
            fullPage: false, // Only capture viewport
          })

          await browser.close()

          // Convert to base64 data URL
          const base64Image = screenshot.toString('base64')
          const dataUrl = `data:image/webp;base64,${base64Image}`

          return NextResponse.json({
            success: true,
            thumbnailUrl: dataUrl,
            thumbnailAspect: 1280 / 810, // ~1.58
            format: 'webp',
          })
        } catch (error: any) {
          await browser.close()
          console.error('[generate-thumbnail] Error generating screenshot with Puppeteer:', error)
          // Fall through to public service
        }
      } catch (error: any) {
        console.error('[generate-thumbnail] Error launching Puppeteer:', error)
        // Fall through to public service
      }
    }

    // Option 2: Use public screenshot service (no API key required)
    // Create a proxy endpoint URL that will fetch and serve the screenshot
    try {
      const encodedUrl = encodeURIComponent(cleanedPreviewUrl)
      // Importante: en Vercel no podemos devolver `localhost` (termina rompiendo en el browser).
      // Usamos el origin real del request (respeta preview deploy / prod).
      const baseUrl = request.nextUrl.origin
      
      // Use our own screenshot-proxy endpoint that will handle the screenshot generation
      // This endpoint will try Puppeteer first, then fallback to public services
      const proxyUrl = `${baseUrl}/api/screenshot-proxy?url=${encodedUrl}`
      
      return NextResponse.json({
        success: true,
        thumbnailUrl: proxyUrl,
        thumbnailAspect: 1280 / 810,
        format: 'webp',
        fallback: true, // Indicates this uses proxy endpoint
      })
    } catch (error: any) {
      console.error('[generate-thumbnail] Error creating proxy URL:', error)
      
      // Final fallback: return the cleanedPreviewUrl itself (won't work as image but always available)
      return NextResponse.json({
        success: false,
        thumbnailUrl: cleanedPreviewUrl,
        thumbnailAspect: 16 / 9,
        fallback: true,
        error: 'Could not generate screenshot, using previewUrl as fallback',
      })
    }
  } catch (error: any) {
    console.error('[generate-thumbnail] Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate thumbnail',
        message: error.message 
      },
      { status: 500 }
    )
  }
}
