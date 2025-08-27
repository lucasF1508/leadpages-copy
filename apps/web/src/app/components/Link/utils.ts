import type { LinkType } from '@types'

export const hasLink = (link: any): link is LinkType =>
  link?.condition !== 'none'
    ? !!link?.url ||
      ['leadpagesTrigger'].includes(link?.condition) ||
      ['signUp'].includes(link?._type)
    : false

export const hasLinks = (links: any[] = []): links is LinkType[] =>
  links?.some(hasLink)
