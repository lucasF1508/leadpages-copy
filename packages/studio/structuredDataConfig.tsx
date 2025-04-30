import {structuredDataConfig} from '@gearbox-built/sanity-structured-data'
import {article, organization, softwareApplication} from '@/schema/structuredData'

export const config = structuredDataConfig({
  types: {
    article,
    softwareApplication,
    organization,
    webPage: undefined,
    webSite: undefined,
    breadcrumbList: undefined,
    faqPage: undefined,
    videoObject: undefined,
    imageObject: undefined,
  },
})

export default config
