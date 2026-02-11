const { createClient } = require('@sanity/client')
const findUp = require('find-up')
require('dotenv').config({
  path: findUp.sync(['.env.local', '.env']),
})

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production_v3',
  apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2024-01-01',
  useCdn: false,
})

async function findTemplates() {
  try {
    // Buscar templates en Sanity
    const sanityTemplates = await client.fetch(
      `*[_type == "template" && kind == "LeadpageTemplate"] | order(_updatedAt desc) [0..2] {
        _id,
        title,
        "slug": slug.current
      }`
    )
    
    console.log('\n📋 TEMPLATES EN SANITY (para páginas nuevas):')
    if (sanityTemplates && sanityTemplates.length > 0) {
      sanityTemplates.forEach((t, i) => {
        console.log(`\n${i + 1}. ${t.title}`)
        console.log(`   Slug: ${t.slug}`)
        console.log(`   URL Sanity: http://localhost:3000/templates/landing-page-template-new/${t.slug}`)
      })
    } else {
      console.log('   ❌ No hay templates en Sanity con kind "LeadpageTemplate"')
      console.log('   💡 Crea uno en Sanity Studio: Templates → Leadpage Templates Gallery')
    }
    
    // Ejemplos conocidos para Mandrel (páginas viejas)
    console.log('\n\n📋 EJEMPLOS PARA MANDREL (páginas viejas con fallback):')
    console.log('   Estos templates probablemente están en Mandrel pero no en Sanity:')
    console.log('   1. thanks-for-signing-up')
    console.log('      URL Mandrel: http://localhost:3000/templates/landing-page-template/thanks-for-signing-up')
    console.log('   2. stand-out-talent-agency')
    console.log('      URL Mandrel: http://localhost:3000/templates/landing-page-template/stand-out-talent-agency')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

findTemplates().then(() => process.exit(0)).catch(() => process.exit(1))

