// added at request of Redbrick for their knowledge panel system
import React from 'react'
import Script from 'next/script'

const RedbrickStructuredDataScript = () => (
  <Script id="redbrick-structured-data-script" type="application/ld+json">
    {`
      {
        "@context":"https://schema.org",
        "@graph":[
          {
            "@type":"Corporation",
            "@id":"https://www.leadpages.com/#organization",
            "name":"Leadpages",
            "legalName":"Leadpages (US), Inc.",
            "alternateName":"Leadpages Canada Inc.",
            "alternateName":"Leadpages.net",
            "url":"https://www.leadpages.com",
            "logo":{
              "@type":"ImageObject",
              "@id":"https://www.leadpages.com/#logo",
              "name":"Leadpages Logo",
              "url":"https://cdn.sanity.io/images/1ux2e04i/production/bc05e1458300266e49e34ee6bd806b09dd81f7bd-1024x1024.jpg",
              "width":512,
              "height":512
            },
            "description":"Leadpages is a lead generation platform that helps small businesses connect with their audience, collect leads, and close sales. Easily build websites, landing pages, pop-ups, alert bars, and more to grow your brand and revenue.",
            "foundingDate":"2013",
            "address":{
              "@type":"PostalAddress",
              "@id":"https://www.leadpages.com/#postal-address",
              "streetAddress":"212 3rd Ave N Ste 475",
              "addressLocality":"Minneapolis",
              "addressRegion":"MN",
              "postalCode":"55401-1478",
              "addressCountry":"US"
            },
            "contactPoint":{
              "@type":"ContactPoint",
              "contactType":"General Inquiries",
              "telephone":"612-230-7321",
              "email":"support@leadpages.com",
              "url":"https://www.leadpages.com/contact"
            },
            "sameAs":[
              "https://www.facebook.com/Leadpages",
              "https://www.linkedin.com/company/leadpages",
              "https://www.twitter.com/Leadpages",
              "https://www.instagram.com/leadpages/",
              "https://www.pinterest.com/leadpagesHQ/"
              "https://www.tiktok.com/@leadpages_"
              "https://www.youtube.com/@LeadpagesSoftware"
            ],
            "parentOrganization":{
              "@type":"Corporation",
              "@id":"https://rdbrck.com/#organization",
              "name":"Redbrick",
              "alternateName":"Redbrick Technologies",
              "legalName":"Redbrick Technologies Inc.",
              "url":"https://rdbrck.com",
              "logo":{
                "@type":"ImageObject",
                "@id":"https://rdbrck.com/#logo",
                "url":"https://rdbrck.com/wp-content/themes/rdbrck/dist/icons/redbrick-logo-dark-600x600.jpg"
              }
            },
            "owns": [
              {
                "@type": "SoftwareApplication",
                "@id": "https://www.leadpages.com/#SoftwareApplication",
                "name": "Leadpages Standard",
                "url": "https://www.leadpages.com/",
                "description": "Leadpages Standard is a complete lead generation platform that includes a website and landing page builder, templates, conversion tools, AI copywriting, and a pop-up and alert bar builder.",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": 444,
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 4.3,
                  "reviewCount": 206
                },
                "review": {
                  "@type": "Review",
                  "author": "John H.",
                  "datePublished": "2023-02-01",
                  "name": "The Rebirth of my Business",
                  "reviewBody": "Leadpages is easy to use. On top of that, the free weekly coaching sessions are second to none. It provides the greatest value of any coaching program I've seen.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5
                  }
                }
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://www.leadpages.com/#SoftwareApplication",
                "name": "Leadpages Pro",
                "url": "https://www.leadpages.com/",
                "description": "Leadpages Pro is a complete lead generation platform that includes a website and landing page builder, templates, conversion tools, AI copywriting, A/B testing, and a pop-up and alert bar builder.",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": 888,
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 4.3,
                  "reviewCount": 206
                },
                "review": {
                  "@type": "Review",
                  "author": "Katie H.",
                  "datePublished": "2023-02-23",
                  "name": "Perfect for Online Entrepreneurs",
                  "reviewBody": "Leadpages is easy to use. Leadpages is perfect for any online entrepreneur who wants to make marketing your products/services easy. I use it for hosting my free webinar/masterclass and connect it with ConvertKit to build my email list and convert sales to my online course! Their customer support is extremely helpful, and they have tons of beautiful templates to choose from, so you don't have to start from scratch. top of that, the free weekly coaching sessions are second to none. It provides the greatest value of any coaching program I've seen.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5
                  }
                }
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://www.leadpages.com/#SoftwareApplication",
                "name": "Leadpages Advanced",
                "url": "https://www.leadpages.com/",
                "description": "Leadpages Advanced is a complete lead generation platform that includes a website and landing page builder, templates, conversion tools, AI copywriting, A/B testing, and a pop-up and alert bar builder.",
                "applicationCategory": "BusinessApplication",
                "offers": {
                  "@type": "Offer",
                  "price": 3588,
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 4.3,
                  "reviewCount": 206
                },
                "review": {
                  "@type": "Review",
                  "author": "Fola O.",
                  "datePublished": "2023-01-21",
                  "name": "Easy to use and intuitive",
                  "reviewBody": "We initially got help from a freelancer with creating landing pages on Leadpages. However after a while we were able to start creating landing pages on leadpages ourselves. The design is intuitive to use for non-techy person. It has all the bells and whistles we need as a small business. Best of all we can be up and running with a new ad campaign in very little time. Pricing is also competitive compared to other providers we explored. For what we want it does the job!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5
                  }
                }
              }
            ]
          },
          {
            "@type":"WebSite",
            "@id":"https://www.leadpages.com/#website",
            "url":"https://www.leadpages.com",
            "name":"Leadpages",
            "description":"Leadpages is a best-in-class digital lead generation platform that enables entrepreneurs and marketers to easily publish web pages, confidently generate leads, and consistently transform clicks into customers. From websites, landing pages, and Facebook ads, Leadpages helps you get in business and stay in business online.",
            "about":{
              "@type":"Corporation",
              "name":"Leadpages",
              "logo":{
                "@id":"https://www.leadpages.com/#logo"
              }
            },
            "publisher":{
              "@type":"Corporation",
              "name":"Leadpages",
              "url":"https://www.leadpages.com",
              "logo":{
                "@id":"https://www.leadpages.com/#logo"
              }
            }
          },
          {
            "@type":"WebPage",
            "@id":"https://www.leadpages.com",
            "url":"https://www.leadpages.com",
            "inLanguage":"en-US",
            "name":"Leadpages | Website &amp;Landing Page Software Small Businesses",
            "isPartOf":{
              "@type":"WebSite",
              "url":"https://www.leadpages.com",
              "name":"Leadpages"
            },
            "description":"A powerful landing page builder that helps create high-converting landing pages and drive sales for businesses. Lead generation and opt-in tools integrated."
          }
        ]
      }
  `}
  </Script>
)

export default RedbrickStructuredDataScript
