/**
 * Script para crear un template de ejemplo en Sanity
 * 
 * Uso: node apps/web/scripts/createExampleTemplate.js
 * 
 * Este script crea un template de ejemplo en Sanity Studio que puede usarse
 * para probar la nueva página de templates.
 */

const { createClient } = require('@sanity/client')
const findUp = require('find-up')
const path = require('path')
require('dotenv').config({
  path: findUp.sync(['.env.local', '.env']),
})

  // Configuración del cliente de Sanity
// Usar el token de escritura (STUDIO_APP_TOKEN_DANGEROUS)
const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production_v3',
  apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2024-01-01',
  token: process.env.STUDIO_APP_TOKEN_DANGEROUS || process.env.SANITY_STUDIO_APP_TOKEN,
  useCdn: false,
})

// IMPORTANTE: El kind debe ser "LeadpageTemplate" o "SiteTemplate", no "Leadpage" o "Site"

// Generar un ID único para el template
const generateId = () => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 9)
  return `template-ejemplo-prueba-${timestamp}-${random}`
}

// Datos del template de ejemplo
const templateData = {
  _type: 'template',
  _id: generateId(),
  
  // Content
  title: 'Ejemplo Template de Prueba',
  heading: 'Transform Your Business with Our Premium Template',
  content: {
    label: 'Best Seller',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Este es un template de ejemplo diseñado para demostrar todas las funcionalidades de la nueva página de templates. Incluye diseño moderno, responsive, y todas las características que necesitas para crear landing pages de alta conversión.',
            marks: [],
          },
        ],
        style: 'normal',
        markDefs: [],
      },
    ],
  },
  id: 'ejemplo-template-prueba-id-12345',
  
  // Meta
  slug: {
    _type: 'slug',
    current: 'ejemplo-template-prueba',
  },
  kind: 'LeadpageTemplate', // Debe ser "LeadpageTemplate" o "SiteTemplate", no "Leadpage"
  
  // Categories (ejemplo - normalmente read-only)
  categories: [
    {
      _key: 'cat1',
      _type: 'tag',
      label: 'Business',
      value: 'business',
    },
  ],
  
  // Tags (ejemplo - normalmente read-only)
  tags: [
    {
      _key: 'tag1',
      _type: 'tag',
      label: 'Modern',
      value: 'modern',
    },
    {
      _key: 'tag2',
      _type: 'tag',
      label: 'Responsive',
      value: 'responsive',
    },
  ],
  
  // Details
  details: {
    title: 'Detalles del Template',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Este template incluye todas las características necesarias para crear landing pages de alta conversión. Diseñado con las mejores prácticas de UX/UI y optimizado para conversión.\n\nCaracterísticas principales:\n- Diseño moderno y profesional\n- Totalmente responsive\n- Optimizado para SEO\n- Fácil de personalizar',
            marks: [],
          },
        ],
        style: 'normal',
        markDefs: [],
      },
    ],
    column2: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'El template está construido con las últimas tecnologías y sigue las mejores prácticas de la industria. Incluye secciones pre-diseñadas que puedes personalizar fácilmente.\n\nPerfecto para:\n- Campañas de marketing\n- Lanzamiento de productos\n- Generación de leads\n- Promociones especiales',
            marks: [],
          },
        ],
        style: 'normal',
        markDefs: [],
      },
    ],
  },
  
  // Included Items
  includedItems: [
    {
      _key: 'item1',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Conversion-driven design optimizado para maximizar conversiones',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
    {
      _key: 'item2',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Drag & drop editing, no coding required - edita sin conocimientos técnicos',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
    {
      _key: 'item3',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Mobile responsive para todos los dispositivos - se ve perfecto en cualquier pantalla',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
    {
      _key: 'item4',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Forms para generación de leads integrados y listos para usar',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
    {
      _key: 'item5',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Embedded scroll para navegación fluida y mejor experiencia de usuario',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
    {
      _key: 'item6',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Soporte de clase mundial - nuestro equipo está aquí para ayudarte',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
    {
      _key: 'item7',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Contenido optimizado para SEO - mejora tu ranking en buscadores',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
    {
      _key: 'item8',
      _type: 'includedItem',
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Personalización completa - hazlo tuyo con nuestro editor visual',
              marks: [],
            },
          ],
          style: 'normal',
          markDefs: [],
        },
      ],
    },
  ],
  
  // Reviews
  reviews: {
    title: 'Lo que dicen nuestros clientes',
    text: 'Miles de empresas confían en nuestros templates para crear landing pages de alta conversión. Mira lo que dicen nuestros clientes.',
    testimonials: [],
  },
  
  // SEO
  seo: {
    title: 'Ejemplo Template de Prueba | Leadpages',
    description: 'Template de ejemplo para demostrar las funcionalidades de la nueva página de templates. Diseño moderno, responsive y optimizado para conversión.',
  },
  
  // Campos read-only (valores por defecto para pruebas)
  enabled: true,
  thumbnailAspect: 1.5,
  releaseDate: new Date().toISOString(),
  originalCreatedAt: new Date().toISOString(),
}

// Función principal
async function createExampleTemplate() {
  try {
    console.log('🚀 Creando template de ejemplo en Sanity...')
    console.log(`📦 Dataset: ${client.config().dataset}`)
    console.log(`🆔 Template ID: ${templateData._id}`)
    console.log(`🔗 Slug: ${templateData.slug.current}`)
    
    // Crear el documento
    const result = await client.createOrReplace(templateData)
    
    console.log('✅ Template creado exitosamente!')
    console.log(`📄 Document ID: ${result._id}`)
    console.log(`🔗 Slug: ${templateData.slug.current}`)
    console.log('\n📝 Próximos pasos:')
    console.log('1. Ejecuta: yarn build (o yarn dev)')
    console.log(`2. Visita: http://localhost:3000/templates/landing-page-template-new/${templateData.slug.current}`)
    console.log(`\n✨ URL completa: http://localhost:3000/templates/landing-page-template-new/${templateData.slug.current}`)
    
    return result
  } catch (error) {
    console.error('❌ Error al crear el template:', error.message)
    if (error.response) {
      console.error('📋 Detalles:', JSON.stringify(error.response.body, null, 2))
    }
    throw error
  }
}

// Ejecutar el script
if (require.main === module) {
  createExampleTemplate()
    .then(() => {
      console.log('\n🎉 ¡Completado!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('\n💥 Error:', error)
      process.exit(1)
    })
}

module.exports = { createExampleTemplate, templateData }

