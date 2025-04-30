import { blocksToText } from '@lib/utils/blockContent'
import { getTemplateTitle } from '@lib/utils/getTemplateTitle'
import { getKindTitle, getTemplateUrl } from '@lib/utils/templates'

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

export const shapeProduct = ({template, reviews = []}) => {
  const {_id, heading, kind, slug, fullPageScreenshotUrlWebp, content} = template
  const { description: blocks } = content || {}
  const description = !!blocks?.length && blocksToText(blocks, {nonTextBehavior: 'remove'})

  const {
    averageRating, 
    bestRating, 
    worstRating, 
    totalReviews,
    hasReviews
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
    offers: {
      type: "Offer",
      url: getTemplateUrl(kind, slug),
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      price: 74.00, // Ensure price is a string with 2 decimals
      priceCurrency: "USD"
    },
    aggregateRating:
    hasReviews
      && {
          type: "AggregateRating",
          ratingValue: averageRating.toFixed(1),
          reviewCount: totalReviews,
          bestRating: bestRating,
          worstRating: worstRating,
        },
    review: reviews?.map(({authorName, _createdAt, testimonial, rating}) => ({
      type: "Review",
      author: {
        type: "Person",
        name: authorName
      },
      datePublished: _createdAt,
      description: testimonial,
      reviewRating: {
        type: "Rating",
        bestRating,
        ratingValue: rating,
        worstRating,
      }
    }))
  }

  return defaultProductData
}