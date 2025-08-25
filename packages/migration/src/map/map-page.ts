import { SanityDocument } from "sanity"
import { omit } from "lodash"
import { transferClients } from "@src/client"
import componentMappers from "@src/utils/componentMappers"
import heroMappers from "@src/utils/heroMappers"

const { from } = transferClients

const mapHeroField = async (hero: any): Promise<any[]> => {
  const heroArray = Array.isArray(hero) ? hero : [hero]

  const results = await Promise.all(
    heroArray.map(async (item) => {
      const mapper = heroMappers[item._type]

      if (mapper) {
        return await Promise.resolve(mapper(item))
      }

      console.warn(`Skipping unsupported hero type: ${item._type}`)
      return null
    })
  )

  return results.flat().filter(Boolean).slice(0, 1)
}

const mapComponent = async (component: any): Promise<any | any[]> => {
  const mapper = componentMappers[component._type]

  if (mapper) {
    return await Promise.resolve(mapper(component))
  }

  if (component._type === "spacer") {
    return component
  }

  console.warn(`Skipping unsupported component type: ${component._type}`)
  return null
}

const mapComponentsField = async (components: any) => {
  const componentArray = Array.isArray(components) ? components : [components]
  const results = await Promise.all(
    componentArray.map(async (comp) => {
      const result = await mapComponent(comp)
      return Array.isArray(result) ? result : [result]
    })
  )

  return results.flat().filter(Boolean)
}

const appendGlobalCTA = async (doc: any, newDoc: any) => {
  try {
    const ctaRef = doc?.cta?._ref
    if (!ctaRef) return newDoc

    const globalCta = await from.fetch(`*[_id == $id][0]`, { id: ctaRef })

    if (globalCta) {
      newDoc.components = newDoc.components || []
      newDoc.components.push(globalCta)
    }
    return newDoc
  } catch (err) {
    console.error(`Error fetching CTA for document ${doc._id}:`, err)
  }
}

const mapPage = async (docs: SanityDocument[]) => {
  return Promise.all(
    docs.map(async (doc) => {
      const fieldsToExclude = ["redirectToLegacy", "options", "cta", "parent"]
      const newDoc: any = omit(doc, fieldsToExclude)
      const pageData = await appendGlobalCTA(doc, newDoc)

      for (const key in pageData) {
        switch (key) {
          case "hero":
            pageData.hero = await mapHeroField(pageData.hero)
            break

          case "components":
            pageData.components = await mapComponentsField(pageData.components)
            break

          default:
            break
        }
      }

      return pageData
    })
  )
}

export default mapPage