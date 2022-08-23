import React from 'react'
// components
import SelectionLinks from './SelectionLinks'
import Form_Support from './Form_Support'

const linkArray = [
  {
    sectionLinks: [
      {
        type: 'outbound',
        text: 'Get started with a Leadpages site',
        route: 'https://support.leadpages.com/hc/en-us/articles/360021974271',
      },
      {
        type: 'outbound',
        text: 'How to create a new landing page',
        route: 'https://support.leadpages.com/hc/en-us/articles/217415887',
      },
      {
        type: 'outbound',
        text: 'How to connect your integrations',
        route: 'https://support.leadpages.com/hc/en-us/articles/115005301047',
      },
      {
        type: 'outbound',
        text: 'How to connect a domain to your account',
        route: 'https://support.leadpages.com/hc/en-us/articles/218820517',
      },
    ],
  },
]

const Selection_TechnicalSupport = () => (
  <SelectionLinks
    parent="technicalsupport"
    selection="Technical support"
    linkArray={linkArray}
    contactForm={Form_Support}
  />
)

export default Selection_TechnicalSupport
