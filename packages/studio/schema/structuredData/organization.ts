import {F} from '@gearbox-built/sanity-schema-tool'
import {GoOrganization as icon} from 'react-icons/go'

export const organization = F.object({
  name: 'organization',
  title: 'Organization',
  fields: [
    F.string({name: 'type', readOnly: true, initialValue: 'Corporation'}),
    F.string({
      name: 'id',
      title: '@id',
      description:
        'Node identifier used for linking external nodes and overriding dynamic node creation.',
      initialValue: 'https://www.leadpages.com/#organization',
    }),
    F.string({name: 'name', initialValue: 'Leadpages'}),
    F.string({name: 'alternateName', initialValue: 'Leadpages Canada Inc.'}),
    F.string({name: 'legalName', initialValue: 'Leadpages (US), Inc.'}),
    F.image({name: 'logo'}),
    F.string({
      name: 'description',
      initialValue:
        'Leadpages is a lead generation platform that helps small businesses connect with their audience, collect leads, and close sales. Easily build websites, landing pages, pop-ups, alert bars, and more to grow your brand and revenue.',
    }),
    F.date({name: 'foundingDate', initialValue: '2013'}),
    F.string({name: 'email', initialValue: 'support@leadpages.com'}),
    F.string({name: 'telephone', initialValue: '612-230-7321'}),
    F.string({name: 'url', initialValue: 'https://www.leadpages.com/'}),
    F.object({
      name: 'address',
      fields: [
        F.string({name: 'type', readOnly: true, initialValue: 'PostalAddress'}),
        F.string({name: 'addressCountry', initialValue: 'US'}),
        F.string({name: 'addressLocality', initialValue: 'Minneapolis'}),
        F.string({name: 'addressRegion', initialValue: 'MN'}),
        F.string({name: 'postalCode', initialValue: '55401-1478'}),
        F.string({name: 'streetAddress', initialValue: '212 3rd Ave N Ste 475'}),
      ],
    }),
    F.object({
      name: 'contactPoint',
      fields: [
        F.string({name: 'type', readOnly: true, initialValue: 'ContactPoint'}),
        F.string({name: 'email', initialValue: 'support@leadpages.com'}),
        F.string({name: 'telephone', initialValue: '612-230-7321'}),
      ],
    }),
  ],
  icon,
  preview: {
    select: {
      name: 'name',
      alternateName: 'alternateName',
    },
    prepare: ({name, alternateName}: any) => {
      return {
        title: name || alternateName,
        subtitle: 'Organization',
        media: icon,
      }
    },
  },
})
