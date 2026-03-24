export const dynamic = 'force-static'

import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import HeroHome from '@/components/Hero/HeroHome'
import Rack from '@/components/Rack'
import { componentsQuery, query } from '@/lib/queries'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default async function Page() {
  // Only use the main Home singleton (not copies like "Home Page Rebrand")
  const { components, hero } =
    (await query(
      `*[_type == 'pageHome' && _id in ['pageHome', 'drafts.pageHome']] | order(_updatedAt desc) [0]
      {
        ...,
        ${componentsQuery}
      }
    `,
      {
        preview: draftMode().isEnabled,
      }
    )?.data) || {}

  return (
    <>
      {!!hero?.length && <HeroHome {...hero[0]} />}
      {!!components?.length && <Rack components={components} />}
    </>
  )
}
