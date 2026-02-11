import { NextRequest, NextResponse } from 'next/server'

/**
 * Screenshot proxy endpoint - serves screenshot image directly
 * Works without API key configuration by using Puppeteer if available
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const url = searchParams.get('url')

    if (!url) {
      return NextResponse.json(
        { error: 'url parameter is required' },
        { status: 400 }
      )
    }

    // Decode and clean the URL (trim whitespace)
    const decodedUrl = decodeURIComponent(url).trim()

    // Try Puppeteer first (works in Vercel with @sparticuz/chromium)
    let puppeteer: any
    try {
      puppeteer = require('puppeteer')
    } catch (e) {
      try {
        puppeteer = require('puppeteer-core')
      } catch (e2) {
        // Puppeteer not available
      }
    }

    if (puppeteer) {
      try {
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
          await page.setViewport({
            width: 1280,
            height: 810,
            deviceScaleFactor: 1,
          })

          await page.goto(decodedUrl, {
            waitUntil: 'networkidle0',
            timeout: 60000, // 60 seconds timeout for page load
          })

          // Wait a bit for any animations/loading to complete
          // Use Promise instead of waitForTimeout (deprecated in newer Puppeteer versions)
          await new Promise(resolve => setTimeout(resolve, 2000))

          const screenshot = await page.screenshot({
            type: 'webp',
            quality: 85,
            fullPage: false,
          })

          await browser.close()

          return new NextResponse(screenshot, {
            headers: {
              'Content-Type': 'image/webp',
              'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            },
          })
        } catch (error: any) {
          await browser.close()
          throw error
        }
      } catch (error: any) {
        console.error('[screenshot-proxy] Puppeteer error:', error)
        // Fall through to error response
      }
    }

    // If Puppeteer not available, use public screenshot service as fallback
    try {
      const encodedUrl = encodeURIComponent(decodedUrl)
      
      // Use free screenshot API service (no API key required)
      // This service requires two calls: first get image ID, then fetch image
      const screenshotApiBase = 'https://free-screenshot-api-code.vercel.app'
      
      // Step 1: Request screenshot and get image ID
      const requestUrl = `${screenshotApiBase}/?url=${encodedUrl}&device=desktop&full=off`
      
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
      })
      
      if (response.ok) {
        const data = await response.json()
        
        // The service returns an image ID, then we fetch the actual image
        if (data.img) {
          const imageUrl = `${screenshotApiBase}${data.img}`
          
          const imageResponse = await fetch(imageUrl)
          if (imageResponse.ok) {
            const imageBuffer = await imageResponse.arrayBuffer()
            
            return new NextResponse(imageBuffer, {
              headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
              },
            })
          }
        }
      }
      
      // If public service fails, return error
      console.warn('[screenshot-proxy] Public screenshot service failed, returning error')
      return NextResponse.json(
        { 
          error: 'Screenshot generation not available',
          message: 'Puppeteer is not installed and public screenshot service failed. Install puppeteer or puppeteer-core to enable screenshots.'
        },
        { status: 503 }
      )
    } catch (error: any) {
      console.error('[screenshot-proxy] Error with public service:', error)
      return NextResponse.json(
        { 
          error: 'Screenshot generation not available',
          message: 'Puppeteer is not installed and public screenshot service failed.'
        },
        { status: 503 }
      )
    }
  } catch (error: any) {
    console.error('[screenshot-proxy] Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate screenshot',
        message: error.message 
      },
      { status: 500 }
    )
  }
}
