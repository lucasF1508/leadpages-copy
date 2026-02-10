import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { url, analysisMode } = await req.json()

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      )
    }

    // Validar URL
    try {
      new URL(url)
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      )
    }

    // Simular análisis con delay
    // En producción, aquí iría la lógica real de análisis
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Mock de resultados de análisis
    const analysis = {
      url,
      analysisMode,
      score: 78,
      categories: [
        {
          name: 'Above the Fold',
          score: 85,
          status: 'good',
          recommendations: [
            'Your headline is clear and benefit-focused',
            'Consider adding social proof above the fold',
          ],
        },
        {
          name: 'Call to Action',
          score: 72,
          status: 'warning',
          recommendations: [
            'Make your CTA button more prominent',
            'Use action-oriented language',
          ],
        },
        {
          name: 'Form Optimization',
          score: 68,
          status: 'warning',
          recommendations: [
            'Reduce form fields for better conversion',
            'Add trust badges near the form',
          ],
        },
        {
          name: 'Mobile Responsiveness',
          score: 90,
          status: 'good',
          recommendations: [
            'Mobile layout is well optimized',
          ],
        },
        {
          name: 'Page Speed',
          score: 75,
          status: 'good',
          recommendations: [
            'Optimize images for faster loading',
            'Consider lazy loading for below-fold content',
          ],
        },
        {
          name: 'Trust Signals',
          score: 65,
          status: 'warning',
          recommendations: [
            'Add customer testimonials',
            'Display security badges',
          ],
        },
        {
          name: 'Content Clarity',
          score: 82,
          status: 'good',
          recommendations: [
            'Your value proposition is clear',
            'Break up long text blocks',
          ],
        },
        {
          name: 'Visual Hierarchy',
          score: 78,
          status: 'good',
          recommendations: [
            'Use whitespace effectively',
            'Ensure contrast between elements',
          ],
        },
        {
          name: 'Social Proof',
          score: 60,
          status: 'warning',
          recommendations: [
            'Add customer logos or counts',
            'Include recent conversion stats',
          ],
        },
        {
          name: 'Exit Intent',
          score: 70,
          status: 'warning',
          recommendations: [
            'Consider adding an exit-intent popup',
            'Offer a lead magnet',
          ],
        },
      ],
      tips: [
        'Try Leadpages A/B Split Testing to discover which headline, CTA, or image drives more conversions—data-driven decisions eliminate guesswork',
        'Keep your form fields to a minimum—each additional field can reduce conversions by up to 5%',
        'Place your most important content above the fold—users decide in 3 seconds whether to stay or leave',
      ],
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze page' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

