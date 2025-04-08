export const dynamic = 'force-static'

import HeroHome from '@/components/Hero/HeroHome'
import Rack from '@/components/Rack'
import {query} from '@/lib/queries'

export default async function Page() {
  const { components, hero } = await query(`*[_type == 'pageHomeRebrand'] | order(_updatedAt desc) [0]
      {
        ...,
        components[] {
          ...,
          testimonial->
        }
      }
    `)
    .data || {}

  return (
    <>
      {!!hero?.length && <HeroHome {...hero[0]} />}
      {!!components?.length && <Rack components={components} />}
    </>
  )
}
