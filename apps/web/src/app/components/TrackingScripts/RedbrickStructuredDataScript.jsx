import React from 'react'

const RedbrickStructuredDataScript = () => {
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
        "url": "https://www.leadpages.com"
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
        "breadcrumb": { "@id": "https://www.leadpages.com/#breadcrumb" },
        "description": "A powerful landing page builder that helps create high-converting landing pages and drive sales for businesses. Lead generation and opt-in tools integrated.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Leadpages",
          "url": "https://www.leadpages.com"
        },
        "name": "Leadpages | Website & Landing Page Software Small Businesses",
        "url": "https://www.leadpages.com"
      },
      {
        "@id": "https://www.leadpages.com/#breadcrumb",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.leadpages.com/"
          }
        ]
      }
    ]
  };

  return (
    <script
      id="redbrick-structured-data-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  );
};

export default RedbrickStructuredDataScript;
