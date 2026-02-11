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

async function findTemplate() {
  try {
    const template = await client.fetch(
      `*[_type == "template" && kind == "Leadpage"] | order(_updatedAt desc) [0] {
        _id,
        title,
        "slug": slug.current
      }`
    )
    
    if (template && template.slug) {
      console.log('\n✅ Template encontrado:')
      console.log(`📄 Título: ${template.title}`)
      console.log(`🔗 Slug: ${template.slug}`)
      console.log(`🆔 ID: ${template._id}`)
      console.log(`\n🌐 URL local:`)
      console.log(`http://localhost:3000/templates/landing-page-template-new/${template.slug}`)
      return template
    } else {
      console.log('❌ No se encontraron templates de tipo Leadpage')
      console.log('\n💡 Necesitas crear un template manualmente en Sanity Studio')
      console.log('   Ver: apps/web/scripts/INSTRUCCIONES_CREAR_TEMPLATE.md')
      return null
    }
  } catch (error) {
    console.error('❌ Error:', error.message)
    return null
  }
}

findTemplate().then(() => process.exit(0)).catch(() => process.exit(1))


