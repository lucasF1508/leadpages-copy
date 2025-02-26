import type {SanityFileSource} from '@sanity/asset-utils'
import type {FileInputProps, FormPatch, PatchEvent} from 'sanity'
import React from 'react'
import {getFileAsset} from '@sanity/asset-utils'
import {FileInput as SanityFileInput, set, unset, useDataset, useProjectId} from 'sanity'

const setLottiePatches = async ({
  id,
  projectId,
  dataset,
}: {
  id: SanityFileSource
  dataset?: string
  projectId?: string
}) => {
  const {url} = getFileAsset(id, {projectId, dataset}) || {}
  const asset = await fetch(url).then((res) => res.json())

  if (!asset) return false

  const {w: width, h: height, fr: frameRate, op: frames, nm: animationName} = asset

  return [
    set(width, ['width']),
    set(height, ['height']),
    set(frameRate, ['frameRate']),
    set(frames, ['frames']),
    set(animationName, ['animationName']),
  ]
}

const unsetLottiePatches = () => [
  unset(['width']),
  unset(['height']),
  unset(['frameRate']),
  unset(['frames']),
  unset(['animationName']),
]

const LottieFileInput = (props: FileInputProps) => {
  const {onChange: _onChange} = props
  const projectId = useProjectId()
  const dataset = useDataset()

  const onChange = (onChangeProps: FormPatch | FormPatch[] | PatchEvent): void => {
    const patches = 'patches' in onChangeProps ? onChangeProps.patches : onChangeProps

    if (!Array.isArray(patches)) {
      return _onChange(patches)
    }

    const assetPatch = patches.find(({path}) => path.includes('asset'))

    if (assetPatch && assetPatch.type === 'unset') {
      return _onChange([...unsetLottiePatches(), ...patches])
    }

    if (
      !assetPatch ||
      !('value' in assetPatch) ||
      typeof assetPatch.value !== 'object' ||
      !('_ref' in assetPatch.value) ||
      typeof assetPatch.value._ref !== 'string'
    ) {
      return _onChange(patches)
    }

    const id = assetPatch.value._ref

    setLottiePatches({id, projectId, dataset}).then((setPatches) => {
      if (setPatches) {
        return _onChange(setPatches)
      }
    })

    return _onChange(patches)
  }

  return <SanityFileInput {...props} onChange={onChange} />
}

export default LottieFileInput
