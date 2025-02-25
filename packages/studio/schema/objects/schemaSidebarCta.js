import {F} from '@/schema/tool'

export const schemaSidebarCta = F.object({
  name: 'sidebarCta',
  fields: [
    F.string({
      name: 'ctaHeading',
      initialValue: 'Curious about Leadpages?',
    }),
    F.string({
      name: 'ctaSubHeading',
      initialValue: 'Try it Risk-Free today',
    }),
    F.string({
      name: 'ctaContent',
      args: {
        initialValue: `Create web pages, explore our integrations, and see if we're the right fit for your business.`,
      },
    }),
    F.link({
      name: 'ctaLink',
      description: 'If left blank this will default to: https://lp.leadpages.com/free-trial/',
    }),
  ],
})
