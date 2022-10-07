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
                "url":"https://www.leadpages.com",
                "logo":{
                  "@type":"ImageObject",
                  "@id":"https://www.leadpages.com/#logo",
                  "name":"Leadpages Logo",
                  "url":"https://www.leadpages.com/icons/icon-512x512.png",
                  "width":512,
                  "height":512
                },
                "description":"Leadpages helps small businesses connect with an audience, collect leads, and close sales. Easily build websites, landing pages, pop-ups, alert bars, and beyond.",
                "foundingDate":"2013",
                "address":{
                  "@type":"PostalAddress",
                  "@id":"https://www.leadpages.com/#postal-address",
                  "streetAddress":"212 Third Avenue North, Suite 475",
                  "addressLocality":"Minneapolis",
                  "addressRegion":"Minnesota",
                  "postalCode":"55401",
                  "addressCountry":"US"
                },
                "ContactPoint":{
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
                ],
                "parentOrganization":{
                  "@type":"Corporation",
                  "@id":"https://rdbrck.com/#organization",
                  "name":"Redbrick",
                  "url":"https://rdbrck.com",
                  "logo":{
                    "@type":"ImageObject",
                    "@id":"https://rdbrck.com/#logo",
                    "url":"https://rdbrck.com/wp-content/themes/rdbrck/dist/icons/redbrick-logo-dark-600x600.jpg"
                  }
                }
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
