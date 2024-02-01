import { styled } from '@design'
import { m as motion } from 'framer-motion'
import Image from '@components/Image'
import Media from '@components/Media'
import {
  viewport,
  item as framerItem,
  transition,
} from '@design/tokens/framerTokens'

const $ServicePoints = styled(motion.div, {
  d: 'flex',
  mx: 'auto',
  fd: 'column',
  grg: '$9',
  gcg: '$4_5',
  mw: '19.5rem',
  mt: '$4_5',
  justifyContent: 'center',

  '@>m': {
    fd: 'row',
    mw: '$cols10',
    mt: '$9',
  },
})

const $ServicePoint = styled(motion.div, {
  textAlign: 'center',

  '@>m': {
    textAlign: 'left',
    flex: '0 1 19.5rem',
  },
})

const $ServicePointImage = styled('div', {
  mb: '$3',
  mx: 'auto',
  mw: '$space$6',
  position: 'relative',

  '@>m': {
    mx: 0,
  },
})

const $ServicePointHeading = styled('h6', {
  typeSizes: 'xl',
  typeStyles: 'buttonSm',
  mb: '$3',
})

const $ServicePointContent = styled('p', {
  typeSizes: 'lg',
  lineHeight: '1.6em',
})

const ServicePoints = ({ servicePoints = [], animateTextContents }) => {
  if (!servicePoints?.length) return null

  return (
    <$ServicePoints
      variants={
        animateTextContents && {
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              when: 'beforeChildren',
              staggerChildren: 0.2,
            },
          },
        }
      }
      initial={animateTextContents && 'hidden'}
      whileInView={animateTextContents && 'visible'}
      viewport={animateTextContents && viewport}
      css={{ flexWrap: servicePoints.length > 3 ? 'wrap' : 'nowrap' }}
    >
      {servicePoints.map(({ _key, heading: _heading, text, image }) => (
        <$ServicePoint key={_key} variants={framerItem} transition={transition}>
          {image &&
            (image.condition ? (
              <$ServicePointImage>
                <Media media={{ ...image, startInView: true }} />
              </$ServicePointImage>
            ) : (
              <$ServicePointImage>
                <Image image={image} />
              </$ServicePointImage>
            ))}
          {_heading && <$ServicePointHeading>{_heading}</$ServicePointHeading>}
          {text && <$ServicePointContent>{text}</$ServicePointContent>}
        </$ServicePoint>
      ))}
    </$ServicePoints>
  )
}

export default ServicePoints
