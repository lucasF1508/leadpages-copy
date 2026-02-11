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
      `*[_type == "template" && slug.current == "thanks-for-signing-up"] {
        _id,
        title,
        "slug": slug.current,
        kind
      }[0]`
    )
    
    if (template) {
      console.log('\n✅ Template encontrado:')
      console.log(`📄 Título: ${template.title}`)
      console.log(`🔗 Slug: ${template.slug}`)
      console.log(`🆔 ID: ${template._id}`)
      console.log(`📋 Kind: ${template.kind}`)
      console.log(`\n🌐 URL directa en Sanity Studio:`)
      console.log(`http://localhost:3333/studio/production_v3/template/${template._id}`)
      console.log(`\n📍 Ubicación en Sanity Studio:`)
      console.log(`1. Abre: http://localhost:3333/studio`)
      console.log(`2. Ve a: Templates → Leadpage Templates Gallery`)
      console.log(`3. Busca: "${template.title}"`)
      console.log(`   (o filtra por slug: "thanks-for-signing-up")`)
    } else {
      console.log('❌ No se encontró el template "thanks-for-signing-up" en Sanity')
      console.log('\n💡 El template puede estar solo en Mandrel.')
      console.log('   La URL funcionará con fallback:')
      console.log('   http://localhost:3000/templates/landing-page-template-new/thanks-for-signing-up')
    }
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

findTemplate().then(() => process.exit(0)).catch(() => process.exit(1))

