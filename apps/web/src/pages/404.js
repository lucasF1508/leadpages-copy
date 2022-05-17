import React from 'react'
import { getDoc } from '@lib'
import Pinion from '@components/Pinion'
import Heading from '@components/Heading'
import Text from '@components/Text'

const Custom404 = ({ heading, subHeading }) => (
  <>
    <Pinion
      css={{
        box: [
          { property: 'pt' },
          { property: 'pb', multiplier: 3 },
          { property: 'px' },
        ],
      }}
    >
      <Heading heading={heading} />
      <Text content={subHeading} />
    </Pinion>
  </>
)

/* cSpell: disable  */
export async function getStaticProps() {
  const data = await getDoc('none')

  return {
    props: {
      data: {
        ...data,
        data: [
          {
            heading: 'Error 404 - File Not Found',
            subHeading: `The page you were looking for doesn't exist. Please use the navigation above.`,
            seo: {
              seoTitle: 'Error 404 - File Not Found',
            },
          },
        ],
      },
    },
  }
}

export default Custom404
