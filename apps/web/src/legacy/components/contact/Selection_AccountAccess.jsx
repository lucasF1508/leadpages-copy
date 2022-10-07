import React from 'react'
// components
import SelectionLinks from './SelectionLinks'
import Form_Support from './Form_Support'

const linkArray = [
  {
    sectionLinks: [
      {
        type: 'outbound',
        text: 'Change your Leadpages password',
        route:
          'https://support.leadpages.com/hc/en-us/articles/221399408-Change-your-Leadpages-password',
      },
      {
        type: 'outbound',
        text: 'Log in to Leadpages',
        route:
          'https://support.leadpages.com/hc/en-us/articles/203522310-Log-in-to-Leadpages',
      },
    ],
  },
]

const Selection_AccountAccess = () => (
  <SelectionLinks
    parent="accountaccess"
    selection="Account access"
    linkArray={linkArray}
    contactForm={Form_Support}
  />
)

export default Selection_AccountAccess
