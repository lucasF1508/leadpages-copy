import { styled } from '@design'

import ContentGroup from '@components/ContentGroup'
import Link from '@components/Link'

const $LinkContainer = styled('div', {
  w: '100%',
  ta: 'center',
  mt: '$4_5',

  '& a': {
    h: 'unset',
    minWidth: 'unset',
    p: '$1_5 $3',
    gcg: '0.625rem',
  },
})

const $ContentGroup = styled('div', {
  mb: '$6',

  '& form': {
    alignSelf: 'center',
  },
})

const TabsContentGroup = ({
  heading,
  content,
  link,
  animateLeadingText,
  css,
}) =>
  heading || content || link ? (
    <$ContentGroup>
      {(heading || content) && (
        <ContentGroup
          heading={heading}
          content={content}
          animate={animateLeadingText}
          css={css}
        />
      )}
      {link && (
        <$LinkContainer>
          <Link {...link} />
        </$LinkContainer>
      )}
    </$ContentGroup>
  ) : (
    <></>
  )

export default TabsContentGroup
