import React from 'react'
import { styled } from '@design'
// Components
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import ComparisonCards from '@legacy/components/cards/ComparisonCards'
// Logos
import clickfunnelsSVG from '@legacy/assets/images/comparisons/logos/clickfunnels.svg'
import instapageSVG from '@legacy/assets/images/comparisons/logos/instapage.svg'
import kajabiSVG from '@legacy/assets/images/comparisons/logos/kajabi.svg'
import kartraSVG from '@legacy/assets/images/comparisons/logos/kartra.svg'
import squarespaceSVG from '@legacy/assets/images/comparisons/logos/squarespace.svg'
import unbounceSVG from '@legacy/assets/images/comparisons/logos/unbounce.svg'

const OuterContainer = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  background: '$grayAlt',
  padding: '0 10% 4rem 10%',
  justifyContent: 'center',

  '@<m': {
    padding: '0 1% 0 1%',
  },
})

const CompareHeadline = styled(HeadlineSection, {
  paddingTop: '2.8rem',
  paddingBottom: '3rem',
})

const Comparisons = () => {
  const cardData = [
    {
      image: clickfunnelsSVG,
      imageAlt: 'Clickfunnels logo',
      title: 'Leadpages vs. ClickFunnels',
      description:
        'A sophisticated platform that focuses on sales funnels rather than landing pages or websites. High monthly subscription fees.',
      link: '/comparisons/leadpages-vs-clickfunnels',
      linkAlt: 'Leadpages versus Clickfunnels',
    },
    {
      image: instapageSVG,
      imageAlt: 'Instapage logo',
      title: 'Leadpages vs. Instapage',
      description:
        'Easy-to-use builder with professional-looking templates. Limited to landing pages only, and with fewer template options. ',
      link: '/comparisons/leadpages-vs-instapage',
      linkAlt: 'Leadpages versus Instapage',
    },
    {
      image: squarespaceSVG,
      imageAlt: 'Squarespace logo',
      title: 'Leadpages vs. Squarespace',
      description:
        'A relatively simple website builder that focuses on aesthetics. No free plan or free trial option.',
      link: '/comparisons/leadpages-vs-squarespace',
      linkAlt: 'Leadpages versus Squarespace',
    },
    {
      image: unbounceSVG,
      imageAlt: 'Unbounce logo',
      title: 'Leadpages vs. Unbounce',
      description:
        'A powerful landing page builder with a focus on conversion for agencies, SaaS companies, and ecommerce websites. ',
      link: '/comparisons/leadpages-vs-unbounce',
      linkAlt: 'Leadpages versus Unbounce',
    },
    {
      image: kajabiSVG,
      imageAlt: 'Kajabi logo',
      title: 'Leadpages vs. Kajabi',
      description:
        'A full-featured platform for selling courses online. Limited functionality for other business goals and expensive pricing options. ',
      link: '/comparisons/leadpages-vs-kajabi',
      linkAlt: 'Leadpages versus Kajabi',
    },
    {
      image: kartraSVG,
      imageAlt: 'Kartra logo',
      title: 'Leadpages vs. Kartra',
      description:
        'A feature-rich all-in-one marketing platform for small businesses. May have more features than you want or need for the price. ',
      link: '/comparisons/leadpages-vs-kartra',
      linkAlt: 'Leadpages versus Kartra',
    },
  ]

  return (
    <>
      <CompareHeadline
        supertitle=""
        title="See How Leadpages Stacks Up"
        caption="When it comes to website and landing page builders, you have options—and it’s important to know what those are (even if it’s not us). So we’ve done the research to help you make a decision that’s right for your business needs and budget. See how Leadpages compares to other conversion marketing platforms, landing page software, and website builders."
        backgroundColor="$grayAlt"
      />
      <OuterContainer>
        {cardData.map((card) => (
          <ComparisonCards key={card.title} {...card} />
        ))}
      </OuterContainer>
      <ReadyToGrow
        headline="Want to get started?"
        caption="Begin your Leadpages 14-day free trial today."
        buttonText="Start Free Trial"
      />
    </>
  )
}

export default Comparisons
