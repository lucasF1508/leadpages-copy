import React from 'react'
// components
import SelectionLinks from './SelectionLinks'
import Form_Partnerships from './Form_Partnerships'

const linkArray = [
  {
    sectionLinks: [
      {
        type: 'outbound',
        text: 'Become a Leadpages affiliate',
        route: 'https://lps.lpages.co/partners/',
      },
      {
        type: 'outbound',
        text: 'Write a guest blog post',
        route: 'https://lps.lpages.co/guest-blog-submission/',
      },
    ],
  },
]

const Selection_Partnerships = () => (
  <SelectionLinks
    parent="partnerships"
    selection="Business partnerships"
    linkArray={linkArray}
    contactForm={Form_Partnerships}
  />
)

export default Selection_Partnerships
