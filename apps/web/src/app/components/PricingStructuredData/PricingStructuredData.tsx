import type { Plan } from '@/components/PricingCards/PricingCards'

const PricingStructuredData = ({ plans }: { plans: Plan[] }) => {
  const offers = plans.flatMap((plan) =>
    plan.prices
      .filter((p) => !p.override)
      .map((p) => ({
        '@type': 'Offer' as const,
        name: `${plan.title} ${p.period === 'yearly' ? 'Annual' : 'Monthly'}`,
        price: String(p.price),
        priceCurrency: p.currency || 'USD',
      }))
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Leadpages',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web browser',
    description:
      'Landing page builder with unlimited landing pages, pop-ups, and alert bars. Build websites, generate leads, and close sales.',
    url: 'https://www.leadpages.com/pricing',
    offers,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default PricingStructuredData
