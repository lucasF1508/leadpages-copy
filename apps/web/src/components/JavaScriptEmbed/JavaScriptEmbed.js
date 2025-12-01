import React, { useEffect, useRef } from 'react'
import { styled } from '@design'

const $JavaScriptEmbed = styled('div', {
  '> *': {
    maxWidth: '100%',
  },
})

const JavaScriptEmbed = ({ code, ...props }) => {
  const containerRef = useRef(null)
  const scriptsRef = useRef([])

  useEffect(() => {
    if (!code) return

    // Parse and execute JavaScript code
    const parseAndExecuteScripts = async () => {
      const { default: parse } = await import('html-react-parser')
      
      // Parse the HTML to extract script tags
      const scripts = []
      parse(code, {
        replace: (domNode) => {
          if (domNode.name === 'script') {
            const attrs = domNode.attribs || {}
            const children = domNode.children || []
            
            // Extract inline script content
            let scriptContent = ''
            if (children.length > 0) {
              scriptContent = children
                .map((child) => {
                  if (child.type === 'text') {
                    return child.data || ''
                  }
                  return ''
                })
                .join('')
            }
            
            scripts.push({
              attrs,
              content: scriptContent,
            })
            return <></>
          }
          return undefined
        },
      })

      // Execute scripts
      scripts.forEach((scriptData, index) => {
        const script = document.createElement('script')
        
        // Set attributes
        Object.keys(scriptData.attrs).forEach((key) => {
          if (key === 'src') {
            script.src = scriptData.attrs[key]
          } else if (key === 'type') {
            script.type = scriptData.attrs[key]
          } else if (key === 'charset') {
            script.charset = scriptData.attrs[key]
          } else if (key.startsWith('data-')) {
            script.setAttribute(key, scriptData.attrs[key])
          } else {
            script.setAttribute(key, scriptData.attrs[key])
          }
        })

        // Set inline script content
        if (scriptData.content) {
          script.textContent = scriptData.content
        }

        // Generate unique ID to avoid duplicates
        const scriptId = `js-embed-${index}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        script.id = scriptId

        // Check if script already exists
        const existingScript = document.getElementById(scriptId)
        if (!existingScript) {
          // For scripts with src, wait for load before executing inline scripts
          if (script.src) {
            script.onload = () => {
              // Script loaded successfully
            }
            script.onerror = () => {
              console.error(`Failed to load script: ${script.src}`)
            }
          }
          
          document.body.appendChild(script)
          scriptsRef.current.push(scriptId)
        }
      })
    }

    parseAndExecuteScripts()

    // Cleanup function - remove scripts on unmount
    return () => {
      scriptsRef.current.forEach((scriptId) => {
        const script = document.getElementById(scriptId)
        if (script && script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
      scriptsRef.current = []
    }
  }, [code])

  return (
    <$JavaScriptEmbed ref={containerRef} {...props}>
      {/* Container for any HTML content that's not a script */}
      {code && (
        <div
          dangerouslySetInnerHTML={{
            __html: code.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ''),
          }}
        />
      )}
    </$JavaScriptEmbed>
  )
}

export default JavaScriptEmbed

