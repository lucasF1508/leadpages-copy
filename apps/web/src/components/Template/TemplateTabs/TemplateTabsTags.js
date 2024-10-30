import { styled } from '@design'

const $TemplateTabsDetailsTags = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const $TemplateTabsDetailsTagsTitle = styled('h6', {
  typeSizes: 'sm',
  lineHeight: '1.4',
  textTransform: 'uppercase',
  letterSpacing: '$xl',
  pb: '$1_5',
  borderBottom: '1px solid $colors$lightGray3',
  color: '$textAlt',
})

const $TemplateTabsDetailsTagsInner = styled('div', {
  display: 'flex',
  gap: '$1_5',
  flexWrap: 'wrap',
})

const $TemplateTabsDetailsTag = styled('div', {
  backgroundColor: '$lightGray3',
  border: '1px solid $colors$silver',
  typeSizes: 'sm',
  px: '$2',
  py: '0.375rem',
  borderRadius: '$xl',
  fontWeight: '$normal',
})

const TemplateTabsTags = ({ tags }) => (
  <$TemplateTabsDetailsTags>
    <$TemplateTabsDetailsTagsTitle>Tags</$TemplateTabsDetailsTagsTitle>
    <$TemplateTabsDetailsTagsInner>
      {tags.map(({ label, value }) => (
        <$TemplateTabsDetailsTag key={value}>{label}</$TemplateTabsDetailsTag>
      ))}
    </$TemplateTabsDetailsTagsInner>
  </$TemplateTabsDetailsTags>
)

export default TemplateTabsTags
