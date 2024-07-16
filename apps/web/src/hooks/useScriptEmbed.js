import { useState, useEffect } from 'react'
import kebabCase from 'lodash/kebabCase'
import camelCase from 'lodash/camelCase'

const useScriptEmbed = ({
  htmlString,
  options: optionsOrg = { replace: () => undefined },
  onMount = () => undefined,
  onUnMount = () => undefined,
}) => {
  const { replace, ...options } = optionsOrg
  const [components, setComponents] = useState(null)
  const [scripts, setScripts] = useState(null)

  useEffect(() => {
    const parseScripts = async () => {
      const { default: parse, domToReact } = await import('html-react-parser')
      if (!htmlString) return

      const parsedScripts = []
      const parsedComponents = parse(htmlString, {
        replace: (domNode) => {
          if (domNode.name === 'script') {
            parsedScripts.push(domNode.attribs)
            return <></>
          }

          if (['style', 'head'].includes(domNode.name)) {
            return <></>
          }

          if (['html', 'body'].includes(domNode.name)) {
            return <>{domToReact(domNode.children, options)}</>
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
    scripts.forEach((attrs) => {
      const script = document.createElement('script')
      Object.keys(attrs).forEach((key) => {
        if (key.includes('data-')) {
          const [, ...dataValue] = key.split('-')
          script.dataset[camelCase(dataValue)] = attrs[key]
        } else {
          script[key] = attrs[key] || true
        }
      })
      script.id = `embedSrc-${kebabCase(attrs?.src)}`

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

      scripts.forEach((attrs) => {
        const leftScript = document.getElementById(
          `embedSrc-${kebabCase(attrs?.src)}`
        )

        if (leftScript) {
          leftScript.parentNode.removeChild(leftScript)
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
