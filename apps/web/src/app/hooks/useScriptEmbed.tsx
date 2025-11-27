// TODO: make more better
import type {
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import camelCase from 'lodash/camelCase'
import kebabCase from 'lodash/kebabCase'

export interface UseScriptEmbedProps {
  htmlString: string
  onMount: () => void
  onUnMount: () => void
  options: HTMLReactParserOptions
}

const useScriptEmbed = ({
  htmlString = '',
  onMount = (): undefined => undefined,
  onUnMount = (): undefined => undefined,
  // TODO Audit default function's return. Can we return domNode?
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: optionsOrg = { replace: (domNode: DOMNode): undefined => undefined },
}) => {
  const { replace, ...options } = optionsOrg
  const [components, setComponents] = useState<
    JSX.Element | JSX.Element[] | null | string
  >(null)
  const [scripts, setScripts] = useState<Element['attribs'][] | null>(null)

  useEffect(() => {
    const parseScripts = async () => {
      const { default: parse, domToReact } = await import('html-react-parser')

      const parsedScripts: Element['attribs'][] = []
      const parsedComponents = parse(htmlString, {
        replace: (domNode) => {
          if ('name' in domNode && domNode.name === 'script') {
            if ('attribs' in domNode) parsedScripts.push(domNode.attribs)
            return <></>
          }

          if ('name' in domNode && ['head', 'style'].includes(domNode.name)) {
            return <></>
          }

          if ('name' in domNode && ['body', 'html'].includes(domNode.name)) {
            return (
              <>
                {'children' in domNode &&
                  domToReact(domNode.children as any, options)}
              </>
            )
          }

          return replace(domNode)
        },
        ...options,
      })

      if (parsedComponents) {
        setComponents(parsedComponents)
      }

      if (parsedScripts) {
        setScripts(parsedScripts)
      }
    }

    parseScripts()
    onMount()
  }, [])

  useEffect(() => {
    if (!scripts) return undefined
    scripts.forEach((attrs: Element['attribs']) => {
      const script = document.createElement('script')
      Object.keys(attrs).forEach((key: string) => {
        if (key.includes('data-')) {
          const [, dataValue] = key.split('-')
          script.dataset[camelCase(dataValue)] = attrs[key]
        } else if (key === 'async' || key === 'defer') {
          // Handle boolean attributes - attrs[key] is string | undefined
          const attrValue = attrs[key]
          if (attrValue && attrValue !== 'false') {
            script[key] = true
          }
        } else if (key === 'src' && attrs[key]) {
          script.src = attrs[key]
        } else if (attrs[key]) {
          script.setAttribute(key, attrs[key])
        }
      })
      script.id = `embedSrc-${kebabCase(attrs?.src || 'script')}`

      const existingScript = document.getElementById(script.id)

      if (!existingScript) {
        document.body.appendChild(script)
      }
    })

    return () => {
      if (!scripts) {
        onUnMount()
        return undefined
      }

      scripts.forEach((attrs: Element['attribs']) => {
        const leftScript = document.getElementById(
          `embedSrc-${kebabCase(attrs?.src)}`
        )

        if (leftScript) {
          leftScript?.parentNode?.removeChild(leftScript)
        }
      })
      onUnMount()
      return undefined
    }
  }, [scripts])

  return {
    components,
    scripts,
    setComponents,
    setScripts,
  }
}

export default useScriptEmbed
