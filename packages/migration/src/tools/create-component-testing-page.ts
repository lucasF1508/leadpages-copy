/**
 * Script para crear/actualizar la página component-testing con los 6 componentes de ejemplo
 * 
 * Uso:
 *   npm run create-component-testing
 *   o
 *   tsx -r tsconfig-paths/register packages/migration/src/tools/create-component-testing-page.ts
 */

import { loadEnv } from '../loadEnv'
import { client } from '../client'

loadEnv()

// Datos de los componentes - 6 componentes totales (2 testimonials, 2 FAQ, 2 FeatureScroll)
const components = [
  {
    _type: 'testimonialBlock',
    _key: 'testimonial-dark-1',
    heading: 'What Our Customers Say',
    variant: 'dark',
    testimonials: [
      {
        _key: 'testimonial-1',
        title: 'John Doe',
        authorTitle: 'CEO, Company Name',
        testimonial: 'This is an amazing product that has transformed our business. The features are incredible and the support is outstanding.',
      },
      {
        _key: 'testimonial-2',
        title: 'Jane Smith',
        authorTitle: 'Marketing Director, Another Company',
        testimonial: 'We have seen incredible results since implementing this solution. Highly recommended for any business looking to grow.',
      },
      {
        _key: 'testimonial-3',
        title: 'Mike Johnson',
        authorTitle: 'Founder, Startup Inc',
        testimonial: 'The best investment we have made this year. The ROI has been exceptional and the team loves using it.',
      },
      {
        _key: 'testimonial-4',
        title: 'Sarah Williams',
        authorTitle: 'Product Manager, Tech Corp',
        testimonial: 'Outstanding quality and service. This product has exceeded all our expectations and delivered on every promise.',
      },
    ],
  },
  {
    _type: 'testimonialBlock',
    _key: 'testimonial-light-1',
    heading: 'Customer Success Stories',
    variant: 'light',
    testimonials: [
      {
        _key: 'testimonial-5',
        title: 'David Brown',
        authorTitle: 'CTO, Innovation Labs',
        testimonial: 'This platform has revolutionized how we work. The intuitive interface and powerful features make it a must-have tool.',
      },
      {
        _key: 'testimonial-6',
        title: 'Emily Davis',
        authorTitle: 'Operations Manager, Growth Co',
        testimonial: 'We have streamlined our entire workflow thanks to this solution. The time savings alone make it worth every penny.',
      },
    ],
  },
  {
    _type: 'faqAccordion',
    _key: 'faq-dark-1',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our product and services.',
    ctaUrl: '/faq',
    ctaText: 'Visit the FAQ Page',
    variant: 'dark',
    questions: [
      {
        _key: 'faq-1',
        title: 'What is the main feature of this product?',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'The main feature is to provide a comprehensive solution that helps businesses streamline their operations and improve efficiency.',
              },
            ],
          },
        ],
      },
      {
        _key: 'faq-2',
        title: 'How do I get started?',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Getting started is easy! Simply sign up for an account, complete the onboarding process, and you will be ready to use all features within minutes.',
              },
            ],
          },
        ],
      },
      {
        _key: 'faq-3',
        title: 'What kind of support do you offer?',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'We offer 24/7 customer support via email, chat, and phone. Our team is always ready to help you with any questions or issues you may have.',
              },
            ],
          },
        ],
      },
      {
        _key: 'faq-4',
        title: 'Can I customize the product to my needs?',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Yes! Our product is highly customizable. You can configure settings, integrate with other tools, and adapt it to match your specific workflow requirements.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _type: 'faqAccordion',
    _key: 'faq-light-1',
    heading: 'Common Questions',
    description: 'Everything you need to know about our platform and services.',
    ctaUrl: '/faq',
    ctaText: 'View All FAQs',
    variant: 'light',
    questions: [
      {
        _key: 'faq-5',
        title: 'What pricing plans are available?',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'We offer several pricing plans to suit different business needs, from starter plans for small teams to enterprise solutions for large organizations.',
              },
            ],
          },
        ],
      },
      {
        _key: 'faq-6',
        title: 'Is there a free trial?',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.',
              },
            ],
          },
        ],
      },
      {
        _key: 'faq-7',
        title: 'How secure is my data?',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Security is our top priority. We use industry-standard encryption, regular security audits, and comply with all major data protection regulations.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _type: 'featureScroll',
    _key: 'feature-scroll-dark-1',
    heading: 'Our Features',
    subheading: 'Rebuilt from the ground up, faster, smarter, limitless. A completely new interface built for modern marketers.',
    variant: 'dark',
    laptopImage: {},
    features: [
      {
        _key: 'feature-1',
        icon: {},
        title: 'Global Brand Styles',
        description: 'Maintain consistent branding across all your pages and campaigns with our global brand style system.',
      },
      {
        _key: 'feature-2',
        icon: {},
        title: 'Powerful AI Tools',
        description: 'Leverage artificial intelligence to optimize your content, improve conversions, and automate repetitive tasks.',
      },
      {
        _key: 'feature-3',
        icon: {},
        title: 'Social Media Automation',
        description: 'Schedule and publish content across all your social media channels from one centralized dashboard.',
      },
    ],
  },
  {
    _type: 'featureScroll',
    _key: 'feature-scroll-light-1',
    heading: 'Powerful Features',
    subheading: 'Everything you need to create, manage, and optimize your marketing campaigns in one place.',
    variant: 'light',
    laptopImage: {},
    features: [
      {
        _key: 'feature-4',
        icon: {},
        title: 'Advanced Analytics',
        description: 'Track performance metrics, analyze user behavior, and make data-driven decisions with comprehensive analytics.',
      },
      {
        _key: 'feature-5',
        icon: {},
        title: 'Seamless Integrations',
        description: 'Connect with your favorite tools and services through our extensive integration marketplace.',
      },
      {
        _key: 'feature-6',
        icon: {},
        title: 'Mobile Optimization',
        description: 'Ensure your content looks perfect on all devices with our responsive design tools and mobile preview.',
      },
    ],
  },
]

async function createComponentTestingPage() {
  try {
    console.log('🔍 Buscando página component-testing...')

    // Crear documentos de testimonial primero
    console.log('📝 Creando documentos de testimonial...')
    const testimonialDocs = [
      {
        _type: 'testimonial',
        title: 'John Doe',
        authorTitle: 'CEO, Company Name',
        testimonial: 'This is an amazing product that has transformed our business. The features are incredible and the support is outstanding.',
      },
      {
        _type: 'testimonial',
        title: 'Jane Smith',
        authorTitle: 'Marketing Director, Another Company',
        testimonial: 'We have seen incredible results since implementing this solution. Highly recommended for any business looking to grow.',
      },
      {
        _type: 'testimonial',
        title: 'Mike Johnson',
        authorTitle: 'Founder, Startup Inc',
        testimonial: 'The best investment we have made this year. The ROI has been exceptional and the team loves using it.',
      },
      {
        _type: 'testimonial',
        title: 'Sarah Williams',
        authorTitle: 'Product Manager, Tech Corp',
        testimonial: 'Outstanding quality and service. This product has exceeded all our expectations and delivered on every promise.',
      },
      {
        _type: 'testimonial',
        title: 'David Brown',
        authorTitle: 'CTO, Innovation Labs',
        testimonial: 'This platform has revolutionized how we work. The intuitive interface and powerful features make it a must-have tool.',
      },
      {
        _type: 'testimonial',
        title: 'Emily Davis',
        authorTitle: 'Operations Manager, Growth Co',
        testimonial: 'We have streamlined our entire workflow thanks to this solution. The time savings alone make it worth every penny.',
      },
    ]

    // Crear o buscar testimonials existentes y obtener sus IDs
    const testimonialIds = []
    for (const testimonial of testimonialDocs) {
      // Buscar si ya existe un testimonial con el mismo título
      const existing = await client.fetch(
        `*[_type == 'testimonial' && title == $title] | order(_updatedAt desc) [0]`,
        { title: testimonial.title }
      )

      if (existing) {
        console.log(`   ✓ Testimonial "${testimonial.title}" ya existe`)
        testimonialIds.push(existing._id)
      } else {
        const created = await client.create(testimonial)
        console.log(`   ✓ Testimonial "${testimonial.title}" creado`)
        testimonialIds.push(created._id)
      }
    }

    // Actualizar componentes con referencias usando el formato correcto
    const timestamp = Date.now()
    const componentsWithRefs = components.map((comp, compIndex) => {
      if (comp._type === 'testimonialBlock') {
        if (comp._key === 'testimonial-dark-1') {
          return {
            ...comp,
            testimonials: testimonialIds.slice(0, 4).map((id, index) => ({
              _key: `testimonial-dark-ref-${timestamp}-${compIndex}-${index}`,
              _type: 'reference',
              _ref: id,
              _weak: false,
            })),
          }
        } else if (comp._key === 'testimonial-light-1') {
          return {
            ...comp,
            testimonials: testimonialIds.slice(4, 6).map((id, index) => ({
              _key: `testimonial-light-ref-${timestamp}-${compIndex}-${index}`,
              _type: 'reference',
              _ref: id,
              _weak: false,
            })),
          }
        }
      }
      return comp
    })

    // Componente CardsBlock con variante light para agregar
    const cardsBlockComponent = [
      {
        _type: 'cardsBlock',
        _key: 'cards-block-light-1',
        variant: 'light',
        columns: '3',
        cards: [
          {
            _key: 'card-1',
            content: [
              {
                _type: 'block',
                style: 'h3',
                children: [
                  {
                    _type: 'span',
                    text: 'Audience Insights',
                  },
                ],
              },
              {
                _type: 'block',
                style: 'normal',
                children: [
                  {
                    _type: 'span',
                    text: 'Listen to our hard-hitting marketing takes and musical insights.',
                  },
                ],
              },
            ],
            icon: {},
          },
          {
            _key: 'card-2',
            content: [
              {
                _type: 'block',
                style: 'h3',
                children: [
                  {
                    _type: 'span',
                    text: 'In App Analytics',
                  },
                ],
              },
              {
                _type: 'block',
                style: 'normal',
                children: [
                  {
                    _type: 'span',
                    text: 'Listen to our hard-hitting marketing takes and musical insights.',
                  },
                ],
              },
            ],
            icon: {},
          },
          {
            _key: 'card-3',
            content: [
              {
                _type: 'block',
                style: 'h3',
                children: [
                  {
                    _type: 'span',
                    text: 'AI Integrations',
                  },
                ],
              },
              {
                _type: 'block',
                style: 'normal',
                children: [
                  {
                    _type: 'span',
                    text: 'Listen to our hard-hitting marketing takes and musical insights.',
                  },
                ],
              },
            ],
            icon: {},
          },
          {
            _key: 'card-4',
            content: [
              {
                _type: 'block',
                style: 'h3',
                children: [
                  {
                    _type: 'span',
                    text: 'Verifone Integration',
                  },
                ],
              },
              {
                _type: 'block',
                style: 'normal',
                children: [
                  {
                    _type: 'span',
                    text: 'Listen to our hard-hitting marketing takes and musical insights.',
                  },
                ],
              },
            ],
            icon: {},
          },
          {
            _key: 'card-5',
            content: [
              {
                _type: 'block',
                style: 'h3',
                children: [
                  {
                    _type: 'span',
                    text: 'Social Media Automation',
                  },
                ],
              },
              {
                _type: 'block',
                style: 'normal',
                children: [
                  {
                    _type: 'span',
                    text: 'Listen to our hard-hitting marketing takes and musical insights.',
                  },
                ],
              },
            ],
            icon: {},
          },
          {
            _key: 'card-6',
            content: [
              {
                _type: 'block',
                style: 'h3',
                children: [
                  {
                    _type: 'span',
                    text: 'Global Brand Styles',
                  },
                ],
              },
              {
                _type: 'block',
                style: 'normal',
                children: [
                  {
                    _type: 'span',
                    text: 'Listen to our hard-hitting marketing takes and musical insights.',
                  },
                ],
              },
            ],
            icon: {},
          },
        ],
      },
    ]

    // Componentes AddOnCards para agregar
    const addOnCardsComponents = [
      {
        _type: 'addOnCards',
        _key: 'addon-cards-dark-1',
        variant: 'dark',
        pillContent: 'ADD ONS',
        content: [
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'Amplify the power of your plan with add-ons',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Enhance your plan with optional add-ons, available after signup.',
              },
            ],
          },
        ],
        cards: [
          {
            _key: 'addon-card-1',
            title: 'Lead Enrichment',
            content: 'Get richer lead insights and improve lead quality to fuel smarter sales and marketing.',
            pricesLabel: 'From',
            prices: [
              {
                _key: 'price-1',
                currency: 'USD',
                period: 'monthly',
                price: '15',
                symbol: '$',
                priceIncludes: 'Includes 40 enriched leads/mo',
              },
            ],
            links: [
              {
                _type: 'link',
                condition: 'internal',
                url: '/lead-enrichment',
                label: 'View Lead Enrichment',
                hasIcon: false,
              },
            ],
            icon: {},
          },
          {
            _key: 'addon-card-2',
            title: 'Add Users',
            content: 'Invite team members to your Leadpages account to collaborate and optimize efficiently',
            pricesLabel: '',
            prices: [
              {
                _key: 'price-2',
                currency: 'USD',
                period: 'monthly',
                price: '15',
                symbol: '$',
                priceIncludes: 'per user',
              },
            ],
            links: [
              {
                _type: 'link',
                condition: 'internal',
                url: '/add-users',
                label: 'View Add Users',
                hasIcon: false,
              },
            ],
            icon: {},
          },
        ],
      },
      {
        _type: 'addOnCards',
        _key: 'addon-cards-light-1',
        variant: 'light',
        pillContent: 'ADD ONS',
        content: [
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'Amplify the power of your plan with add-ons',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Enhance your plan with optional add-ons, available after signup.',
              },
            ],
          },
        ],
        cards: [
          {
            _key: 'addon-card-3',
            title: 'Advanced Analytics',
            content: 'Get detailed insights and analytics to track performance and optimize your campaigns.',
            pricesLabel: 'From',
            prices: [
              {
                _key: 'price-3',
                currency: 'USD',
                period: 'monthly',
                price: '25',
                symbol: '$',
                priceIncludes: 'Includes advanced reporting',
              },
            ],
            links: [
              {
                _type: 'link',
                condition: 'internal',
                url: '/analytics',
                label: 'View Analytics',
                hasIcon: false,
              },
            ],
            icon: {},
          },
          {
            _key: 'addon-card-4',
            title: 'Priority Support',
            content: 'Get priority support with faster response times and dedicated account management.',
            pricesLabel: '',
            prices: [
              {
                _key: 'price-4',
                currency: 'USD',
                period: 'monthly',
                price: '50',
                symbol: '$',
                priceIncludes: '24/7 priority support',
              },
            ],
            links: [
              {
                _type: 'link',
                condition: 'internal',
                url: '/support',
                label: 'View Support',
                hasIcon: false,
              },
            ],
            icon: {},
          },
        ],
      },
    ]

    // Buscar la página existente
    const existingPage = await client.fetch(
      `*[_type == 'page' && (path == '/component-testing' || slug.current == 'component-testing')] | order(_updatedAt desc) [0]`
    )

    if (existingPage) {
      console.log('✅ Página encontrada. Agregando nuevos componentes...')
      console.log(`   ID: ${existingPage._id}`)

      // Obtener componentes existentes
      const existingComponents = existingPage.components || []
      console.log(`   Componentes existentes: ${existingComponents.length}`)

      // Obtener todas las claves existentes para evitar duplicados
      const existingKeys = new Set(existingComponents.map((c: any) => c._key).filter(Boolean))
      
      // Generar claves únicas para los nuevos componentes
      const timestamp = Date.now()
      const generateUniqueKey = (baseKey: string, index: number) => {
        const key = `${baseKey}-${timestamp}-${index}`
        if (existingKeys.has(key)) {
          return `${key}-${Math.random().toString(36).substr(2, 9)}`
        }
        existingKeys.add(key)
        return key
      }

      // Asegurar que todos los componentes tengan claves únicas
      const newComponentsWithRefs = componentsWithRefs.map((comp, index) => ({
        ...comp,
        _key: comp._key ? generateUniqueKey(comp._key, index) : `component-${timestamp}-${index}`,
      }))

      const newAddOnCards = addOnCardsComponents.map((comp, index) => ({
        ...comp,
        _key: comp._key ? generateUniqueKey(comp._key, index) : `addon-${timestamp}-${index}`,
        cards: comp.cards?.map((card: any, cardIndex: number) => ({
          ...card,
          _key: card._key ? generateUniqueKey(card._key, cardIndex) : `card-${timestamp}-${index}-${cardIndex}`,
        })),
      }))

      const newCardsBlock = cardsBlockComponent.map((comp, index) => ({
        ...comp,
        _key: comp._key ? generateUniqueKey(comp._key, index) : `cards-${timestamp}-${index}`,
        cards: comp.cards?.map((card: any, cardIndex: number) => ({
          ...card,
          _key: card._key ? generateUniqueKey(card._key, cardIndex) : `card-block-${timestamp}-${index}-${cardIndex}`,
        })),
      }))

      // Verificar si los componentes ya existen antes de agregarlos
      const componentsToAdd = []
      
      for (const comp of [...newComponentsWithRefs, ...newAddOnCards, ...newCardsBlock]) {
        const exists = existingComponents.some((existing: any) => 
          existing._type === comp._type && 
          existing._key === comp._key
        )
        if (!exists) {
          componentsToAdd.push(comp)
        }
      }

      // Combinar componentes existentes con los nuevos
      const allComponents = [...existingComponents, ...componentsToAdd]

      // Asegurar que todos los componentes tengan _key único
      const finalComponents = allComponents.map((comp: any, index: number) => {
        if (!comp._key) {
          return {
            ...comp,
            _key: `component-${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`,
          }
        }
        return comp
      })

      // Verificar unicidad de claves
      const keys = new Map()
      const uniqueComponents = finalComponents.map((comp: any) => {
        if (keys.has(comp._key)) {
          const newKey = `${comp._key}-${Math.random().toString(36).substr(2, 9)}`
          keys.set(newKey, true)
          return { ...comp, _key: newKey }
        }
        keys.set(comp._key, true)
        return comp
      })

      // Actualizar los componentes
      await client
        .patch(existingPage._id)
        .set({ components: uniqueComponents })
        .commit()

      console.log('✅ Componentes agregados exitosamente!')
      console.log(`   Componentes nuevos agregados: ${componentsToAdd.length}`)
      console.log(`   Total de componentes: ${uniqueComponents.length}`)
    } else {
      console.log('📄 Página no encontrada. Creando nueva página...')

      // Generar claves únicas para todos los componentes
      const timestamp = Date.now()
      const generateUniqueKey = (baseKey: string, index: number) => {
        return `${baseKey}-${timestamp}-${index}`
      }

      const newComponentsWithRefs = componentsWithRefs.map((comp, index) => ({
        ...comp,
        _key: comp._key ? generateUniqueKey(comp._key, index) : `component-${timestamp}-${index}`,
      }))

      const newAddOnCards = addOnCardsComponents.map((comp, index) => ({
        ...comp,
        _key: comp._key ? generateUniqueKey(comp._key, index) : `addon-${timestamp}-${index}`,
        cards: comp.cards?.map((card: any, cardIndex: number) => ({
          ...card,
          _key: card._key ? generateUniqueKey(card._key, cardIndex) : `card-${timestamp}-${index}-${cardIndex}`,
        })),
      }))

      const newCardsBlock = cardsBlockComponent.map((comp, index) => ({
        ...comp,
        _key: comp._key ? generateUniqueKey(comp._key, index) : `cards-${timestamp}-${index}`,
        cards: comp.cards?.map((card: any, cardIndex: number) => ({
          ...card,
          _key: card._key ? generateUniqueKey(card._key, cardIndex) : `card-block-${timestamp}-${index}-${cardIndex}`,
        })),
      }))

      const pageData = {
        _type: 'page',
        title: 'Component Testing',
        slug: {
          _type: 'slug',
          current: 'component-testing',
        },
        path: '/component-testing',
        components: [...newComponentsWithRefs, ...newAddOnCards, ...newCardsBlock],
      }

      // Crear nueva página
      const newPage = await client.create(pageData)

      console.log('✅ Página creada exitosamente!')
      console.log(`   ID: ${newPage._id}`)
      console.log(`   Path: ${newPage.path}`)
      console.log(`   Total de componentes: ${pageData.components.length}`)
    }

    // Obtener la página actualizada para mostrar los componentes
    const updatedPage = await client.fetch(
      `*[_type == 'page' && _id == $id] [0]`,
      { id: existingPage?._id || newPage?._id }
    )

    console.log('\n📋 Componentes en la página:')
    const allComponentsList = updatedPage?.components || []
    
    allComponentsList.forEach((comp: any, index: number) => {
      console.log(`   ${index + 1}. ${comp._type} (${comp.variant || 'default'}) - Key: ${comp._key || 'SIN KEY'}`)
    })
    
    // Verificar claves duplicadas
    const keyCounts = new Map()
    allComponentsList.forEach((comp: any) => {
      if (comp._key) {
        keyCounts.set(comp._key, (keyCounts.get(comp._key) || 0) + 1)
      }
    })
    
    const duplicates = Array.from(keyCounts.entries()).filter(([_, count]) => count > 1)
    if (duplicates.length > 0) {
      console.log('\n⚠️  Claves duplicadas encontradas:')
      duplicates.forEach(([key, count]) => {
        console.log(`   - ${key}: aparece ${count} veces`)
      })
    } else {
      console.log('\n✅ Todas las claves son únicas!')
    }

    console.log('\n✨ Proceso completado!')
    console.log('   Visita la página en: /component-testing')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Ejecutar el script
if (require.main === module) {
  createComponentTestingPage()
}

export default createComponentTestingPage

