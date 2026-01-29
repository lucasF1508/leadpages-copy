/**
 * Script para regenerar el componente cardsBlock en la página component-testing
 * Elimina el componente existente y crea uno nuevo con el formato correcto
 * 
 * Uso:
 *   npm run regenerate-cards-block
 *   o
 *   tsx -r tsconfig-paths/register packages/migration/src/tools/regenerate-cards-block.ts
 */

import { loadEnv } from '../loadEnv'
import { client } from '../client'

loadEnv()

async function regenerateCardsBlock() {
  try {
    console.log('🔍 Buscando página component-testing...')

    // Buscar la página existente
    const existingPage = await client.fetch(
      `*[_type == 'page' && (path == '/component-testing' || slug.current == 'component-testing')] | order(_updatedAt desc) [0]`
    )

    if (!existingPage) {
      console.log('❌ Página component-testing no encontrada')
      process.exit(1)
    }

    console.log('✅ Página encontrada')
    console.log(`   ID: ${existingPage._id}`)

    // Obtener componentes existentes
    const existingComponents = existingPage.components || []
    console.log(`   Componentes existentes: ${existingComponents.length}`)

    // Filtrar componentes cardsBlock existentes
    const otherComponents = existingComponents.filter((comp: any) => comp._type !== 'cardsBlock')
    console.log(`   Componentes que se mantendrán: ${otherComponents.length}`)

    // Crear nuevo componente cardsBlock con formato correcto
    const timestamp = Date.now()
    const newCardsBlock = {
      _type: 'cardsBlock',
      _key: `cards-block-light-${timestamp}`,
      variant: 'light',
      columns: '3', // String, no número
      cards: [
        {
          _key: `card-${timestamp}-1`,
          content: [
            {
              _type: 'block',
              style: 'h3',
              children: [
                {
                  _type: 'span',
                  text: 'Audience Insights',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Listen to our hard-hitting marketing takes and musical insights.',
                },
              ],
            },
          ],
          icon: {},
        },
        {
          _key: `card-${timestamp}-2`,
          content: [
            {
              _type: 'block',
              style: 'h3',
              children: [
                {
                  _type: 'span',
                  text: 'In App Analytics',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Listen to our hard-hitting marketing takes and musical insights.',
                },
              ],
            },
          ],
          icon: {},
        },
        {
          _key: `card-${timestamp}-3`,
          content: [
            {
              _type: 'block',
              style: 'h3',
              children: [
                {
                  _type: 'span',
                  text: 'AI Integrations',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Listen to our hard-hitting marketing takes and musical insights.',
                },
              ],
            },
          ],
          icon: {},
        },
        {
          _key: `card-${timestamp}-4`,
          content: [
            {
              _type: 'block',
              style: 'h3',
              children: [
                {
                  _type: 'span',
                  text: 'Verifone Integration',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Listen to our hard-hitting marketing takes and musical insights.',
                },
              ],
            },
          ],
          icon: {},
        },
        {
          _key: `card-${timestamp}-5`,
          content: [
            {
              _type: 'block',
              style: 'h3',
              children: [
                {
                  _type: 'span',
                  text: 'Social Media Automation',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Listen to our hard-hitting marketing takes and musical insights.',
                },
              ],
            },
          ],
          icon: {},
        },
        {
          _key: `card-${timestamp}-6`,
          content: [
            {
              _type: 'block',
              style: 'h3',
              children: [
                {
                  _type: 'span',
                  text: 'Global Brand Styles',
                },
              ],
            },
            {
              _type: 'block',
              style: 'normal',
              children: [
                {
                  _type: 'span',
                  text: 'Listen to our hard-hitting marketing takes and musical insights.',
                },
              ],
            },
          ],
          icon: {},
        },
      ],
    }

    // Combinar componentes existentes (sin cardsBlock) con el nuevo
    const updatedComponents = [...otherComponents, newCardsBlock]

    console.log('\n📝 Regenerando componente cardsBlock...')
    console.log(`   Nuevo key: ${newCardsBlock._key}`)
    console.log(`   Variant: ${newCardsBlock.variant}`)
    console.log(`   Columns: "${newCardsBlock.columns}" (tipo: ${typeof newCardsBlock.columns})`)
    console.log(`   Cards: ${newCardsBlock.cards.length}`)

    // Actualizar la página
    await client
      .patch(existingPage._id)
      .set({ components: updatedComponents })
      .commit()

    console.log('\n✅ Componente cardsBlock regenerado exitosamente!')
    console.log(`   Total de componentes: ${updatedComponents.length}`)
    console.log('\n📋 Componentes cardsBlock en la página:')
    const cardsBlockComponents = updatedComponents.filter((c: any) => c._type === 'cardsBlock')
    cardsBlockComponents.forEach((comp: any, index: number) => {
      console.log(`   ${index + 1}. Key: ${comp._key}, Variant: ${comp.variant || 'default'}, Columns: "${comp.columns}"`)
    })

    console.log('\n✨ Proceso completado!')
    console.log('   Visita la página en: /component-testing')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Ejecutar el script
if (require.main === module) {
  regenerateCardsBlock()
}

export default regenerateCardsBlock

