import Hero, { HeroProps } from '@/components/Hero'
import Rack from '@/components/Rack'
import { RackProps } from '@/components/Rack/Rack'
import { query } from '@/lib/queries'
import { draftMode } from 'next/headers'

interface PageProps {
  data: {
    components: RackProps['components']
    hero: HeroProps['hero']
  }
}

const componentQueries = `
  testimonials[]->,
  faqs[]->,
`

export const componentsQuery = `
  components[] {
    ...,
    ${componentQueries}
    _type == 'section' => {
      ...,
      components[] {
        ...,
        ${componentQueries}
      }
    },
  }
`

export const pageQuery = (slug: string) => query(`*[_type == 'page' && slug.current == '${slug}'] | order(_updatedAt desc) [0]
  {
    ...,
    ${componentsQuery}
  }
`, {
  preview: draftMode().isEnabled,
})

const Page = ({
  data,
}: PageProps) =>  {
  const { components, hero } = data || {}

  return (
    <>
      {!!hero?.length && <Hero hero={hero} />}
      {!!components?.length && <Rack components={components} />}
    </>
  )
}

export default Page