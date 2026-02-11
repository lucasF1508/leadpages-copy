/**
 * ============================================================================
 * EJEMPLO COMPLETO: PÁGINA DE TEMPLATE CON COMENTARIOS DETALLADOS
 * ============================================================================
 * 
 * Este archivo es un ejemplo educativo con comentarios extensos que explica
 * cada parte del código. Para usar en producción, ver:
 * apps/web/src/app/(pages)/templates/landing-page-template-new/[slug]/page.tsx
 * 
 * ============================================================================
 */

import type { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import type { ResolvingMetadata } from 'next'
import Layout from '@/components/Layout'
import { getStaticPathsParams } from '@/lib/queries'
import { fetchInspirationData } from '@/lib/queries/fetchInspirationData'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { TemplateKind } from '@/types/template-constants'

// ============================================================================
// CONFIGURACIÓN
// ============================================================================

/**
 * TIPOS DE DOCUMENTOS EN SANITY
 * 
 * Este array define qué tipos de documentos de Sanity se buscarán.
 * En este caso, solo buscamos documentos de tipo 'template'.
 * 
 * Ejemplo de uso:
 * - Si quisieras buscar también 'page', agregarías: ['template', 'page']
 */
const types = ['template']

/**
 * TIPO DE TEMPLATE
 * 
 * TemplateKind.Leadpage = Landing Page Templates
 * TemplateKind.Site = Website Templates
 * 
 * Este valor se usa para filtrar qué templates se mostrarán en esta ruta.
 * Solo los templates con este 'kind' aparecerán en esta página.
 */
const kind = TemplateKind.Leadpage

// ============================================================================
// GENERACIÓN ESTÁTICA DE RUTAS (Static Site Generation)
// ============================================================================

/**
 * generateStaticParams()
 * 
 * FUNCIÓN CRÍTICA PARA STATIC SITE GENERATION (SSG)
 * 
 * ¿Qué hace?
 * - Se ejecuta en BUILD TIME (no en runtime)
 * - Obtiene TODOS los templates de Sanity que coincidan con el filtro
 * - Genera una ruta estática para cada template
 * - Permite pre-renderizar todas las páginas para mejor SEO y performance
 * 
 * ¿Cuándo se ejecuta?
 * - Durante `yarn build` o `next build`
 * - NO se ejecuta cuando un usuario visita la página
 * 
 * ¿Qué retorna?
 * Array de objetos con el slug de cada template:
 * [
 *   { slug: 'template-1' },
 *   { slug: 'template-2' },
 *   { slug: 'template-3' },
 *   ...
 * ]
 * 
 * Ejemplo de flujo:
 * 1. Build time: Next.js ejecuta esta función
 * 2. Obtiene 50 templates de Sanity
 * 3. Genera 50 rutas: /templates/.../template-1, /templates/.../template-2, etc.
 * 4. Pre-renderiza las 50 páginas HTML
 * 5. Usuario visita: Next.js sirve la página pre-renderizada (súper rápido!)
 * 
 * IMPORTANTE:
 * - Si agregas un nuevo template en Sanity, necesitas hacer un nuevo build
 * - O usar ISR (Incremental Static Regeneration) para regenerar automáticamente
 */
export async function generateStaticParams() {
  /**
   * getStaticPathsParams()
   * 
   * Esta función hace una query a Sanity para obtener todos los templates
   * que coincidan con los filtros especificados.
   * 
   * Parámetros:
   * - filter: Query de GROQ para filtrar documentos
   *   - `kind == "Leadpage"` = Solo templates de tipo Leadpage
   * - types: Array de tipos de documentos a buscar
   *   - ['template'] = Solo documentos de tipo 'template'
   * 
   * Retorna:
   * Array de objetos con información de cada template:
   * [
   *   { params: { slug: 'template-1' } },
   *   { params: { slug: 'template-2' } },
   *   ...
   * ]
   */
  const templates = await getStaticPathsParams({
    filter: `kind == "${kind}"`,  // Solo templates de tipo Leadpage
    types,                        // Solo documentos de tipo 'template'
  })

  /**
   * Mapeo de resultados
   * 
   * Extraemos solo el slug de cada template para el formato que Next.js espera.
   * 
   * Input:  [{ params: { slug: 'template-1' } }, { params: { slug: 'template-2' } }]
   * Output: [{ slug: 'template-1' }, { slug: 'template-2' }]
   */
  const paths = templates.map(({ params: { slug } }: any) => ({
    slug,
  }))

  return paths
}

// ============================================================================
// GENERACIÓN DE METADATOS (SEO)
// ============================================================================

/**
 * generateMetadata()
 * 
 * FUNCIÓN PARA SEO Y METADATOS
 * 
 * ¿Qué hace?
 * - Genera los metadatos de la página (title, description, OG tags, etc.)
 * - Se ejecuta en BUILD TIME para cada ruta generada
 * - Obtiene los datos de SEO desde Sanity
 * 
 * ¿Por qué es importante?
 * - Mejora el SEO de la página
 * - Permite compartir en redes sociales con previews bonitos
 * - Mejora la indexación en buscadores
 * 
 * Parámetros:
 * - params: Parámetros de la ruta (incluye el slug del template)
 * - parent: Metadatos del layout padre (para herencia)
 * 
 * Retorna:
 * Objeto con metadatos:
 * {
 *   title: 'Template Name | Leadpages',
 *   description: 'Description del template...',
 *   openGraph: { ... },
 *   twitter: { ... },
 *   ...
 * }
 */
export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  /**
   * Extracción del slug
   * 
   * Los params vienen como Promise en Next.js 15+, así que los await.
   * El slug puede venir como string o array, así que normalizamos.
   */
  const { slug: _slug } = await params
  const slug = Array.isArray(_slug) ? _slug : [_slug]

  /**
   * generateMetadataStatic()
   * 
   * Esta función:
   * 1. Busca el documento en Sanity usando el slug
   * 2. Extrae los metadatos de SEO del documento
   * 3. Combina con los metadatos del parent
   * 4. Retorna el objeto de metadatos completo
   * 
   * Parámetros:
   * - parent: Metadatos del layout padre
   * - slug: Slug del template (ej: 'mi-template')
   * - types: Tipos de documentos a buscar en Sanity
   */
  return await generateMetadataStatic({
    parent,
    slug: slug?.join('/'),  // Une el slug si es un array
    types,                   // Tipos de documentos a buscar
  })
}

// ============================================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA
// ============================================================================

/**
 * Page Component
 * 
 * COMPONENTE PRINCIPAL QUE SE RENDERIZA
 * 
 * ¿Qué hace?
 * - Se ejecuta en BUILD TIME para pre-renderizar
 * - Obtiene los datos del template desde Sanity
 * - Renderiza el Layout con los datos estructurados
 * 
 * ¿Cuándo se ejecuta?
 * - BUILD TIME: Para pre-renderizar todas las páginas
 * - RUNTIME: Si la página no fue pre-renderizada (fallback)
 * 
 * Ruta resultante:
 * /templates/landing-page-template-new/[slug]
 * 
 * Ejemplo:
 * - Slug: 'mi-nuevo-template'
 * - URL: /templates/landing-page-template-new/mi-nuevo-template
 */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  /**
   * Extracción del slug
   * 
   * En Next.js 15+, los params son Promises, así que los await.
   */
  const { slug } = await params

  /**
   * ========================================================================
   * FETCH DE DATOS DEL TEMPLATE
   * ========================================================================
   * 
   * fetchInspirationData() es la función que obtiene y estructura todos
   * los datos necesarios para renderizar la página.
   * 
   * ¿Qué hace internamente?
   * 
   * 1. BUSCA EL TEMPLATE EN SANITY
   *    Query: *[_type == 'template' && kind == 'Leadpage' && slug.current == 'mi-template']
   *    Obtiene: Todo el documento del template
   * 
   * 2. OBTIENE SETTINGS POR DEFECTO
   *    Query: *[_id == 'templateSettings']
   *    Obtiene: Configuración por defecto para templates
   * 
   * 3. OBTIENE CATEGORÍAS DESDE SANITY (SIN MANDREL)
   *    Query: *[_type == 'templateCategory' && templateType == 'landingPage']
   *    Obtiene: Todas las categorías de templates
   * 
   * 4. CONSTRUYE EL OBJETO HERO
   *    {
   *      _key: 'heroInspiration',
   *      _type: 'heroInspiration',
   *      breadcrumbs: {
   *        items: [
   *          { label: 'Templates & Inspirations' },
   *          { label: 'Categories' },
   *          { label: 'Business' }  // Si tiene categoría
   *        ]
   *      },
   *      heading: 'Mi Nuevo Template',
   *      deviceIcons: true,  // Muestra toggle desktop/mobile
   *      ctaButton: {
   *        label: 'Use for Free',
   *        url: 'https://checkout.leadpages.com/...?lp_template_data=...'
   *      }
   *    }
   * 
   * 5. CONSTRUYE LOS COMPONENTES
   *    [
   *      {
   *        _key: 'inspirationPreview',
   *        _type: 'inspirationPreview',
   *        templateId: 'DvN6KsERQPm35BnQxXJPDN'
   *      },
   *      {
   *        _key: 'inspirationDescription',
   *        _type: 'inspirationDescription',
   *        content: 'Descripción del template...'
   *      },
   *      {
   *        _key: 'inspirationDetails',
   *        _type: 'inspirationDetails',
   *        heading: 'Details',
   *        items: [
   *          { _key: '1', label: 'Conversion-driven design', icon: 'check' },
   *          { _key: '2', label: 'Drag & drop editing', icon: 'gear' },
   *          ...
   *        ]
   *      },
   *      {
   *        _key: 'subFooter',
   *        _type: 'subFooter',
   *        heading: "You've seen what's possible. Now build it.",
   *        ...
   *      }
   *    ]
   * 
   * Retorna:
   * {
   *   hero: [...],      // Array con el objeto hero
   *   components: [...]  // Array con todos los componentes
   * }
   */
  const { components, hero }: any = await fetchInspirationData({
    kind,    // TemplateKind.Leadpage
    slug,    // Ejemplo: 'mi-nuevo-template'
  })

  /**
   * ========================================================================
   * RENDERIZADO DEL LAYOUT
   * ========================================================================
   * 
   * El componente Layout es el contenedor principal que:
   * 
   * 1. RECIBE LOS DATOS ESTRUCTURADOS
   *    - hero: Array con el objeto hero
   *    - components: Array con todos los componentes a renderizar
   * 
   * 2. RENDERIZA EL HERO
   *    - Usa el componente HeroInspiration
   *    - Muestra breadcrumbs, título, toggle desktop/mobile, botón CTA
   *    - Crea el contexto DeviceViewContext para compartir estado mobile/desktop
   * 
   * 3. RENDERIZA CADA COMPONENTE
   *    - Usa el componente Rack que mapea cada _type a su componente correspondiente
   *    - InspirationPreview → Componente con iframe del template
   *    - InspirationDescription → Componente con descripción
   *    - InspirationDetails → Componente con lista de features
   *    - SubFooter → Componente de CTA final
   * 
   * 4. MANEJA EL CONTEXTO
   *    - DeviceViewContext permite que el toggle en HeroInspiration
   *      afecte el tamaño del iframe en InspirationPreview
   * 
   * Flujo de renderizado:
   * Layout
   *   ├── DeviceViewContext.Provider
   *   │   ├── Hero (heroInspiration)
   *   │   │   ├── Breadcrumbs
   *   │   │   ├── Título
   *   │   │   ├── Toggle Desktop/Mobile
   *   │   │   └── Botón "Use for Free"
   *   │   │
   *   │   └── Rack (components)
   *   │       ├── InspirationPreview (iframe con preview)
   *   │       ├── InspirationDescription (descripción)
   *   │       ├── InspirationDetails (lista de features)
   *   │       └── SubFooter (CTA final)
   */
  return <Layout data={{ components, hero }} />
}

/**
 * ============================================================================
 * RESUMEN DEL FLUJO COMPLETO
 * ============================================================================
 * 
 * BUILD TIME:
 * 1. generateStaticParams() → Obtiene todos los templates
 * 2. Para cada template:
 *    a. generateMetadata() → Genera metadatos SEO
 *    b. Page() → Renderiza la página
 *    c. fetchInspirationData() → Obtiene datos de Sanity
 *    d. Layout renderiza Hero + Components
 *    e. Genera archivo HTML estático
 * 
 * RUNTIME (Usuario visita):
 * 1. Usuario visita: /templates/landing-page-template-new/mi-template
 * 2. Next.js sirve la página pre-renderizada (súper rápido!)
 * 3. Si hay JavaScript, se hidrata para interactividad
 * 4. Toggle mobile/desktop funciona con React Context
 * 
 * ============================================================================
 */


