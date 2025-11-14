import { NextRequest, NextResponse } from 'next/server'
import query from '@/lib/queries/query'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams
        const offset = parseInt(searchParams.get('offset') || '0')
        const limit = parseInt(searchParams.get('limit') || '12')
        const category = searchParams.get('category')
        const author = searchParams.get('author')
        const search = searchParams.get('search')
        const selection = searchParams.get('selection') || 'latest'

        let groqQuery = ''

        // Build filter based on parameters
        let filters = `_type == 'post' && !(_id in path('drafts.**'))`

        if (category) {
            filters += ` && primaryCategory->slug.current == "${category}"`
        }

        if (author) {
            filters += ` && publisher->slug.current == "${author}"`
        }

        if (search) {
            filters += ` && (title match "${search}*" || excerpt match "${search}*")`
        }

        // Build query based on selection type
        if (selection === 'trending') {
            groqQuery = `{
        "posts": coalesce(
          *[_type == 'postSettings'][0].trendingArticles[${offset}..${offset + limit - 1}]->{
            _id,
            title,
            excerpt,
            slug,
            image,
            publishedDate,
            primaryCategory->{title, slug},
            publisher->{title, name, slug},
            seo{seoDescription}
          },
          *[${filters}] | order(publishedDate desc) [${offset}..${offset + limit - 1}] {
            _id,
            title,
            excerpt,
            slug,
            image,
            publishedDate,
            primaryCategory->{title, slug},
            publisher->{title, name, slug},
            seo{seoDescription}
          }
        ),
        "total": count(*[${filters}])
      }`
        } else {
            groqQuery = `{
        "posts": *[${filters}] | order(publishedDate desc) [${offset}..${offset + limit - 1}] {
          _id,
          title,
          excerpt,
          slug,
          image,
          publishedDate,
          primaryCategory->{title, slug},
          publisher->{title, name, slug},
          seo{seoDescription}
        },
        "total": count(*[${filters}])
      }`
        }

        const result = await query(groqQuery).data as { posts: any[]; total: number }

        return NextResponse.json({
            posts: result.posts || [],
            total: result.total || 0,
            offset,
            limit,
            hasMore: result.total > offset + limit,
        })
    } catch (error) {
        console.error('Blog posts API error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch posts' },
            { status: 500 }
        )
    }
}

