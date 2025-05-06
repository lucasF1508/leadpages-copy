import React from 'react'
import Script from 'next/script'

const RedbrickStructuredDataScript = ({ includeSoftwareApplication = true }) => {
  const softwareApplications = includeSoftwareApplication
    ? [
        {
          "@id": "https://www.leadpages.com/#SoftwareApplicationStandard",
          "@type": "SoftwareApplication",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.3,
            "reviewCount": 206
          },
          "applicationCategory": "BusinessApplication",
          "description": "Leadpages Standard is a complete lead generation platform that includes a website and landing page builder, templates, conversion tools, AI copywriting, and a pop-up and alert bar builder.",
          "name": "Leadpages Standard",
          "offers": {
            "@type": "Offer",
            "price": 444,
            "priceCurrency": "USD"
          },
          "review": {
            "@type": "Review",
            "author": { "@type": "Person", "name": "John H." },
            "datePublished": "2023-02-01",
            "name": "The Rebirth of my Business",
            "reviewBody": "Leadpages is easy to use. On top of that, the free weekly coaching sessions are second to none. It provides the greatest value of any coaching program I've seen.",
            "reviewRating": { "@type": "Rating", "ratingValue": 5 }
          },
          "url": "https://www.leadpages.com/"
        },
        {
          "@id": "https://www.leadpages.com/#SoftwareApplicationPro",
          "@type": "SoftwareApplication",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.3,
            "reviewCount": 206
          },
          "applicationCategory": "BusinessApplication",
          "description": "Leadpages Pro is a complete lead generation platform that includes a website and landing page builder, templates, conversion tools, AI copywriting, A/B testing, and a pop-up and alert bar builder.",
          "name": "Leadpages Pro",
          "offers": {
            "@type": "Offer",
            "price": 888,
            "priceCurrency": "USD"
          },
          "review": {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Katie H." },
            "datePublished": "2023-02-23",
            "name": "Perfect for Online Entrepreneurs",
            "reviewBody": "Leadpages is easy to use. Perfect for any online entrepreneur who wants to make marketing your products/services easy. I use it for hosting my free webinar/masterclass and connect it with ConvertKit to build my email list and convert sales to my online course! Their customer support is extremely helpful, and they have tons of beautiful templates to choose from, so you don't have to start from scratch. On top of that, the free weekly coaching sessions are second to none. It provides the greatest value of any coaching program I've seen.",
            "reviewRating": { "@type": "Rating", "ratingValue": 5 }
          },
          "url": "https://www.leadpages.com/"
        },
        {
          "@id": "https://www.leadpages.com/#SoftwareApplicationAdvanced",
          "@type": "SoftwareApplication",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.3,
            "reviewCount": 206
          },
          "applicationCategory": "BusinessApplication",
          "description": "Leadpages Advanced is a complete lead generation platform that includes a website and landing page builder, templates, conversion tools, AI copywriting, A/B testing, and a pop-up and alert bar builder.",
          "name": "Leadpages Advanced",
          "offers": {
            "@type": "Offer",
            "price": 3588,
            "priceCurrency": "USD"
          },
          "review": {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Fola O." },
            "datePublished": "2023-01-21",
            "name": "Easy to use and intuitive",
            "reviewBody": "We initially got help from a freelancer with creating landing pages on Leadpages. However after a while we were able to start creating landing pages on leadpages ourselves. The design is intuitive to use for a non-techy person. It has all the bells and whistles we need as a small business. Best of all we can be up and running with a new ad campaign in very little time. Pricing is also competitive compared to other providers we explored. For what we want it does the job!",
            "reviewRating": { "@type": "Rating", "ratingValue": 5 }
          },
          "url": "https://www.leadpages.com/"
        }
      ]
    : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": "https://www.leadpages.com/#organization",
        "@type": "Corporation",
        "address": {
          "@id": "https://www.leadpages.com/#postal-address",
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressLocality": "Minneapolis",
          "addressRegion": "MN",
          "postalCode": "55401-1478",
          "streetAddress": "212 3rd Ave N Ste 475"
        },
        "alternateName": "Leadpages Canada Inc.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "General Inquiries",
          "email": "support@leadpages.com",
          "telephone": "612-230-7321",
          "url": "https://www.leadpages.com/contact"
        },
        "description": "Leadpages is a lead generation platform that helps small businesses connect with their audience, collect leads, and close sales. Easily build websites, landing pages, pop-ups, alert bars, and more to grow your brand and revenue.",
        "foundingDate": "2013",
        "legalName": "Leadpages (US), Inc.",
        "logo": {
          "@id": "https://www.leadpages.com/#logo",
          "@type": "ImageObject",
          "height": 512,
          "name": "Leadpages Logo",
          "url": "https://cdn.sanity.io/images/1ux2e04i/production/bc05e1458300266e49e34ee6bd806b09dd81f7bd-1024x1024.jpg",
          "width": 512
        },
        "name": "Leadpages",
        "parentOrganization": {
          "@id": "https://rdbrck.com/#organization",
          "@type": "Corporation",
          "alternateName": "Redbrick Technologies",
          "legalName": "Redbrick Technologies Inc.",
          "logo": {
            "@id": "https://rdbrck.com/#logo",
            "@type": "ImageObject",
            "url": "https://rdbrck.com/wp-content/themes/rdbrck/dist/icons/redbrick-logo-dark-600x600.jpg"
          },
          "name": "Redbrick",
          "url": "https://rdbrck.com"
        },
        "sameAs": [
          "https://www.facebook.com/Leadpages",
          "https://www.linkedin.com/company/leadpages",
          "https://www.twitter.com/Leadpages",
          "https://www.instagram.com/leadpages/",
          "https://www.pinterest.com/leadpagesHQ/",
          "https://www.tiktok.com/@leadpages_",
          "https://www.youtube.com/@LeadpagesSoftware"
        ],
        "url": "https://www.leadpages.com",
        ...(includeSoftwareApplication && { "owns": softwareApplications })
      },
      {
        "@id": "https://www.leadpages.com/#website",
        "@type": "WebSite",
        "about": {
          "@type": "Corporation",
          "logo": { "@id": "https://www.leadpages.com/#logo" },
          "name": "Leadpages"
        },
        "description": "Leadpages is a best-in-class digital lead generation platform that enables entrepreneurs and marketers to easily publish web pages, confidently generate leads, and consistently transform clicks into customers. From websites, landing pages, and Facebook ads, Leadpages helps you get in business and stay in business online.",
        "name": "Leadpages",
        "publisher": {
          "@type": "Corporation",
          "logo": { "@id": "https://www.leadpages.com/#logo" },
          "name": "Leadpages",
          "url": "https://www.leadpages.com"
        },
        "url": "https://www.leadpages.com"
      },
      {
        "@id": "https://www.leadpages.com",
        "@type": "WebPage",
        "description": "A powerful landing page builder that helps create high-converting landing pages and drive sales for businesses. Lead generation and opt-in tools integrated.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Leadpages",
          "url": "https://www.leadpages.com"
        },
        "name": "Leadpages | Website & Landing Page Software Small Businesses",
        "url": "https://www.leadpages.com"
      }
    ]
  };

  return (
    <Script id="redbrick-structured-data-script" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export default RedbrickStructuredDataScript;