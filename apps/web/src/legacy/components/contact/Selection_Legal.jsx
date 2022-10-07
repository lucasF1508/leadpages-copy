import React from 'react'
// components
import SelectionLinks from './SelectionLinks'
import Form_Support from './Form_Support'

const linkArray = [
  {
    sectionLinks: [
      {
        type: 'outbound',
        text: 'Leadpages and data protection',
        route:
          'https://support.leadpages.com/hc/en-us/articles/360003799812-Leadpages-and-GDPR',
      },
      {
        type: 'internal',
        text: 'Leadpages Privacy Policy',
        route: '/privacy',
      },
      {
        type: 'internal',
        text: 'Leadpages Terms of Use',
        route: '/legal',
      },
    ],
  },
]

const Selection_Legal = () => (
  <SelectionLinks
    parent="legal"
    selection="Legal & privacy questions"
    linkArray={linkArray}
    contactForm={Form_Support}
  />
)

export default Selection_Legal
