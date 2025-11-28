/**
 * Script para identificar tipos de bloques que están en los datos de Sanity
 * pero no están permitidos en el schema de blockContent
 */

import { createClient } from '@sanity/client'
import { loadEnv } from '../loadEnv'

loadEnv()

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_API_DATASET!,
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_STUDIO_APP_TOKEN,
})

// Tipos permitidos en el nuevo schema (del archivo blockContent.tsx)
const allowedTypes = [
  'block', // tipo base
  'media',
  'embed',
  'table',
  'pageAnchor',
  'startATrial',
  'schemaInlineCTAGlobalBlock',
  'inlineCTA',
  'dropShadowBox',
  'logoGrid',
]

async function findMissingBlockTypes() {
  console.log('🔍 Buscando tipos de bloques en posts del blog...\n')

  try {
    // Obtener todos los posts con su contenido
    const query = `*[_type == "post" && defined(content)] {
      _id,
      title,
      "slug": slug.current,
      "contentTypes": content[]._type
    }`

    const posts = await client.fetch(query)

    // Contar tipos encontrados
    const typeCounts: Record<string, { count: number; posts: string[] }> = {}

    posts.forEach((post: any) => {
      if (post.contentTypes && Array.isArray(post.contentTypes)) {
        post.contentTypes.forEach((type: string) => {
          if (!typeCounts[type]) {
            typeCounts[type] = { count: 0, posts: [] }
          }
          typeCounts[type].count++
          if (!typeCounts[type].posts.includes(post._id)) {
            typeCounts[type].posts.push(post._id)
          }
        })
      }
    })

    // Identificar tipos que no están permitidos
    const missingTypes: string[] = []
    const foundTypes: string[] = []

    Object.keys(typeCounts).forEach((type) => {
      if (!allowedTypes.includes(type)) {
        missingTypes.push(type)
      } else {
        foundTypes.push(type)
      }
    })

    console.log('📊 Resumen de tipos encontrados:\n')
    console.log('✅ Tipos permitidos en el schema:')
    foundTypes.forEach((type) => {
      const info = typeCounts[type]
      console.log(`   - ${type}: ${info.count} bloques en ${info.posts.length} posts`)
    })

    if (missingTypes.length > 0) {
      console.log('\n❌ Tipos NO permitidos en el schema (FALTANTES):')
      missingTypes.forEach((type) => {
        const info = typeCounts[type]
        console.log(`   - ${type}: ${info.count} bloques en ${info.posts.length} posts`)
        console.log(`     Posts afectados: ${info.posts.slice(0, 3).join(', ')}${info.posts.length > 3 ? '...' : ''}`)
      })
    } else {
      console.log('\n✅ Todos los tipos encontrados están permitidos en el schema!')
    }

    // Comparar con schema legacy
    console.log('\n📋 Tipos en schema legacy que deberían estar:')
    const legacyTypes = [
      'inlineCTA',
      'schemaInlineCTAGlobalBlock',
      'logoGrid',
      'dropShadowBox',
      'table',
      'embed',
      'pageAnchor',
      'audio',
      'cardsPreviousNext',
    ]

    legacyTypes.forEach((type) => {
      if (!allowedTypes.includes(type)) {
        console.log(`   ⚠️  ${type} - FALTA en el nuevo schema`)
      } else {
        console.log(`   ✅ ${type} - Presente`)
      }
    })

    return { missingTypes, typeCounts }
  } catch (error) {
    console.error('❌ Error:', error)
    throw error
  }
}

// Ejecutar
findMissingBlockTypes()
  .then(() => {
    console.log('\n✅ Análisis completado')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Error fatal:', error)
    process.exit(1)
  })

