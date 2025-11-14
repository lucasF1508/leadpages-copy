import shapeAccordionWithSidebar from "@src/shape/accordionWithSidebar"
import shapeBanner from "@src/shape/banner"
import shapeBlogCard from "@src/shape/blogCard"
import shapeBlogSection from "@src/shape/blogSection"
import shapeCarruselWithArrows from "@src/shape/carruselWithArrows"
import shapeCtaInline from "@src/shape/ctaInline"
import shapeFAQAccordion from "@src/shape/faqAccordion"
import shapeFeatureGrid from "@src/shape/featureGrid"
import shapeFeaturedTemplates from "@src/shape/featuredTemplates"
import shapeGlobalCta from "@src/shape/globalCta"
import shapeHeadlineSection from "@src/shape/headlineSection"
import shapeMarquee from "@src/shape/marquee"
import shapeMedia from "@src/shape/media"
import shapeMediaWithText from "@src/shape/mediaWithText"
import shapeServicePoints from "@src/shape/servicePoints"
import shapeStatsAlternate from "@src/shape/statsAlternate"
import shapeTabs from "@src/shape/tabs"
import shapeTestimonials from "@src/shape/testimonials"
import shapeTextBlock from "@src/shape/textBlock"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const componentMappers: Record<string, (component: any) => any> = {
  accordionWithSidebar: shapeAccordionWithSidebar,
  banner: shapeBanner,
  blogCard: shapeBlogCard,
  blogSection: shapeBlogSection,
  carruselWithArrows: shapeCarruselWithArrows,
  cta: shapeGlobalCta,
  ctaInline: shapeCtaInline,
  faqAccordion: shapeFAQAccordion,
  featureGrid: shapeFeatureGrid,
  featuredTemplates: shapeFeaturedTemplates,
  headlineSection: shapeHeadlineSection,
  marquee: shapeMarquee,
  media: shapeMedia,
  mediaWithText: shapeMediaWithText,
  servicePoints: shapeServicePoints,
  statsAlternate: shapeStatsAlternate,
  tabs: shapeTabs,
  testimonials: shapeTestimonials,
  textBlock: shapeTextBlock,
}

export default componentMappers