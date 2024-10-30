import Image from '@components/Image'
import Text from '@components/Text'
import { styled } from '@design'
import {
  $TemplateTabInner,
  $TemplateTabContent,
  $TemplateTabColumn,
  $TemplateTabData,
  $TemplateTabTitle,
  $TemplateTabText,
} from './TemplateTabs'

const $TemplateTabsIncludedHeading = styled('h4', {
  typeSizes: 'xl',
  fontFamily: '$base',
  lineHeight: '1.3',
  color: '$text',
})

const $TemplateTabsIncludedList = styled('ul', {
  d: 'grid',
  gridTemplateColumns: '1fr',
  listStyleType: 'none',
  gap: '$3',

  '@>s': {
    gridTemplateColumns: '1fr 1fr',
  },
})

const $TemplateTabsIncludedListItem = styled('li', {
  d: 'flex',
  gap: '$1_5',
  alignItems: 'center',

  '*': {
    margin: '0 !important',
    typeSizes: 'base',
    fontWeight: '$regular',

    strong: {
      fontWeight: '$bold',
    },
  },
})

const $TemplateTabsIncludedListItemImage = styled('div', {
  width: '100%',
  maxWidth: '$space$4_5',
})

const TemplateTabsIncluded = ({ data, kind }) => {
  const key = kind === 'SiteTemplate' ? 'site' : 'landingPage'
  const { heading, text, title } = data[key] || {}
  const { includedItems } = data

  return (
    <$TemplateTabInner>
      <$TemplateTabColumn>
        <$TemplateTabData>
          {title && <$TemplateTabTitle>{title}</$TemplateTabTitle>}
          {text && <$TemplateTabText content={text} />}
        </$TemplateTabData>
      </$TemplateTabColumn>
      <$TemplateTabColumn columnSpan="large">
        <$TemplateTabContent>
          <$TemplateTabsIncludedHeading>{heading}</$TemplateTabsIncludedHeading>
          <$TemplateTabsIncludedList>
            {includedItems
              ?.map(({ _key, image, content }) => (
                <$TemplateTabsIncludedListItem key={_key}>
                  <$TemplateTabsIncludedListItemImage>
                    <Image image={image} />
                  </$TemplateTabsIncludedListItemImage>
                  <Text content={content} />
                </$TemplateTabsIncludedListItem>
              ))
              .filter(Boolean)}
          </$TemplateTabsIncludedList>
        </$TemplateTabContent>
      </$TemplateTabColumn>
    </$TemplateTabInner>
  )
}

export default TemplateTabsIncluded
