import {F} from '@gearbox-built/sanity-schema-tool'
import {SiProbot as icon} from 'react-icons/si'

export const softwareApplication = F.object({
  name: 'softwareApplication',
  title: 'Software Application',
  fields: [
    F.string({name: 'type', readOnly: true, initialValue: 'SoftwareApplication'}),
    F.string({name: 'name', initialValue: 'Leadpages Standard'}),
    F.object({
      name: 'offers',
      fields: [
        F.string({name: 'type', readOnly: true, initialValue: 'Offer'}),
        F.string({name: 'price', initialValue: '444'}),
        F.string({name: 'priceCurrency', initialValue: 'USD'}),
      ],
    }),
    F.object({
      name: 'aggregateRating',
      fields: [
        F.string({name: 'type', readOnly: true, initialValue: 'AggregateRating'}),
        F.string({name: 'ratingValue', initialValue: '4.3'}),
        F.string({name: 'ratingCount', initialValue: '206'}),
      ],
    }),
    F.string({name: 'applicationCategory', initialValue: 'BusinessApplication'}),
  ],
  icon,
  preview: {
    select: {
      title: 'name',
    },
    prepare: ({title}: any) => {
      return {
        title: title,
        subtitle: 'SoftwareApplication',
        media: icon,
      }
    },
  },
})
