import React from 'react'
import PropTypes from 'prop-types'
// material ui
import Accordion from '@components/Accordion'
import { styled } from '@design'
import Image from 'next/image'
import { VSTypography } from '@lp/ui'
// images
import ArrowDownSVG from '../../assets/images/global/arrow_down_large.svg'

// const useStyles = makeStyles(({ palette, breakpoints }) => ({
//   accordionRoot: {
//     margin: 0,
//     borderTop: `1px solid ${palette.grey[10]}`,
//     backgroundColor: 'transparent',
//     transition: 'all 0.3s ease',
//     '&:before': {
//       display: 'none',
//     },
//     '&:last-of-type': {
//       borderBottom: `1px solid ${palette.grey[10]}`,
//     },
//     '&:hover': {
//       color: palette.primary.main,
//       '& $expandIcon': {
//         filter:
//           'invert(22%) sepia(85%) saturate(2922%) hue-rotate(245deg) brightness(98%) contrast(106%)',
//       },
//     },
//     '&$expanded': {
//       margin: 0,
//     },
//   },
//   expanded: {
//     margin: 0,
//   },
//   summaryRoot: {
//     padding: 0,
//   },
//   summaryContent: {
//     margin: '20px 0',
//     paddingRight: 44,
//   },
//   expandIcon: {
//     position: 'absolute',
//     right: 18,
//     transition: 'all 0.3s ease',
//   },
//   expandIconSvg: {
//     width: 18,
//   },
//   detailRoot: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: 0,
//     paddingRight: 36,
//     marginLeft: 0,
//     marginBottom: 36,
//     color: 'black',
//     '& *': {
//       marginBottom: 18,
//       '&:last-child': {
//         marginBottom: 0,
//       },
//     },
//     '& a': {
//       color: 'inherit',
//       textDecoration: 'none',
//       borderBottom: `2px solid ${palette.primary.light}`,
//       paddingBottom: 2,
//       transition: 'all 0.3s ease',
//       '&:hover': {
//         color: palette.primary.main,
//         borderBottom: `2px solid ${palette.primary.main}`,
//       },
//     },
//     '& ul': {
//       marginLeft: 18,
//       listStylePosition: 'inside',
//       '& li': {
//         marginBottom: 0,
//       },
//     },
//   },
//   sectionHeadline: {
//     marginTop: 66,
//     marginBottom: 78,
//     textAlign: 'center',
//     fontSize: '2rem',
//     lineHeight: '3rem',
//     letterSpacing: '-0.03125rem',
//     [breakpoints.down('sm')]: {
//       marginTop: '4rem',
//       marginBottom: '3.333rem',
//       fontSize: '1.6667rem',
//       lineHeight: '2rem',
//       letterSpacing: '-0.01rem',
//       whiteSpace: 'nowrap',
//       color: 'red',
//     },
//   },
// }))

const $VSTypography = styled(VSTypography, {
  marginTop: '66px !important',
  marginBottom: '78px !important',
  textAlign: 'center',
  fontSize: '2rem',
  lineHeight: '3rem',
  letterSpacing: '-0.03125rem',

  '@media (max-width: 959.95px)': {
    marginTop: '4rem !important',
    marginBottom: '3.333rem !important',
    fontSize: '1.6667rem',
    lineHeight: '2rem',
    letterSpacing: '-0.01rem',
    whiteSpace: 'nowrap',
    color: 'red',
  },
})

const $AccordionContainer = styled('div', {
  width: '100%',
  maxWidth: 540,
  margin: 'auto',
})

const LPAccordion = ({ sectionHeadline, data }) => (
  <>
    {sectionHeadline && (
      <$VSTypography
        variant="h3"
        // className={classes.sectionHeadline}
        dangerouslySetInnerHTML={{ __html: sectionHeadline }}
      />
    )}
    <$AccordionContainer>
      <Accordion accordionItems={data} />
    </$AccordionContainer>
  </>
)

LPAccordion.defaultProps = {
  sectionHeadline: '',
}

LPAccordion.propTypes = {
  sectionHeadline: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      itemHeadline: PropTypes.string.isRequired,
      itemDetail: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default LPAccordion
