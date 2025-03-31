import {useClient} from 'sanity'
import {kebabCase, omit} from 'lodash'
import batchCommit, {buildDocPatches, buildPatches} from './batchCommit'
import getApiBaseUrl from './getApiBaseUrl'

const SANITY_STUDIO_API_VERSION = import.meta.env.SANITY_STUDIO_API_VERSION

const fetchTemplates = async () => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/templates`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching templates:', error)
    return {leadpages: [], sites: []}
  }
}

const getImageMeta = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject()
    img.src = url
  })

const shapeFields = async (_meta, kind, template, isUpdate = false) => {
  const {id, updated, created} = _meta
  const {name: title, tags, categories, fullPageScreenshotUrlWebp} = template

  const imageMeta = await getImageMeta(fullPageScreenshotUrlWebp)

  const values = {
    _id: id,
    _type: 'template',
    title,
    kind,
    lastMandrelUpdate: updated,
    originalCreatedAt: created,
    tags: tags?.map((tag) => ({
      label: tag,
      value: tag,
    })),
    categories: categories?.map((category) => ({
      label: category,
      value: category,
    })),
    fullPageScreenshotUrlWebpAspectRatio:
      imageMeta?.width && imageMeta?.height && imageMeta.width / imageMeta.height,
    ...(omit(template, [
      'conversionRateLabel',
      'conversionRate',
      'legacyId',
      'uses',
      'sortKey',
      'currentEdition',
      'name',
      'tags',
      'bundles',
      'categories',
    ]) || {}),
  }

  // If this is not a new document don't update the slug
  if (!isUpdate) {
    values.slug = {
      _type: 'slug',
      current: kebabCase(title),
    }
  }

  return values
}

const shapeData = (data, currentDocs = []) => {
  const currentDocIds = new Set(currentDocs.map((doc) => doc._id.replace(/^drafts\./, '')))

  const {updates, newDocs} = data.reduce(
    (acc, {_meta, kind, template}) => {
      const {id} = _meta
      if (!id) return acc

      if (currentDocIds.has(id)) {
        const {_updatedAt} = currentDocs.find((doc) => doc._id.replace(/^drafts\./, '') === id)

        const requiresUpdate =
          _updatedAt && _meta?.updated && new Date(_updatedAt) <= new Date(_meta.updated)

        if (requiresUpdate) {
          const update = shapeFields(_meta, kind, template, true)
          acc.updates.push(update)
        }
      } else {
        const newDoc = shapeFields(_meta, kind, template)
        acc.newDocs.push(newDoc)
      }

      return acc
    },
    {updates: [], newDocs: []}
  )

  return {
    newDocs,
    updates,
  }
}

const templatesListItems = async (context) => {
  const {getClient} = context
  const client = getClient({apiVersion: SANITY_STUDIO_API_VERSION})

  const [_mandrelTemplates, sanityTemplateDocs] = await Promise.all([
    fetchTemplates(),
    client.fetch(`*[_type == "template"] { _id, _updatedAt }`),
  ])

  const {leadpages, sites} = _mandrelTemplates
  const mandrelTemplates = [...leadpages, ...sites]
  const {newDocs: _newDocs, updates: _updates} = shapeData(mandrelTemplates, sanityTemplateDocs)

  const [newDocs, updates] = await Promise.all([Promise.all(_newDocs), Promise.all(_updates)])

  const newDocPatches = buildDocPatches(newDocs)
  const patches = buildPatches(updates)

  await batchCommit({
    patches: [...newDocPatches, ...patches],
    client,
  })
}

export default templatesListItems
