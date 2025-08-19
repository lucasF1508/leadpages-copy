import type {TemplateKind} from './mandrel'
import type { MandrelCategory } from "./mandrelCategory"
import type { Slug } from "./sanity"
import type { TagType as Tag } from "./tag"

type TemplateType = {
  _createdAt: string
  _id: string
  _rev: string
  _type: "template"
  _updatedAt: string
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
}

export type { TemplateType }
export { TemplateKind }