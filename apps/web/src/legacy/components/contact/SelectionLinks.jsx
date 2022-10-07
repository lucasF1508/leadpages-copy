import React, { createElement, useState } from 'react'
import { styled, keyframes } from '@design'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
// styling
import { makeStyles } from '@material-ui/core/styles'
import { fadeIn } from 'react-animations'

const useStyles = makeStyles(() => ({
  sectionHeader: {
    margin: '16px 0',
  },
}))

const StyledLink = styled('a', {
  color: '$primary',

  '&:hover': {
    color: '$indigoDark',
  },
})

const ScrollToLink = styled(ScrollLink, {
  color: '$primary',

  '&:hover': {
    color: '$indigoDark',
  },
})

const SectionHolderAnimation = keyframes(fadeIn)

const SectionHolder = styled('div', {
  padding: '1rem 0',
  animation: `0.5s ${SectionHolderAnimation}`,
})

const FormHolder = styled('div', {})

const SelectionLinks = ({ parent, selection, linkArray, contactForm }) => {
  const classes = useStyles()
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      {linkArray.map(({ sectionLinks }, index) => (
        <SectionHolder key={index}>
          <Typography variant="h4" className={classes.sectionHeader}>
            We think these might help:
          </Typography>
          {sectionLinks.map(({ type, text, route }, idx) => (
            <Typography key={idx} variant="h5">
              {type === 'outbound' && (
                <StyledLink
                  href={route}
                  aria-label="form link"
                  data-gtm="contact-resource-link"
                >
                  {text}
                </StyledLink>
              )}
              {type === 'internal' && (
                <Link href={route} passHref>
                  <StyledLink
                    aria-label="form link"
                    data-gtm="contact-resource-link"
                  >
                    {text}
                  </StyledLink>
                </Link>
              )}
            </Typography>
          ))}
        </SectionHolder>
      ))}
      <SectionHolder id="formtop">
        {!showContactForm && (
          <>
            <Typography variant="h4" className={classes.sectionHeader}>
              Didn’t find what you’re looking for?
            </Typography>
            <Typography variant="h5">
              <ScrollToLink
                to="formtop"
                spy
                smooth
                duration={500}
                offset={-50}
                onClick={() => setShowContactForm(true)}
                data-gtm="contact-us-link"
              >
                Contact our team
              </ScrollToLink>
            </Typography>
          </>
        )}
        {showContactForm && (
          <>
            <Typography variant="h4" className={classes.sectionHeader}>
              Contact our team
            </Typography>
            <FormHolder>
              {createElement(contactForm, { parent, selection })}
            </FormHolder>
          </>
        )}
      </SectionHolder>
    </>
  )
}

export default SelectionLinks
