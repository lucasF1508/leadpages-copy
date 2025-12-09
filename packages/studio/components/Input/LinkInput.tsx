import type {FieldProps, FormPatch, InputProps, ObjectInputProps, PatchEvent} from 'sanity'
import React from 'react'
import {useToast} from '@sanity/ui'
import {ObjectInput, set, setIfMissing, unset, useClient} from 'sanity'

type OnChangePropsType = FormPatch | FormPatch[] | PatchEvent
type FieldPropsType<T> = Omit<T, 'renderDefault'>

const SANITY_STUDIO_API_PROJECT_ID = import.meta.env.SANITY_STUDIO_API_PROJECT_ID
const SANITY_STUDIO_API_DATASET = import.meta.env.SANITY_STUDIO_API_DATASET
const SANITY_STUDIO_API_VERSION = import.meta.env.SANITY_STUDIO_API_VERSION

const LinkInput = (props: ObjectInputProps) => {
  const {renderInput: _renderInput, renderField: _renderField, onChange, members, value} = props
  const toast = useToast()
  const client = useClient({apiVersion: SANITY_STUDIO_API_VERSION})

  // Función para convertir URLs absolutas a relativas para enlaces internos
  const normalizeInternalUrl = (url: string | undefined, showWarning: boolean = false): string | undefined => {
    if (!url || typeof url !== 'string') return url
    
    // Si ya es una URL relativa, retornarla tal cual
    if (url.startsWith('/')) return url
    
    // Intentar extraer la ruta de URLs absolutas de leadpages.com
    try {
      const urlObj = new URL(url)
      // Si es de leadpages.com, extraer solo el pathname
      if (urlObj.hostname === 'www.leadpages.com' || urlObj.hostname === 'leadpages.com') {
        return urlObj.pathname
      }
      // Si es una URL absoluta de otro dominio, mostrar advertencia solo si se solicita
      if (showWarning) {
        toast.push({
          title: 'Advertencia: URL externa en enlace interno',
          description: `La URL "${url}" es externa. Los enlaces internos deben usar URLs relativas (empezar con "/") o URLs de leadpages.com.`,
          status: 'warning',
        })
      }
    } catch {
      // Si no es una URL válida, retornarla tal cual
    }
    
    return url
  }

  const onPageChange = (onChangeProps: OnChangePropsType) => {
    if (!Array.isArray(onChangeProps)) {
      return undefined
    }

    const operation = onChangeProps.find(({path}) => path.includes('_ref'))

    if (!operation || !('value' in operation) || !operation?.value) {
      return undefined
    }

    const {value: pageRef} = operation

    return client.fetch(`*[_id == "${pageRef}"][0]{ title, path }`).then(({title, path} = {}) => {
      if (!path) {
        console.error('Error did not find a path for document', {
          documentID: pageRef,
          title,
          path,
        })
        toast.push({
          title: 'Error: did not find a path.',
          description:
            'There was an error getting the url to that document. Check your console for more information.',
          status: 'error',
        })
        return undefined
      }

      if (members.some(({key}) => key === 'field-label')) {
        onChange([setIfMissing(title, ['label'])])
      }

      return onChange([unset(['url']), setIfMissing(path, ['url'])])
    })
  }

  const onFileChange = (onChangeProps: OnChangePropsType) => {
    if (!Array.isArray(onChangeProps) && 'patches' in onChangeProps && !onChangeProps?.patches) {
      return undefined
    }

    const _patches = 'patches' in onChangeProps ? onChangeProps.patches : onChangeProps
    const patches = Array.isArray(_patches) ? _patches : [_patches]

    if (patches?.length && patches.some(({type, path}) => type === 'unset' && !path.length)) {
      return onChange([unset(['url'])])
    }

    const assetPatch = patches.find(({path}) => path.includes('asset'))

    if (
      !assetPatch ||
      !('value' in assetPatch) ||
      typeof assetPatch.value !== 'object' ||
      !('_ref' in assetPatch.value) ||
      typeof assetPatch.value._ref !== 'string'
    ) {
      return undefined
    }

    const [type, hash, extension] = assetPatch.value._ref.split('-')
    const url = `https://cdn.sanity.io/${type}s/${SANITY_STUDIO_API_PROJECT_ID}/${SANITY_STUDIO_API_DATASET}/${hash}.${extension}`

    return onChange([unset(['url']), setIfMissing(url, ['url'])])
  }

  const clearUrlOnField = (fieldProps: FieldPropsType<FieldProps>) =>
    _renderField({
      ...fieldProps,
      inputProps: {
        ...fieldProps.inputProps,
        onChange: (onChangeProps) => {
          onChange([unset(['url'])])
          return fieldProps.inputProps.onChange(onChangeProps)
        },
      },
    })

  const renderField = (fieldProps: FieldPropsType<FieldProps>) => {
    const fieldKey = fieldProps.inputId.split('.').at(-1)

    switch (fieldKey) {
      case 'page':
      case 'file':
        return clearUrlOnField(fieldProps)
      default:
        return _renderField(fieldProps)
    }
  }

  const renderInput = (inputProps: FieldPropsType<InputProps>) => {
    const inputKey = inputProps.id.split('.').at(-1)

    switch (inputKey) {
      case 'condition':
        return _renderInput({
          ...inputProps,
          onChange: (props) => {
            // Si se cambia a "internal" y hay una URL, normalizarla
            let patches: FormPatch[] = [unset(['file']), unset(['page'])]
            
            if (Array.isArray(props)) {
              const conditionPatch = props.find((patch: any) => 
                patch.path && patch.path.includes('condition') && 'value' in patch
              )
              
              // Si se cambia a "internal" y hay una URL, intentar normalizarla
              if (conditionPatch?.value === 'internal' && value?.url) {
                const normalizedUrl = normalizeInternalUrl(value.url, true) // Mostrar advertencia si es externa
                // Solo actualizar si la URL cambió (fue normalizada)
                if (normalizedUrl && normalizedUrl !== value.url) {
                  patches.push(set(normalizedUrl, ['url']))
                }
                // Si no se normalizó, mantener la URL tal cual (no hacer nada)
              } else if (conditionPatch?.value !== 'internal') {
                // Si cambia a otra condición que no es internal, limpiar URL
                patches.push(unset(['url']))
              }
              // Si cambia a internal pero no hay URL, no hacer nada con la URL
            } else {
              // Si no es un array, limpiar URL por seguridad
              patches.push(unset(['url']))
            }
            
            onChange(patches)
            return inputProps.onChange(props)
          },
        })
      case 'url':
        // Interceptar cambios en el campo URL para normalizar URLs internas y sincronizar href
        return _renderInput({
          ...inputProps,
          onChange: (onChangeProps) => {
            let finalPatches = onChangeProps
            
            // Si la condición es "internal", normalizar la URL
            if (value?.condition === 'internal') {
              if (Array.isArray(onChangeProps)) {
                const urlPatch = onChangeProps.find((patch: any) => 
                  patch.path && patch.path.includes('url') && 'value' in patch
                )
                if (urlPatch && typeof urlPatch.value === 'string') {
                  const normalizedUrl = normalizeInternalUrl(urlPatch.value, true) // Mostrar advertencia si es externa
                  if (normalizedUrl !== urlPatch.value) {
                    // Reemplazar el patch con la URL normalizada
                    finalPatches = onChangeProps.map((patch: any) => {
                      if (patch === urlPatch) {
                        return {...patch, value: normalizedUrl}
                      }
                      return patch
                    })
                  }
                }
              } else if ('patches' in onChangeProps && Array.isArray(onChangeProps.patches)) {
                const urlPatch = onChangeProps.patches.find((patch: any) => 
                  patch.path && patch.path.includes('url') && 'value' in patch
                )
                if (urlPatch && typeof urlPatch.value === 'string') {
                  const normalizedUrl = normalizeInternalUrl(urlPatch.value, true) // Mostrar advertencia si es externa
                  if (normalizedUrl !== urlPatch.value) {
                    finalPatches = {
                      ...onChangeProps,
                      patches: onChangeProps.patches.map((patch: any) => {
                        if (patch === urlPatch) {
                          return {...patch, value: normalizedUrl}
                        }
                        return patch
                      })
                    }
                  }
                }
              }
            }
            
            // Sincronizar href con url cuando se actualiza url (para blockContent links)
            const urlPatch = Array.isArray(finalPatches) 
              ? finalPatches.find((patch: any) => patch.path && patch.path.includes('url') && 'value' in patch)
              : ('patches' in finalPatches && Array.isArray(finalPatches.patches))
                ? finalPatches.patches.find((patch: any) => patch.path && patch.path.includes('url') && 'value' in patch)
                : null
            
            if (urlPatch && typeof urlPatch.value === 'string') {
              const hrefPatch = set(urlPatch.value, ['href'])
              
              if (Array.isArray(finalPatches)) {
                finalPatches = [...finalPatches, hrefPatch]
              } else if ('patches' in finalPatches) {
                finalPatches = {
                  ...finalPatches,
                  patches: [...finalPatches.patches, hrefPatch]
                }
              }
            }
            
            return inputProps.onChange(finalPatches)
          },
        })
      case 'page':
        return _renderInput({
          ...inputProps,
          onChange: (onChangeProps) => {
            onPageChange(onChangeProps)
            return inputProps.onChange(onChangeProps)
          },
        })
      case 'file':
        return _renderInput({
          ...inputProps,
          onChange: (onChangeProps) => {
            onFileChange(onChangeProps)
            return inputProps.onChange(onChangeProps)
          },
        })

      default:
        return _renderInput(inputProps)
    }
  }

  return <ObjectInput {...props} renderField={renderField} renderInput={renderInput} />
}

export default LinkInput
