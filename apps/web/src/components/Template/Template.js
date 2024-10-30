import CTA from '@components/Cta'
import Pinion from '@components/Pinion'
import Rack from '@components/Rack'
import TemplateHero from '@components/Template/TemplateHero'
import TemplateTabs from '@components/Template/TemplateTabs'
import TemplateRelated from '@components/Template/TemplateRelated'
import TemplateNav from '@components/Template/TemplateNav'
import NavSecondary from '@components/NavSecondary'
import { useInView } from 'react-intersection-observer'
import { mergeTemplateData } from '@utils/mergeTemplateData'
import { navOffset } from '../Nav/Nav'

const Template = ({
  templateData,
  templateSettingsData,
  relatedTemplatesData,
  reviewsData: defaultReviews,
}) => {
  const [ref, heroInView] = useInView()
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
      <NavSecondary visible={!heroInView}>
        <TemplateNav title={templateTitle} {...rest} />
      </NavSecondary>
      <Rack>
        <Pinion
          component="templateHero"
          backgroundColor="gray4"
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
          component="template"
          backgroundColor="gray4"
          css={{
            pt: '$14',
          }}
        >
          <TemplateTabs
            details={{ ...details, tags, templateTitle }}
            reviews={reviews}
            included={{ ...included, includedItems }}
            kind={kind}
            defaultReviews={defaultReviews}
          />
        </Pinion>
        <Pinion component="template" backgroundColor="gray4">
          <TemplateRelated relatedTemplatesData={relatedTemplatesData} />
        </Pinion>
      </Rack>
      {cta && <CTA {...cta} />}
    </>
  )
}

export default Template
