import React from 'react'

// data
import { integrationsArray } from '@legacy/data/integrations_data'

// components
import IntegrationsContent from './IntegrationsContent'
import IntegrationsHeader from './IntegrationsHeader'
import ReadyToGrow from '../product/ReadyToGrow'

const Integrations = () => {
  const categories = [
    'Analytics',
    'CRM',
    'Digital Advertising',
    'Ecommerce',
    'Email Marketing',
    'Live Chat',
    'Marketing Automation',
    'Other',
    'Payments',
    'Scheduling',
    'Social Media',
    'Video',
    'Webinar',
    'Website',
  ]

  return (
    <>
      <IntegrationsHeader />
      <IntegrationsContent
        integrations={integrationsArray}
        categories={categories}
      />
      <ReadyToGrow />
    </>
  )
}

export default Integrations
