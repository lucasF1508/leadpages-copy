import React from 'react'
// components
import SelectionLinks from './SelectionLinks'
import Form_Support from './Form_Support'

const linkArray = [
  {
    sectionLinks: [
      {
        type: 'outbound',
        text: 'Update or change your billing information',
        route: 'https://support.leadpages.com/hc/en-us/articles/218976278',
      },
      {
        type: 'outbound',
        text: 'Upgrade your account',
        route:
          'https://support.leadpages.com/hc/en-us/articles/203523050-Upgrade-your-Leadpages-account',
      },
      {
        type: 'outbound',
        text: 'Billing history and receipts',
        route:
          'https://support.leadpages.com/hc/en-us/articles/210568718-Billing-History-and-Receipts',
      },
    ],
  },
]

const Selection_Billing = () => (
  <SelectionLinks
    parent="billing"
    selection="Billing"
    linkArray={linkArray}
    contactForm={Form_Support}
  />
)

export default Selection_Billing
