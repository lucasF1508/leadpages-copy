export const dynamic = 'force-static'

import { draftMode } from 'next/headers'
import { componentsQuery } from '@/(pages)/_page'
import HeroHome from '@/components/Hero/HeroHome'
import Rack from '@/components/Rack'
import { query } from '@/lib/queries'

export default async function Page() {
  const { components, hero } =
    (await query(
      `*[_type == 'pageHome'] | order(_updatedAt desc) [0]
      {
        ...,
        ${componentsQuery}
      }
    `,
      {
        preview: draftMode().isEnabled,
      }
    ).data) || {}

  return (
    <>
      {!!hero?.length && <HeroHome {...hero[0]} />}
      {!!components?.length && <Rack components={components} />}
    </>
  )
}
