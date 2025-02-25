import React from 'react'

// components
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import IntegrationsContent from './IntegrationsContent'
import IntegrationsHeader from './IntegrationsHeader'

const Integrations = ({ categories, docs = [] }) => {
  const integrations = docs.map((doc) => {
    const { title, excerpt, category, status, path, hasSubpage } = doc
    const { icon, content: description } = excerpt
    const { title: connection, text: tooltip } = status

    return {
      integration: title,
      category: category?.title,
      description,
      connection,
      tooltip,
      icon,
      ...(hasSubpage ? { subpage: { route: path } } : {}),
    }
  })

  return (
    <>
      <IntegrationsHeader />
      <IntegrationsContent
        integrations={integrations}
        categories={categories?.map(({ title }) => title)}
      />
      <ReadyToGrow />
    </>
  )
}

export default Integrations
