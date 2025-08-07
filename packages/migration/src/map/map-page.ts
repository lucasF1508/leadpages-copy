import { SanityDocument } from "sanity"
import mapHero from "./map-hero"
import { omit } from "lodash"
import mapComponent from "./map-component"
import { transferClients } from "@src/client"

const { from } = transferClients

const mapPage = async (docs: SanityDocument[]) => {
  return Promise.all(
    docs.map(async (doc) => {
      const legacyDoc = doc
      const fieldsToExclude = ["redirectToLegacy", "options", "cta"]
      const newDoc: any = omit(doc, fieldsToExclude)

      try {
        const globalCta = await from.fetch(`*[_id == $id][0]`, {
          id: legacyDoc['cta']._ref,
        })
        // Put any global CTA data at the end of the components array
        newDoc['components'][newDoc['components'].length] = globalCta
      } catch (err) {
        console.error(`Error fetching CTA for document ${doc._id}:`, err)
      }

      for (const key in doc) {
        switch (key) {
          case "hero":
            const heroData = Array.isArray(doc[key]) ? doc[key] : [doc[key]]
            const newHeroData = heroData
              .map((hero: { [key: string]: any }) => mapHero(hero))
              .filter(Boolean)

            if (heroData) {
              newDoc[key] = newHeroData
            }
            break
          case "components":
            const componentData = Array.isArray(doc[key]) ? doc[key] : [doc[key]]
            const newComponentData = componentData
              .flatMap((component) => {
                const result = mapComponent(component)
                return Array.isArray(result) ? result : [result]
              })
              .filter(Boolean)

            if (componentData) {
              newDoc[key] = newComponentData
            }
            break
          default:
            break
        }
      }

      return newDoc
    })
  )
}

export default mapPage