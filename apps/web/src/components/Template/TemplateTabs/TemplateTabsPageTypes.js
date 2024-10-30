import { styled } from '@design'

const $TemplateTabsPageTypes = styled('div', {
  d: 'none',

  '@>1025': {
    d: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

const $TemplateTabsPageTypesInner = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridAutoFlow: 'column',
})

const $TemplateTabsPageTypesItem = styled('div', {
  typeSizes: 'base',
  fontWeight: '$normal',
  color: '$textAlt',
})

const $TemplateTabsPageTypesTitle = styled('h6', {
  typeSizes: 'sm',
  lineHeight: '1.4',
  textTransform: 'uppercase',
  letterSpacing: '$xl',
  pb: '$1_5',
  borderBottom: '1px solid $colors$lightGray3',
  color: '$textAlt',
})

const TemplateTabsPageTypes = ({ data }) => {
  if (!data?.length) return null
  const rowCount = Math.ceil(data.length / 2)

  return (
    <$TemplateTabsPageTypes>
      <$TemplateTabsPageTypesTitle>
        Page Templates Included
      </$TemplateTabsPageTypesTitle>
      <$TemplateTabsPageTypesInner
        css={{ gridTemplateRows: `repeat(${rowCount}, 1fr)` }}
      >
        {data?.map((pageType, i) => (
          <$TemplateTabsPageTypesItem key={pageType}>
            {i + 1}. {pageType}
          </$TemplateTabsPageTypesItem>
        ))}
      </$TemplateTabsPageTypesInner>
    </$TemplateTabsPageTypes>
  )
}

export default TemplateTabsPageTypes
