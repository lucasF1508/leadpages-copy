import { seoQuery } from "../globalQueries"

// Pages
const cta = `cta->`
const parent = `parent->`

// Components
const ctaInline = `
_type == "ctaInline" => {
  ...,
  cta->
}`

const testimonials = `
_type == "testimonials" => {
  ...,
  testimonials[]-> 
}`

// New testimonials block used in App Router pages (e.g. platform-new)
// Needs testimonials[] dereferenced so the React Testimonial component
// receives full testimonial documents instead of just references.
const testimonialBlock = `
_type == "testimonialBlock" => {
  ...,
  testimonials[]-> 
}`

const testimonialFeaturedBlock = `
_type == "testimonialFeaturedBlock" => {
  ...,
  variant,
  testimonials[]-> 
}`

const integrationsBlock = `
_type == "integrationsBlock" => {
  ...,
  image {
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
    crop,
    lqip
  },
  cta[] {
    ...,
    condition,
    url,
    label,
    internal-> {
      _id,
      _type,
      "slug": slug.current,
      "path": path
    }
  }
}`

const subFooter = `
_type == "subFooter" => {
  ...,
  links[] {
    ...,
    _type == "signUp" => {
      ...,
      external {
        ...
      }
    },
    internal-> {
      _id,
      _type,
      "slug": slug.current,
      "path": path
    }
  }
}`

const mediaTextQuote = ` 
_type == "mediaTextQuote" => {
  ...,
  sections[] {
    ...,
    testimonial->
  }
}`

const listingBlock = `_type == "listingBlock" => { 
  ...,
  "listings": select(
    postType == 'custom' => customListings,
    selection == 'all' => *[_type == 'post'] | order(orderRank),
    selection == 'category' => *[_type == 'post' && references(^.category._ref)] | order(orderRank),
    listings[]->{
      ...,
      'categoryTitle': primaryCategory->title,
    },
  )
}`

const faqs = `
  _type == "faqs" => {
    ...,
    category->,
    "faqs": select(
        selection == 'all' => *[_type == 'faq'] | order(orderRank),
        selection == 'category' => *[_type == 'faq' && ^.category._ref in category[]._ref] | order(orderRank),
        faqs[]->,
      )
  }
`

const cardsComparison = `
  _type == "cardsComparison" => {
    ...,
    "comparisons": select(
      selection == 'all' => *[_type == 'comparison'] | order(orderRank) {
        ...,
      },
      comparisons[]->
    )
}`

const customerRotator = `
  _type == "customerRotator" => {
    ...,
    categoryCustomer->,
    "customers": select(
      selection == 'all' => *[_type == 'customer'] | order(orderRank),
      selection == 'category' => *[_type == 'customer' && ^.category._ref in category[]._ref] | order(orderRank),
      customers[]->,
    )
  }`

// Content
const schemaInlineCTAGlobalBlock = `_type == "schemaInlineCTAGlobalBlock" => {
  ...,
  cta-> {
    ...,
    image {
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
      crop,
      lqip
    }
  }
}`
const startATrial = `_type == "startATrial" => {
  ...,
  link {
    ...,
    internal-> {
      _id,
      _type,
      "slug": slug.current,
      "path": path
    }
  },
  backgroundImage {
    asset->{
      _id,
      url,
      metadata {
        dimensions { width, height },
        lqip,
      },
    },
  },
}`

const components = [
  ctaInline, 
  mediaTextQuote, 
  testimonials, 
  testimonialBlock,
  testimonialFeaturedBlock,
  integrationsBlock,
  subFooter,
  customerRotator,
  faqs,
  listingBlock,
  cardsComparison
].join(',')
const content = [schemaInlineCTAGlobalBlock, startATrial].join(',')
const pages = [cta, parent, seoQuery].join(',')


const contentQuery = `content[] {
  ...,
  ${content}
}`

const componentQuery = `components[] {
  ...,
  ${components},
  ${contentQuery}
}`

const pageQuery = `
${pages},
${componentQuery},
`

export const categoryPostCountQuery = `"postCount": count(*[_type == "post" && !(_id in path('drafts.**')) && references(^._id)])`

export {componentQuery, contentQuery, pageQuery}
export default pageQuery
