import { blocksToText } from '@lib/utils/blockContent'
import { getTemplateTitle } from '@lib/utils/getTemplateTitle'
import { getKindTitle } from '@lib/utils/templates'

// Reviews Temporarily hidden at Von-Claro's Request until solution for sourcing unique reviews is found
// Reviews are currently sourced from a general category creating too many duplicates

const handleRatings = (reviews) => {
  const totalReviews = reviews?.length || 0;
  const hasReviews = totalReviews > 0;
  const ratingValues = reviews?.map(({ rating }) => rating);

  const averageRating =
    hasReviews
      ? ratingValues.reduce((sum, rating) => sum + rating, 0) / totalReviews
      : 5;

  const bestRating = hasReviews ? Math.max(...ratingValues) : 5;
  const worstRating = hasReviews ? Math.min(...ratingValues) : 1;

  return {
    averageRating,
    bestRating,
    worstRating,
    totalReviews,
    hasReviews
  }
}

export const shapeProduct = ({
  template, 
  reviews = []
}) => {
  const {
    _id, 
    heading, 
    kind, 
    // slug, 
    fullPageScreenshotUrlWebp, 
    content
  } = template

  const { description: blocks } = content || {}
  const description = !!blocks?.length && blocksToText(blocks, {nonTextBehavior: 'remove'})

  const {
    averageRating, 
    bestRating, 
    worstRating, 
    totalReviews,
    // hasReviews
  } = handleRatings(reviews)

  const defaultProductData = {
    type: 'Product',
    sku: _id,
    image: fullPageScreenshotUrlWebp,
    name: getTemplateTitle({templateTitle: template.title, kind: template.kind, heading}),
    description: description ||`5x your leads with this ${getKindTitle(kind)} template that's designed by pros, SEO-optimized, and easy to customize.`,
    brand: {
      type: "Brand",
      name: 'Leadpages',
    },
    aggregateRating: {
      type: "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: totalReviews,
      bestRating: bestRating,
      worstRating: worstRating,
    }
    // review: reviews?.map(({authorName, _createdAt, testimonial, rating}) => ({
    //   type: "Review",
    //   author: {
    //     type: "Person",
    //     name: authorName
    //   },
    //   datePublished: _createdAt,
    //   description: testimonial,
    //   reviewRating: {
    //     type: "Rating",
    //     bestRating,
    //     ratingValue: rating,
    //     worstRating,
    //   }
    // }))
  }

  return defaultProductData
}