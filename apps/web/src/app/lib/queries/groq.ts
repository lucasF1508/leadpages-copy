export const componentQueries = `
  testimonials[]->,
  _type == 'testimonialBlock' => {
    ...,
    testimonials[]->
  },
  faqs[]->,
  _type == 'heroLandingGenerator' => {
    ...,
    cardsStatic,
    carouselImages[] {
      _key,
      _type,
      asset-> {
        _id,
        _type,
        url,
        metadata {
          dimensions { width, height, aspectRatio },
          lqip
        }
      },
      altText,
      hotspot,
      crop
    }
  },
  _type == 'heroSimple' => {
    ...,
    links[] {
      _key,
      _type,
      label,
      url,
      condition,
      hasHash,
      hash,
      linkStyle,
      hasIcon,
      ariaLabel,
      dataGtm,
      internal-> {
        _id,
        _type,
        "slug": slug.current,
        "path": path
      }
    }
  },
  _type == 'faqSimple' => {
    ...,
    faqs[] {
      _key,
      question,
      answer[] {
        ...,
        _type == 'block' => {
          ...,
          children[] {
            ...,
            _type == 'span' => {
              ...,
              marks[],
              text
            }
          }
        }
      }
    }
  },
  _type == 'blogSection' => {
    ...,
    "excludedTags": *[_type=="pageArchive" && slug.current=="blog"][0].tags,
    "mainHeroPost": *[_type == 'post' && !(_id in path('drafts.**')) && blogSectionMainHero == true] | order(publishedDate desc) [0] {
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
  _type == 'sectionCTA' => {
    ...,
    ctas[] {
      _key,
      _type,
      label,
      url,
      condition,
      hasHash,
      hash,
      linkStyle,
      hasIcon,
      ariaLabel,
      dataGtm,
      internal-> {
        _id,
        _type,
        "slug": slug.current,
        "path": path
      }
    }
  },
  _type == 'featureCards' => {
    ...,
    cards[] {
      _key,
      _type,
      content[] {
        ...
      },
      icon {
        ...,
        asset-> {
          _id,
          _type,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
            lqip
          }
        },
        altText,
        hotspot,
        crop
      }
    }
  },
  _type == 'howItWorks' => {
    ...,
    steps[] {
      _key,
      title,
      description,
      icon {
        ...,
        asset-> {
          _id,
          _type,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
            lqip
          }
        },
        altText,
        hotspot,
        crop
      }
    }
  },
  _type == 'mediaWithItemsSwitch' => {
    ...,
    label,
    title,
    linkButtonVariant,
    content[] {
      ...
    },
    sections[] {
      ...,
      tabLabel,
      items[] {
        ...,
        _key,
        pillContent,
        alignContent,
        content[] {
          ...
        },
        media {
          ...,
          image {
            ...,
            asset-> {
              _id,
              _type,
              url,
              metadata { dimensions { width, height, aspectRatio }, lqip }
            },
            altText,
            hotspot,
            crop
          }
        },
        links[] {
          ...,
          internal-> { _id, _type, "slug": slug.current, "path": path }
        }
      }
    }
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
