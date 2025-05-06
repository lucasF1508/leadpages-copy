import { useInView } from 'react-intersection-observer'
import { mergeTemplateData } from '@utils/mergeTemplateData'
import CTA from '@components/Cta'
import NavSecondary from '@components/NavSecondary'
import Pinion from '@components/Pinion'
import Rack from '@components/Rack'
import TemplateHero from '@components/Template/TemplateHero'
import TemplateNav from '@components/Template/TemplateNav'
import TemplateRelated from '@components/Template/TemplateRelated'
import TemplateTabs from '@components/Template/TemplateTabs'
import { navOffset } from '../Nav/Nav'

const Template = ({
  templateData,
  templateSettingsData,
  relatedTemplatesData,
  reviewsData: defaultReviews,
}) => {
  const [ref, heroInView, entry] = useInView()
  const mergedData = mergeTemplateData(templateData, templateSettingsData)

  const {
    included = {},
    includedItems = [],
    details = {},
    reviews = {},
    content = {},
    ...rest
  } = mergedData

  const { cta, tags, title: templateTitle, kind } = rest

  return (
    <>
      <NavSecondary visible={entry && !heroInView}>
        <TemplateNav title={templateTitle} {...rest} />
      </NavSecondary>
      <Rack>
        <Pinion
          backgroundColor="gray4"
          component="templateHero"
          css={{
            marginTop: navOffset * -1,
            paddingTop: navOffset + 36,
            paddingBottom: 0,
          }}
        >
          <div ref={ref}>
            <TemplateHero content={content} {...rest} />
          </div>
        </Pinion>
        <Pinion
          backgroundColor="gray4"
          component="template"
          css={{
            pt: '$14',
          }}
        >
          <TemplateTabs
            defaultReviews={defaultReviews}
            details={{ ...details, tags, templateTitle }}
            included={{ ...included, includedItems }}
            kind={kind}
            reviews={reviews}
          />
        </Pinion>
        <Pinion backgroundColor="gray4" component="template">
          <TemplateRelated relatedTemplatesData={relatedTemplatesData} />
        </Pinion>
      </Rack>
      {cta && <CTA {...cta} />}
    </>
  )
}

export default Template
