import shapeFeatureGrid from "@src/shape/featureGrid"
import shapeGlobalCta from "@src/shape/globalCta"
import shapeHeadlineSection from "@src/shape/headlineSection"
import shapeMarquee from "@src/shape/marquee"
import shapeMedia from "@src/shape/media"
import shapeMediaWithText from "@src/shape/mediaWithText"
import shapeServicePoints from "@src/shape/servicePoints"
import shapeStatsAlternate from "@src/shape/statsAlternate"
import shapeTabs from "@src/shape/tabs"

const mapComponent = (component: any) => {
  switch (component._type) {
    case 'cta':
      const CTA = shapeGlobalCta(component)
      return CTA
    case 'headlineSection':
      const text = shapeHeadlineSection(component)
      return text
      case 'statsAlternate':
      const textWithStats = shapeStatsAlternate(component)
      return textWithStats
    case 'featureGrid':
      const featureCards = shapeFeatureGrid(component)
      return featureCards
    case 'servicePoints':
      const _featureCards = shapeServicePoints(component)
      return _featureCards
    case 'tabs':
      const mediaWithItems = shapeTabs(component)
      return mediaWithItems
    case 'spacer':
      return component
    case 'media':
      const media = shapeMedia(component)
      return media
    case 'mediaWithText':
      const mediaWithText = shapeMediaWithText(component)
      return mediaWithText
    case 'marquee':
      const marquee = shapeMarquee(component)
      return marquee
    default:
      // eslint-disable-next-line no-console
      console.log(`Skipping section of type ${component._type}, no mapper exists.`)
      return component
  }
}

export default mapComponent