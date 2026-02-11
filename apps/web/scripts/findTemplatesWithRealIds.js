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
    // Buscar templates que NO contengan "ejemplo" o "prueba" en el ID
    const templates = await client.fetch(
      `*[_type == "template" && kind == "LeadpageTemplate" && defined(_id) && !(_id match "*ejemplo*") && !(_id match "*prueba*")] | order(_updatedAt desc) [0..5] {
        _id,
        title,
        "slug": slug.current
      }`
    )
    
    if (templates && templates.length > 0) {
      console.log('\n✅ Templates con IDs reales de Leadpages API:')
      templates.forEach((t, i) => {
        console.log(`\n${i + 1}. ${t.title}`)
        console.log(`   Slug: ${t.slug}`)
        console.log(`   ID: ${t._id}`)
        console.log(`   URL: http://localhost:3000/templates/landing-page-template-new/${t.slug}`)
        console.log(`   Preview debería funcionar: ✅`)
      })
    } else {
      console.log('❌ No se encontraron templates con IDs reales')
      console.log('\n💡 Opciones:')
      console.log('1. Usa un template existente como "thanks-for-signing-up"')
      console.log('2. O actualiza el template de ejemplo con un ID real de Mandrel')
    }
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

findTemplates().then(() => process.exit(0)).catch(() => process.exit(1))

