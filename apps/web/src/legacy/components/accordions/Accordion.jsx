import React from 'react'
import PropTypes from 'prop-types'
// material ui
import Accordion from '@components/Accordion'
import { styled } from '@design'
import Image from 'next/legacy/image'
import { VSTypography } from '@lp/ui'
// images
import ArrowDownSVG from '../../assets/images/global/arrow_down_large.svg'

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
