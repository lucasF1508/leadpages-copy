export const componentQueries = `
  testimonials[]->,
  faqs[]->,
  _type == 'blogSection' => {
    ...,
    "excludedTags": *[_type=="pageArchive" && slug.current=="blog"][0].tags,
    category->,
    "popularPosts": coalesce(
      *[_type == 'postSettings'][0].trendingArticles[0..3]->{
        _id,
        title,
        slug,
        image,
        primaryCategory->,
        publisher->
      },
      *[_type == 'post' && !(_id in path('drafts.**'))] | order(publishedDate desc) [0..3] {
        _id,
        title,
        slug,
        image,
        primaryCategory->,
        publisher->
      }
    ),
    "autoCategories": select(
      categorySelection == 'automatic' => *[_type == 'categoryPost'] | order(title asc) {
        _id,
        title,
        slug,
        "postCount": count(*[_type == 'post' && references(^._id)])
      },
      []
    ),
    "posts": select(
      postSelection == 'manual' => manualPosts[]->{
        _id,
        _key,
        title,
        excerpt,
        slug,
        image,
        publishedDate,
        "primaryCategory": primaryCategory->{title, slug},
        "publisher": publisher->{title, name, slug},
        "seoDescription": seo.seoDescription
      },
      postSelection == 'category' => *[_type == 'post' && !(_id in path('drafts.**')) && references(^.category._ref)] | order(publishedDate desc) {
        _id,
        _key,
        title,
        excerpt,
        slug,
        image,
        publishedDate,
        "primaryCategory": primaryCategory->{title, slug},
        "publisher": publisher->{title, name, slug},
        "seoDescription": seo.seoDescription
      },
      postSelection == 'trending' => coalesce(
        *[_type == 'postSettings'][0].trendingArticles[]->{
          _id,
          _key,
          title,
          excerpt,
          slug,
          image,
          publishedDate,
          "primaryCategory": primaryCategory->{title, slug},
          "publisher": publisher->{title, name, slug},
          "seoDescription": seo.seoDescription
        },
        *[_type == 'post' && !(_id in path('drafts.**'))] | order(publishedDate desc) {
          _id,
          _key,
          title,
          excerpt,
          slug,
          image,
          publishedDate,
          "primaryCategory": primaryCategory->{title, slug},
          "publisher": publisher->{title, name, slug},
          "seoDescription": seo.seoDescription
        }
      ),
      postSelection == 'latest' => *[_type == 'post' && !(_id in path('drafts.**'))] | order(publishedDate desc) {
        _id,
        _key,
        title,
        excerpt,
        slug,
        image,
        publishedDate,
        "primaryCategory": primaryCategory->{title, slug},
        "publisher": publisher->{title, name, slug},
        "seoDescription": seo.seoDescription
      },
      []
    )
  },
`

export const componentsQuery = `
  components[] {
    ...,
    ${componentQueries}
    _type == 'section' => {
      ...,
      components[] {
        ...,
        ${componentQueries}
      }
    },
  }
`
