import React from 'react'
import Pinion from '@components/Pinion'
import Heading from '@components/Heading'

const PageHeader = ({ className, children, heading, subHeading, ...props }) => {
  if (!heading && !subHeading) return null

  return (
    <Pinion
      className={className}
      maxWidth="base"
      css={{
        mt: 0,
      }}
      {...props}
    >
      {heading && (
        <Heading
          tag="h1"
          css={{
            textGradient: '45deg, $blue10 -20%, $purple10 40%',
            lineHeight: 1.125,
          }}
          heading={heading}
        />
      )}
      {subHeading && (
        <Heading tag="h3" tagStyle="baseType" heading={subHeading} />
      )}
    </Pinion>
  )
}

export default PageHeader
