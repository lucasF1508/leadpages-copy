/**
 * Script para corregir el componente cardsBlock en la página component-testing
 * Corrige el campo columns de número a string
 * 
 * Uso:
 *   npm run fix-cards-block
 *   o
 *   tsx -r tsconfig-paths/register packages/migration/src/tools/fix-cards-block-component.ts
 */

import { loadEnv } from '../loadEnv'
import { client } from '../client'

loadEnv()

async function fixCardsBlockComponent() {
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

    // Buscar y corregir componentes cardsBlock
    const updatedComponents = existingComponents.map((comp: any) => {
      if (comp._type === 'cardsBlock') {
        console.log(`   🔧 Corrigiendo cardsBlock con key: ${comp._key}`)
        
        // Convertir columns de número a string si es necesario
        let columns = comp.columns
        if (typeof columns === 'number') {
          columns = String(columns)
          console.log(`      ✓ columns convertido de ${comp.columns} a "${columns}"`)
        } else if (columns === undefined || columns === null) {
          columns = '2' // valor por defecto
          console.log(`      ✓ columns establecido a "2" (valor por defecto)`)
        }

        return {
          ...comp,
          columns,
        }
      }
      return comp
    })

    // Verificar si hubo cambios
    const hasChanges = JSON.stringify(existingComponents) !== JSON.stringify(updatedComponents)
    
    if (!hasChanges) {
      console.log('✅ No se encontraron componentes cardsBlock que necesiten corrección')
      return
    }

    // Actualizar la página con los componentes corregidos
    console.log('\n📝 Actualizando página con componentes corregidos...')
    await client
      .patch(existingPage._id)
      .set({ components: updatedComponents })
      .commit()

    console.log('✅ Componentes corregidos exitosamente!')
    
    // Mostrar resumen
    const cardsBlockComponents = updatedComponents.filter((c: any) => c._type === 'cardsBlock')
    console.log(`\n📋 Componentes cardsBlock encontrados: ${cardsBlockComponents.length}`)
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
  fixCardsBlockComponent()
}

export default fixCardsBlockComponent

