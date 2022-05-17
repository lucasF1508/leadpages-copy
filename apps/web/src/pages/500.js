import React from 'react'
import { getDoc } from '@lib'
import Pinion from '@components/Pinion'
import Heading from '@components/Heading'
import Text from '@components/Text'

const Custom500 = ({ heading, subHeading }) => (
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
            heading: 'Error 500 - Server Error',
          },
        ],
      },
    },
  }
}

export default Custom500
