import Text from '@components/Text'
import { styled } from '@design'
import {
  $TemplateTabInner,
  $TemplateTabColumn,
  $TemplateTabData,
  $TemplateTabContent,
  $TemplateTabTitle,
  $TemplateTabText,
} from './TemplateTabs'
import TemplateTabsTags from './TemplateTabsTags'
import TemplateTabsPageTypes from './TemplateTabsPageTypes'

const $TemplateDetailsText = styled(Text, {
  a: {
    p: 0,
  },
})

const TemplateTabsDetails = ({ data, kind }) => {
  const { content, text, tags, title, templateTitle, pageTemplatesIncluded } =
    data

  return (
    <$TemplateTabInner>
      <$TemplateTabColumn>
        <$TemplateTabData>
          <$TemplateTabTitle>
            {templateTitle} | {title}
          </$TemplateTabTitle>
          {text && <$TemplateTabText content={text} tagStyle="tabsContent" />}
          {kind !== 'LeadpageTemplate' && pageTemplatesIncluded && (
            <TemplateTabsPageTypes data={pageTemplatesIncluded} />
          )}
          {tags && <TemplateTabsTags tags={tags} />}
        </$TemplateTabData>
      </$TemplateTabColumn>
      <$TemplateTabColumn columnSpan="large">
        <$TemplateTabContent>
          <$TemplateDetailsText content={content} usePostTokens />
        </$TemplateTabContent>
      </$TemplateTabColumn>
    </$TemplateTabInner>
  )
}

export default TemplateTabsDetails
