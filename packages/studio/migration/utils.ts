import {getCliClient} from 'sanity/cli'
import {buildPatches, mergePatches, batchCommit} from '../utils/batchCommit'
import pick from 'lodash/pick'
import type {PortableTextBlock} from 'sanity'

export const client = getCliClient().withConfig({
  apiVersion: '2021-06-15',
})

export const shapeVideo = (component: any) => {
  const videoFields: any = pick(component, [
    'videoHideControls',
    'videoDesktopLarge',
    'videoDesktopSmall',
    'videoTablet',
    'videoMobile',
  ])

  const hasVideoFields = !!Object.values(videoFields).length

  if (!hasVideoFields) {
    return {
      hasVideoFields,
      video: {},
      videoFields: {},
    }
  }

  const aspectRatio = 0.5625

  const video = {
    _type: 'video',
    aspectRatio,
    width: 1920,
    height: 1080,
    files: Object.keys(videoFields).reduce<any>((acc, key) => {
      if (key === 'videoHideControls' || !videoFields[key]) return acc

      const width = {
        videoDesktopLarge: 1920,
        videoDesktopSmall: 1280,
        videoTablet: 960,
        videoMobile: 640,
      }[key] as number
      const height = width * aspectRatio

      return [
        ...acc,
        {
          width,
          height,
          link: videoFields[key],
          type: 'video/mp4',
        },
      ]
    }, []),
  }

  return {
    hasVideoFields,
    video,
    videoFields,
  }
}

export const getTextFromBlockContent = (_content: PortableTextBlock | PortableTextBlock[]) => {
  const content = Array.isArray(_content) ? _content : [_content]

  return content.reduce((string, block) => {
    if (block?._type !== 'block') return string

    const children = Array.isArray(block.children) ? block.children : [block.children]

    return [
      string,
      children
        .reduce((words, child) => {
          if (!child?.text) return string

          return [words, child.text].join(' ')
        }, '')
        .trim(),
    ]
      .join(' ')
      .trim()
  }, '')
}

export const migrateDocs = async ({
  query = '',
  mapDocuments = (array: any) => array,
  dryRun = false,
  callBack = ({results, data}: any) => {},
}) => {
  const results = await client.fetch(query)

  const array = Array.isArray(results) ? results : [results]

  if (!results || !array.length) {
    console.log('No documents to migrate')
    return undefined
  }

  const data = mapDocuments(array)
  if (dryRun) {
    callBack({
      results,
      data,
    })
    return undefined
  }

  const patches = mergePatches(buildPatches(data))

  await batchCommit({
    patches,
    client,
  })

  console.log(`Migration complete. ${patches.length} commited`)
  return undefined
}
