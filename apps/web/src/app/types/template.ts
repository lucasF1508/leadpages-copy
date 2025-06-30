import { MandrelCategory } from "./mandrelCategory"
import { Slug } from "./sanity"
import { TagType as Tag } from "./tag"

type TemplateKind = "LeadpageTemplate" | "SiteTemplate"

type TemplateType = {
  categories: MandrelCategory[]
  enabled: boolean
  fullPageScreenshotUrlWebp?: string
  fullPageScreenshotUrlWebpAspectRatio: number
  kind: TemplateKind
  lastMandrelUpdate?: string
  originalCreatedAt: string
  previewUrl: string
  releaseDate: string
  slug: Slug
  tags: Tag[]
  thumbnailAspect: number
  thumbnailUrl: string
  thumbnailUrlWebp: string
  title: string
  _createdAt: string
  _id: string
  _rev: string
  _type: "template"
  _updatedAt: string
}

export type { TemplateType, TemplateKind }