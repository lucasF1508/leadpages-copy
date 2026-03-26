/**
 * Script para poblar la página existente de testing en Sanity.
 *
 * Uso:
 *   npm run create-component-testing
 */

import { loadEnv } from '../loadEnv'
import { client } from '../client'

loadEnv()

async function createComponentTestingPage() {
  try {
    console.log('🔍 Buscando página de testing existente en Sanity...')

    const now = Date.now()
    const block = (text: string) => [
      {
        _type: 'block',
        children: [{ _type: 'span', text }],
      },
    ]

    const link = (label: string, url: string, hasIcon = false, linkStyle?: string) => ({
      _type: 'link',
      condition: 'internal',
      label,
      url,
      hasIcon,
      ...(linkStyle && { linkStyle }),
    })

    const components = [
      {
        _type: 'bannerCta',
        _key: `banner-cta-light-${now}`,
        variant: 'light',
        title: 'Start your free trial today',
        subtitle: 'Grow your business with high-converting landing pages.',
        ctaLabel: 'Get started free',
        ctaHref: '/pricing',
      },
      {
        _type: 'bannerCta',
        _key: `banner-cta-dark-${now}`,
        variant: 'dark',
        title: 'Start your free trial today',
        subtitle: 'Grow your business with high-converting landing pages.',
        ctaLabel: 'Get started free',
        ctaHref: '/pricing',
      },
      {
        _type: 'featureCards',
        _key: `feature-cards-light-${now}`,
        variant: 'light',
        cta: {
          heading: 'Everything you need to convert more',
          content: block('Design, publish and optimize pages in minutes.'),
          links: [link('Try now', '/pricing', true, 'button-solid')],
        },
        cards: [
          {
            _key: `fc-light-1-${now}`,
            title: 'Drag & Drop',
            content: block('Visual editor to create pages without touching code.'),
          },
          {
            _key: `fc-light-2-${now}`,
            title: 'A/B Testing',
            content: block('Compare variants and improve conversions.'),
          },
          {
            _key: `fc-light-3-${now}`,
            title: 'Integraciones',
            content: block('Connect with your favorite tools.'),
          },
        ],
      },
      {
        _type: 'featureCards',
        _key: `feature-cards-dark-${now}`,
        variant: 'dark',
        cta: {
          heading: 'Everything you need to convert more',
          content: block('Design, publish and optimize pages in minutes.'),
          links: [link('Try now', '/pricing', true, 'button-solid')],
        },
        cards: [
          {
            _key: `fc-dark-1-${now}`,
            title: 'Drag & Drop',
            content: block('Visual editor to create pages without touching code.'),
          },
          {
            _key: `fc-dark-2-${now}`,
            title: 'A/B Testing',
            content: block('Compare variants and improve conversions.'),
          },
          {
            _key: `fc-dark-3-${now}`,
            title: 'Integraciones',
            content: block('Connect with your favorite tools.'),
          },
        ],
      },
      {
        _type: 'featureGrid',
        _key: `feature-grid-light-${now}`,
        variant: 'light',
        eyebrow: 'FEATURES',
        heading: block('Features ready to scale'),
        items: [
          { _key: `fg-light-1-${now}`, title: 'Templates', description: block('Get started faster with ready-made designs.') },
          { _key: `fg-light-2-${now}`, title: 'Forms', description: block('Capture leads with optimized forms.') },
          { _key: `fg-light-3-${now}`, title: 'Analytics', description: block('Track results in real time.') },
        ],
      },
      {
        _type: 'featureGrid',
        _key: `feature-grid-dark-${now}`,
        variant: 'dark',
        eyebrow: 'FEATURES',
        heading: block('Features ready to scale'),
        items: [
          { _key: `fg-dark-1-${now}`, title: 'Templates', description: block('Get started faster with ready-made designs.') },
          { _key: `fg-dark-2-${now}`, title: 'Forms', description: block('Capture leads with optimized forms.') },
          { _key: `fg-dark-3-${now}`, title: 'Analytics', description: block('Track results in real time.') },
        ],
      },
      {
        _type: 'integrationsBlock',
        _key: `integrations-light-${now}`,
        variant: 'light',
        overline: 'INTEGRATIONS',
        heading: block('Connected to your favorite tools'),
        subheading: block('HubSpot, Mailchimp, Klaviyo, Slack and more.'),
        label: '90+ integrations available.',
        cta: [link('View integrations', '/integrations')],
        image: {},
      },
      {
        _type: 'integrationsBlock',
        _key: `integrations-dark-${now}`,
        variant: 'dark',
        overline: 'INTEGRATIONS',
        heading: block('Connected to your favorite tools'),
        subheading: block('HubSpot, Mailchimp, Klaviyo, Slack and more.'),
        label: '90+ integrations available.',
        cta: [link('View integrations', '/integrations')],
        image: {},
      },
      {
        _type: 'mediaWithItems',
        _key: `media-with-items-light-${now}`,
        variant: 'light',
        title: block('Multimedia content that guides the user'),
        content: block('Switch between messages and formats to tell your value proposition.'),
        items: [
          {
            _key: `mwi-light-1-${now}`,
            title: 'Step 1',
            value: 'step-1',
            content: block('Present the main benefit clearly.'),
            link: link('View details', '/pricing'),
          },
          {
            _key: `mwi-light-2-${now}`,
            title: 'Step 2',
            value: 'step-2',
            content: block('Reinforce with social proof and results.'),
            link: link('View details', '/pricing'),
          },
        ],
        mediaItems: [{ condition: 'image', image: {} }, { condition: 'image', image: {} }],
      },
      {
        _type: 'mediaWithItems',
        _key: `media-with-items-dark-${now}`,
        variant: 'dark',
        title: block('Multimedia content that guides the user'),
        content: block('Switch between messages and formats to tell your value proposition.'),
        items: [
          {
            _key: `mwi-dark-1-${now}`,
            title: 'Step 1',
            value: 'step-1',
            content: block('Present the main benefit clearly.'),
            link: link('View details', '/pricing'),
          },
          {
            _key: `mwi-dark-2-${now}`,
            title: 'Step 2',
            value: 'step-2',
            content: block('Reinforce with social proof and results.'),
            link: link('View details', '/pricing'),
          },
        ],
        mediaItems: [{ condition: 'image', image: {} }, { condition: 'image', image: {} }],
      },
      {
        _type: 'mediaWithItemsSwitch',
        _key: `media-with-items-switch-light-${now}`,
        variant: 'light',
        label: 'SWITCH',
        title: 'Switch between scenarios',
        content: block('Try different blocks in a single section.'),
        sections: [
          {
            _key: `mws-light-1-${now}`,
            tabLabel: 'Scenario A',
            items: [
              {
                _key: `mws-item-light-1-${now}`,
                pillContent: 'NEW',
                content: block('Sample content for scenario A.'),
                links: [link('Explore', '/pricing', true)],
              },
            ],
          },
          {
            _key: `mws-light-2-${now}`,
            tabLabel: 'Scenario B',
            items: [
              {
                _key: `mws-item-light-2-${now}`,
                pillContent: 'TOP',
                content: block('Sample content for scenario B.'),
                links: [link('Explore', '/pricing', true)],
              },
            ],
          },
        ],
      },
      {
        _type: 'mediaWithItemsSwitch',
        _key: `media-with-items-switch-dark-${now}`,
        variant: 'dark',
        label: 'SWITCH',
        title: 'Switch between scenarios',
        content: block('Try different blocks in a single section.'),
        sections: [
          {
            _key: `mws-dark-1-${now}`,
            tabLabel: 'Scenario A',
            items: [
              {
                _key: `mws-item-dark-1-${now}`,
                pillContent: 'NEW',
                content: block('Sample content for scenario A.'),
                links: [link('Explore', '/pricing', true)],
              },
            ],
          },
          {
            _key: `mws-dark-2-${now}`,
            tabLabel: 'Scenario B',
            items: [
              {
                _key: `mws-item-dark-2-${now}`,
                pillContent: 'TOP',
                content: block('Sample content for scenario B.'),
                links: [link('Explore', '/pricing', true)],
              },
            ],
          },
        ],
      },
      {
        _type: 'faqPlatform',
        _key: `faq-platform-light-${now}`,
        variant: 'light',
        label: 'FAQ',
        heading: 'Frequently asked questions',
        subheading: 'We answer the main questions before you get started.',
        questions: [
          {
            _key: `faq-light-1-${now}`,
            title: 'Is there a free trial?',
            content: block('Yes, you can try with no commitment for a limited time.'),
          },
          {
            _key: `faq-light-2-${now}`,
            title: 'Can I cancel anytime?',
            content: block('Yes, you can cancel at any time.'),
          },
        ],
      },
      {
        _type: 'faqPlatform',
        _key: `faq-platform-dark-${now}`,
        variant: 'dark',
        label: 'FAQ',
        heading: 'Frequently asked questions',
        subheading: 'We answer the main questions before you get started.',
        questions: [
          {
            _key: `faq-dark-1-${now}`,
            title: 'Is there a free trial?',
            content: block('Yes, you can try with no commitment for a limited time.'),
          },
          {
            _key: `faq-dark-2-${now}`,
            title: 'Can I cancel anytime?',
            content: block('Yes, you can cancel at any time.'),
          },
        ],
      },
      {
        _type: 'textWithStats',
        _key: `text-with-stats-light-${now}`,
        variant: 'light',
        content: block('Results that back up your strategy.'),
        stats: [
          { _key: `tws-light-1-${now}`, stat: '50K+', content: 'Active users' },
          { _key: `tws-light-2-${now}`, stat: '10M+', content: 'Leads generated' },
        ],
      },
      {
        _type: 'textWithStats',
        _key: `text-with-stats-dark-${now}`,
        variant: 'dark',
        content: block('Results that back up your strategy.'),
        stats: [
          { _key: `tws-dark-1-${now}`, stat: '50K+', content: 'Active users' },
          { _key: `tws-dark-2-${now}`, stat: '10M+', content: 'Leads generated' },
        ],
      },
      {
        _type: 'subFooter',
        _key: `sub-footer-light-${now}`,
        variant: 'light',
        label: 'CTA',
        heading: 'Ready to get started?',
        subheading: 'Activate your trial and publish today.',
        ctaLabel: 'Start trial',
        ctaHref: '/pricing',
      },
      {
        _type: 'subFooter',
        _key: `sub-footer-dark-${now}`,
        variant: 'dark',
        label: 'CTA',
        heading: 'Ready to get started?',
        subheading: 'Activate your trial and publish today.',
        ctaLabel: 'Start trial',
        ctaHref: '/pricing',
      },
      {
        _type: 'sectionCTA',
        _key: `section-cta-dark-${now}`,
        variant: 'dark',
        label: 'CTA',
        heading: 'Activate your account now',
        subheading: 'No commitment, cancel anytime.',
        ctas: [{ _key: `scta-dark-1-${now}`, label: 'Try for free', url: '/pricing', style: 'button-solid' }],
      },
      {
        _type: 'sectionCTA',
        _key: `section-cta-gradient-${now}`,
        variant: 'gradient',
        label: 'CTA',
        heading: 'Activate your account now',
        subheading: 'No commitment, cancel anytime.',
        ctas: [{ _key: `scta-grad-1-${now}`, label: 'Try for free', url: '/pricing', style: 'button-solid' }],
      },
      {
        _type: 'templateMarketplaceFooterCTA',
        _key: `template-marketplace-footer-cta-${now}`,
        label: 'TEMPLATES',
        heading: block('Find the perfect template for your business'),
        subheading: 'Explore designs ready to convert.',
        inputPlaceholder: 'Enter your email',
        buttonText: 'Explore',
        buttonHref: '/templates',
      },
      {
        _type: 'testimonialBlock',
        _key: `testimonial-block-light-${now}`,
        variant: 'light',
        heading: 'What our customers say',
        subheading: 'Real growth stories.',
        testimonials: [
          {
            _id: `tb-light-1-${now}`,
            title: 'Excellent tool',
            authorTitle: 'CMO',
            testimonial: 'We increased conversions in just a few weeks.',
            image: {},
            rating: 5,
          },
        ],
      },
      {
        _type: 'testimonialBlock',
        _key: `testimonial-block-dark-${now}`,
        variant: 'dark',
        heading: 'What our customers say',
        subheading: 'Real growth stories.',
        testimonials: [
          {
            _id: `tb-dark-1-${now}`,
            title: 'Excellent tool',
            authorTitle: 'CMO',
            testimonial: 'We increased conversions in just a few weeks.',
            image: {},
            rating: 5,
          },
        ],
      },
      {
        _type: 'testimonialFeaturedBlock',
        _key: `testimonial-featured-light-${now}`,
        variant: 'light',
        heading: 'Featured testimonials',
        subheading: 'Results from our customers.',
        testimonials: [
          {
            _id: `tfb-light-1-${now}`,
            title: 'Highly recommended',
            authorTitle: 'Founder',
            testimonial: 'Implementation was fast and simple.',
            image: {},
            rating: 5,
          },
          {
            _id: `tfb-light-2-${now}`,
            title: 'Great impact',
            authorTitle: 'Marketing Lead',
            testimonial: 'Helped us organize and scale campaigns.',
            image: {},
            rating: 5,
          },
          {
            _id: `tfb-light-3-${now}`,
            title: 'Clear results',
            authorTitle: 'Growth Manager',
            testimonial: 'We got more leads with less friction.',
            image: {},
            rating: 5,
          },
        ],
      },
      {
        _type: 'testimonialFeaturedBlock',
        _key: `testimonial-featured-dark-${now}`,
        variant: 'dark',
        heading: 'Featured testimonials',
        subheading: 'Results from our customers.',
        testimonials: [
          {
            _id: `tfb-dark-1-${now}`,
            title: 'Highly recommended',
            authorTitle: 'Founder',
            testimonial: 'Implementation was fast and simple.',
            image: {},
            rating: 5,
          },
          {
            _id: `tfb-dark-2-${now}`,
            title: 'Great impact',
            authorTitle: 'Marketing Lead',
            testimonial: 'Helped us organize and scale campaigns.',
            image: {},
            rating: 5,
          },
          {
            _id: `tfb-dark-3-${now}`,
            title: 'Clear results',
            authorTitle: 'Growth Manager',
            testimonial: 'We got more leads with less friction.',
            image: {},
            rating: 5,
          },
        ],
      },
    ]

    const existingPage = await client.fetch(
      `*[_type == 'page' && (path == '/testing' || slug.current == 'testing')] | order(_updatedAt desc) [0]{ _id, title, path }`
    )

    if (!existingPage?._id) {
      console.error('❌ No se encontró la página /testing en Sanity.')
      console.error('   Crea la página en el CMS y vuelve a correr este script.')
      process.exit(1)
    }

    console.log('✅ Página encontrada. Actualizando componentes...')
    console.log(`   ID: ${existingPage._id}`)

    await client.patch(existingPage._id).set({ components }).commit()

    console.log(`✅ Componentes actualizados (${components.length} bloques).`)
    console.log('\n✨ Proceso completado!')
    console.log('   Visita: /testing')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  createComponentTestingPage()
}

export default createComponentTestingPage
