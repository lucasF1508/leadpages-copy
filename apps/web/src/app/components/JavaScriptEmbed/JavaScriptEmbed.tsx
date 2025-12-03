'use client'

import React, { useEffect, useRef } from 'react'

interface JavaScriptEmbedProps {
  code: string
  [key: string]: any
}

const JavaScriptEmbed = ({ code, ...props }: JavaScriptEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const formTargetRef = useRef<HTMLDivElement>(null)
  const scriptsRef = useRef<string[]>([])
  const formTargetId = useRef(`hubspot-form-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`)

  useEffect(() => {
    console.log('🔵 JavaScriptEmbed mounted with code:', code)
    if (!code) {
      console.log('⚠️ No code provided')
      return
    }

    // Parse and execute JavaScript code
    const parseAndExecuteScripts = async () => {
      console.log('🔵 Starting to parse and execute scripts...')
      const { default: parse } = await import('html-react-parser')
      
      // Parse the HTML to extract script tags
      const scripts: Array<{ attrs: Record<string, string>; content: string }> = []
      parse(code, {
        replace: (domNode: any) => {
          if (domNode.name === 'script') {
            const attrs = domNode.attribs || {}
            const children = domNode.children || []
            
            // Extract inline script content
            let scriptContent = ''
            if (children.length > 0) {
              scriptContent = children
                .map((child: any) => {
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

      // Execute scripts in order
      for (let index = 0; index < scripts.length; index++) {
        const scriptData = scripts[index]
        if (!scriptData) continue
        
        const script = document.createElement('script')
        
        // Set attributes
        Object.keys(scriptData.attrs).forEach((key) => {
          const value = scriptData.attrs[key]
          if (!value) return
          
          if (key === 'src') {
            script.src = value
          } else if (key === 'type') {
            script.type = value
          } else if (key === 'charset') {
            script.charset = value
          } else if (key.startsWith('data-')) {
            script.setAttribute(key, value)
          } else {
            script.setAttribute(key, value)
          }
        })

        // Set inline script content
        if (scriptData.content) {
          let scriptContent = scriptData.content
          
          // Special handling for HubSpot forms - inject target if missing
          if (scriptContent.includes('hbspt.forms.create')) {
            console.log('🔵 Detected HubSpot form script, checking for target...')
            
            // Check if target is already specified
            if (!scriptContent.includes('target:') && !scriptContent.includes('"target"')) {
              console.log('⚠️ No target found, injecting target:', `#${formTargetId.current}`)
              
              // Inject target parameter before the closing brace
              scriptContent = scriptContent.replace(
                /(\{[^}]*)(region:\s*["'][^"']*["']\s*)/,
                `$1$2,\n    target: "#${formTargetId.current}"\n  `
              )
              
              console.log('✅ Modified script:', scriptContent)
            }
          }
          
          script.textContent = scriptContent
        }

        // Generate unique ID to avoid duplicates
        const scriptId = `js-embed-${index}-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`
        script.id = scriptId

        // Check if script already exists
        const existingScript = document.getElementById(scriptId)
        if (!existingScript) {
          // For scripts with src, wait for load before continuing
          if (script.src) {
            await new Promise<void>((resolve, reject) => {
              script.onload = () => {
                console.log(`✅ Script loaded successfully: ${script.src}`)
                resolve()
              }
              script.onerror = () => {
                console.error(`❌ Failed to load script: ${script.src}`)
                reject(new Error(`Failed to load script: ${script.src}`))
              }
              document.body.appendChild(script)
              scriptsRef.current.push(scriptId)
            }).catch(() => {
              // Continue even if script fails to load
            })
          } else {
            // Inline scripts execute immediately when appended
            document.body.appendChild(script)
            scriptsRef.current.push(scriptId)
            console.log('✅ Inline script executed')
          }
        }
      }
    }

    parseAndExecuteScripts().catch((error) => {
      console.error('Error parsing/executing scripts:', error)
    })

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
    <div ref={containerRef} className="javascript-embed" {...props}>
      {/* Container for any HTML content that's not a script */}
      {code && (
        <div
          dangerouslySetInnerHTML={{
            __html: code.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ''),
          }}
        />
      )}
      {/* Target container for HubSpot forms */}
      <div 
        id={formTargetId.current} 
        ref={formTargetRef}
        className="hubspot-form-container"
      />
    </div>
  )
}

export default JavaScriptEmbed
