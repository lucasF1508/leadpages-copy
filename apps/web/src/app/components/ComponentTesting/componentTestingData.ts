/**
 * Datos de ejemplo para la página component-testing
 * Estos datos pueden ser usados en Sanity para crear los componentes de prueba
 */

export const componentTestingData = {
  // 1. Testimonial Dark
  testimonialDark: {
    _type: 'testimonialBlock',
    _key: 'testimonial-dark-1',
    heading: 'What Our Customers Say',
    subheading: 'Testimonial Dark Variant',
    variant: 'dark',
    testimonials: [
      {
        _key: 'testimonial-1',
        title: 'John Doe',
        authorTitle: 'CEO, Company Name',
        testimonial: 'This is an amazing product that has transformed our business. The features are incredible and the support is outstanding.',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-testimonial-1',
          },
        },
      },
      {
        _key: 'testimonial-2',
        title: 'Jane Smith',
        authorTitle: 'Marketing Director, Another Company',
        testimonial: 'We have seen incredible results since implementing this solution. Highly recommended for any business looking to grow.',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-testimonial-2',
          },
        },
      },
      {
        _key: 'testimonial-3',
        title: 'Mike Johnson',
        authorTitle: 'Founder, Startup Inc',
        testimonial: 'The best investment we have made this year. The ROI has been exceptional and the team loves using it.',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-testimonial-3',
          },
        },
      },
      {
        _key: 'testimonial-4',
        title: 'Sarah Williams',
        authorTitle: 'Product Manager, Tech Corp',
        testimonial: 'Outstanding quality and service. This product has exceeded all our expectations and delivered on every promise.',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-testimonial-4',
          },
        },
      },
    ],
  },

  // 2. Testimonial Light
  testimonialLight: {
    _type: 'testimonialBlock',
    _key: 'testimonial-light-1',
    heading: 'Customer Success Stories',
    subheading: 'Testimonial Light Variant',
    variant: 'light',
    testimonials: [
      {
        _key: 'testimonial-5',
        title: 'David Brown',
        authorTitle: 'CTO, Innovation Labs',
        testimonial: 'This platform has revolutionized how we work. The intuitive interface and powerful features make it a must-have tool.',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-testimonial-5',
          },
        },
      },
      {
        _key: 'testimonial-6',
        title: 'Emily Davis',
        authorTitle: 'Operations Manager, Growth Co',
        testimonial: 'We have streamlined our entire workflow thanks to this solution. The time savings alone make it worth every penny.',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-testimonial-6',
          },
        },
      },
    ],
  },

  // 3. FAQ Accordion Dark
  faqAccordionDark: {
    _type: 'faqAccordion',
    _key: 'faq-dark-1',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our product and services.',
    ctaUrl: '/faq',
    ctaText: 'Visit the FAQ Page →',
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

  // 4. FAQ Accordion Light
  faqAccordionLight: {
    _type: 'faqAccordion',
    _key: 'faq-light-1',
    heading: 'Common Questions',
    description: 'Everything you need to know about our platform and services.',
    ctaUrl: '/faq',
    ctaText: 'View All FAQs →',
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

  // 5. Feature Scroll Dark
  featureScrollDark: {
    _type: 'featureScroll',
    _key: 'feature-scroll-dark-1',
    heading: 'Our Features',
    subheading: 'Rebuilt from the ground up, faster, smarter, limitless. A completely new interface built for modern marketers.',
    variant: 'dark',
    laptopImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-laptop-dark',
      },
    },
    features: [
      {
        _key: 'feature-1',
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'icon-feature-1',
          },
        },
        title: 'Global Brand Styles',
        description: 'Maintain consistent branding across all your pages and campaigns with our global brand style system.',
      },
      {
        _key: 'feature-2',
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'icon-feature-2',
          },
        },
        title: 'Powerful AI Tools',
        description: 'Leverage artificial intelligence to optimize your content, improve conversions, and automate repetitive tasks.',
      },
      {
        _key: 'feature-3',
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'icon-feature-3',
          },
        },
        title: 'Social Media Automation',
        description: 'Schedule and publish content across all your social media channels from one centralized dashboard.',
      },
    ],
  },

  // 6. Feature Scroll Light
  featureScrollLight: {
    _type: 'featureScroll',
    _key: 'feature-scroll-light-1',
    heading: 'Powerful Features',
    subheading: 'Everything you need to create, manage, and optimize your marketing campaigns in one place.',
    variant: 'light',
    laptopImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-laptop-light',
      },
    },
    features: [
      {
        _key: 'feature-4',
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'icon-feature-4',
          },
        },
        title: 'Advanced Analytics',
        description: 'Track performance metrics, analyze user behavior, and make data-driven decisions with comprehensive analytics.',
      },
      {
        _key: 'feature-5',
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'icon-feature-5',
          },
        },
        title: 'Seamless Integrations',
        description: 'Connect with your favorite tools and services through our extensive integration marketplace.',
      },
      {
        _key: 'feature-6',
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'icon-feature-6',
          },
        },
        title: 'Mobile Optimization',
        description: 'Ensure your content looks perfect on all devices with our responsive design tools and mobile preview.',
      },
    ],
  },
}

/**
 * Array de componentes en orden para agregar a la página component-testing
 */
export const componentTestingComponents = [
  componentTestingData.testimonialDark,
  componentTestingData.testimonialLight,
  componentTestingData.faqAccordionDark,
  componentTestingData.faqAccordionLight,
  componentTestingData.featureScrollDark,
  componentTestingData.featureScrollLight,
]

