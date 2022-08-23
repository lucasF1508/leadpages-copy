import React from 'react'
// components
import SelectionLinks from './SelectionLinks'
import Form_Sales from './Form_Sales'

const linkArray = [
  {
    sectionLinks: [
      {
        type: 'outbound',
        text: 'Take a 5-minute tour of Leadpages',
        route: 'https://www.leadpages.com/demo',
      },
      {
        type: 'outbound',
        text: 'How to build a landing page',
        route: 'https://support.leadpages.com/hc/en-us/articles/217415887',
      },
      {
        type: 'outbound',
        text: 'How to build a Leadpages website',
        route: 'https://support.leadpages.com/hc/en-us/articles/360021974271',
      },
      {
        type: 'outbound',
        text: 'Discover your publishing options',
        route:
          'https://support.leadpages.com/hc/en-us/articles/203522550-Publishing-overview',
      },
    ],
  },
]

const Selection_ConsideringLeadpages = () => (
  <SelectionLinks
    parent="consideringleadpages"
    selection="Considering Leadpages"
    linkArray={linkArray}
    contactForm={Form_Sales}
  />
)

export default Selection_ConsideringLeadpages
