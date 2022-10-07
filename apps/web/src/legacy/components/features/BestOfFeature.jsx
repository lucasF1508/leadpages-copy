import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// styling
import {
  ParagraphSmall,
  H5,
  H6,
  ParagraphHeader,
} from '../silos/BestOfGlobalStyles'

const FeatureContainer = styled('div', {
  maxWidth: '816px',
  paddingTop: '3rem',
  paddingBottom: '3rem',
})

const FeatureImageHolder = styled('div', {
  minWidth: '200px',
  maxHeight: '400px',
  boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25)',
  overflow: 'scroll',
  margin: '2rem 0',
})

const BestOfFeature = ({ props }) => {
  const {
    featureType,
    title,
    subtitle,
    descriptionText,
    image,
    imageAltText,
    wellDoneText,
    evenBetterText,
  } = props

  return (
    <FeatureContainer featureType={featureType}>
      <H5>{title}</H5>
      <H6>{subtitle}</H6>
      <ParagraphSmall>{descriptionText}</ParagraphSmall>
      <FeatureImageHolder>
        <Image image={image} alt={imageAltText} />
      </FeatureImageHolder>
      {wellDoneText && (
        <>
          <ParagraphHeader>Here’s what this page does well:</ParagraphHeader>
          <ParagraphSmall
            dangerouslySetInnerHTML={{ __html: wellDoneText }}
          ></ParagraphSmall>
        </>
      )}
      {evenBetterText && (
        <>
          <ParagraphHeader>How we’d make it even better:</ParagraphHeader>
          <ParagraphSmall
            dangerouslySetInnerHTML={{ __html: evenBetterText }}
          ></ParagraphSmall>
        </>
      )}
    </FeatureContainer>
  )
}

export default BestOfFeature
