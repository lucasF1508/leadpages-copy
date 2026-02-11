# 📄 Guía Completa: Página de Template de Ejemplo

Esta guía explica cómo funciona el sistema de páginas de templates y cómo crear una nueva página.

## 🏗️ Arquitectura del Sistema

### 1. Estructura de Archivos

```
apps/web/src/app/(pages)/templates/
├── landing-page-template/          # Formato viejo
│   └── [slug]/
│       └── page.tsx
├── landing-page-template-new/      # Formato nuevo (con componentes Inspiration)
│   └── [slug]/
│       └── page.tsx
└── [[...segments]]/                # Página de galería/categorías
    └── page.tsx
```

### 2. Flujo de Generación de Páginas

```
Sanity CMS (Template Document)
    ↓
generateStaticParams() → Obtiene todos los templates
    ↓
Page Component → Usa fetchInspirationData() o fetchTemplateData()
    ↓
Layout Component → Renderiza Hero + Components
    ↓
Página HTML generada
```

## 📝 Ejemplo Completo: Página de Template

### Archivo: `apps/web/src/app/(pages)/templates/landing-page-template-new/[slug]/page.tsx`

```typescript
import type { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import type { ResolvingMetadata } from 'next'
import Layout from '@/components/Layout'
import { getStaticPathsParams } from '@/lib/queries'
import { fetchInspirationData } from '@/lib/queries/fetchInspirationData'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { TemplateKind } from '@/types/template-constants'

/**
 * TIPOS DE DOCUMENTOS QUE SE BUSCARÁN EN SANITY
 * En este caso, buscamos documentos de tipo 'template'
 */
const types = ['template']

/**
 * TIPO DE TEMPLATE
 * TemplateKind.Leadpage = Landing Page Templates
 * TemplateKind.Site = Website Templates
 */
const kind = TemplateKind.Leadpage

/**
 * GENERACIÓN ESTÁTICA DE RUTAS
 * 
 * Next.js llama a esta función en build time para generar todas las rutas
 * posibles de templates. Esto permite:
 * - Pre-renderizar todas las páginas
 * - Mejor SEO
 * - Mejor performance
 * 
 * @returns Array de objetos con el slug de cada template
 * Ejemplo: [{ slug: 'mi-template' }, { slug: 'otro-template' }]
 */
export async function generateStaticParams() {
  // Obtiene todos los templates de Sanity que coincidan con el filtro
  const templates = await getStaticPathsParams({
    filter: `kind == "${kind}"`,  // Solo templates de tipo Leadpage
    types,                        // Solo documentos de tipo 'template'
  })

  // Mapea los resultados para extraer solo el slug
  const paths = templates.map(({ params: { slug } }: any) => ({
    slug,
  }))

  return paths
}

/**
 * GENERACIÓN DE METADATOS PARA SEO
 * 
 * Esta función genera los metadatos (title, description, OG tags, etc.)
 * para cada página de template. Se ejecuta en build time.
 * 
 * @param params - Parámetros de la ruta (incluye el slug)
 * @param parent - Metadatos del layout padre
 * @returns Metadatos para la página
 */
export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  // Obtiene el slug de los parámetros
  const { slug: _slug } = await params
  const slug = Array.isArray(_slug) ? _slug : [_slug]

  // Genera metadatos estáticos desde Sanity
  return await generateMetadataStatic({
    parent,
    slug: slug?.join('/'),  // Une el slug si es un array
    types,                   // Tipos de documentos a buscar
  })
}

/**
 * COMPONENTE PRINCIPAL DE LA PÁGINA
 * 
 * Este es el componente que se renderiza cuando un usuario visita:
 * /templates/landing-page-template-new/[slug]
 * 
 * @param params - Parámetros de la ruta (Promise con el slug)
 * @returns JSX del Layout con los datos del template
 */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // Extrae el slug de los parámetros
  const { slug } = await params

  /**
   * FETCH DE DATOS DEL TEMPLATE
   * 
   * fetchInspirationData() hace lo siguiente:
   * 1. Busca el template en Sanity por slug y kind
   * 2. Obtiene los settings por defecto
   * 3. Obtiene las categorías desde Sanity (sin Mandrel)
   * 4. Construye el objeto hero con breadcrumbs, título, CTA, etc.
   * 5. Construye los componentes: preview, description, details, subFooter
   * 
   * Retorna:
   * {
   *   hero: [{ _key, _type, breadcrumbs, heading, deviceIcons, ctaButton }],
   *   components: [
   *     { _key: 'inspirationPreview', _type: 'inspirationPreview', templateId },
   *     { _key: 'inspirationDescription', _type: 'inspirationDescription', content },
   *     { _key: 'inspirationDetails', _type: 'inspirationDetails', heading, items },
   *     { _key: 'subFooter', _type: 'subFooter', ... }
   *   ]
   * }
   */
  const { components, hero }: any = await fetchInspirationData({
    kind,    // TemplateKind.Leadpage
    slug,    // Ejemplo: 'mi-nuevo-template'
  })

  /**
   * RENDERIZA EL LAYOUT
   * 
   * El componente Layout:
   * - Recibe los datos estructurados (hero + components)
   * - Renderiza el Hero usando el componente correspondiente (HeroInspiration)
   * - Renderiza cada componente usando el Rack component
   * - Maneja el contexto de DeviceView (mobile/desktop toggle)
   */
  return <Layout data={{ components, hero }} />
}
```

## 🗄️ Estructura del Documento Template en Sanity

### Campos Principales

```typescript
{
  _type: 'template',
  _id: 'DvN6KsERQPm35BnQxXJPDN',
  
  // CONTENT GROUP
  title: 'Mi Nuevo Template',                    // Nombre del template
  heading: 'Heading del Template',              // Heading personalizado
  content: {
    label: 'Label opcional',
    description: 'Descripción del template...'  // Block content
  },
  id: 'DvN6KsERQPm35BnQxXJPDN',                 // ID para matching con API
  
  // META GROUP
  slug: {
    current: 'mi-nuevo-template'                 // Slug para la URL
  },
  kind: 'Leadpage',                             // Leadpage o SiteTemplate
  categories: [                                  // Categorías del template
    {
      _key: 'cat1',
      label: 'Business',
      value: 'business'
    }
  ],
  tags: [                                        // Tags del template
    {
      _key: 'tag1',
      label: 'Modern',
      value: 'modern'
    }
  ],
  
  // DETAILS GROUP
  details: {
    title: 'Template Details',
    content: '...',                              // Block content columna 1
    column2: '...'                               // Block content columna 2
  },
  
  // INCLUDED GROUP (What's Included)
  includedItems: [                               // Items incluidos en el template
    {
      _key: 'item1',
      content: 'Conversion-driven design',       // Texto o block content
      image: { ... }                             // Imagen opcional
    }
  ],
  
  // REVIEWS GROUP
  reviews: {
    testimonials: [                              // Referencias a testimonials
      { _ref: 'testimonial-id-1' },
      { _ref: 'testimonial-id-2' }
    ]
  },
  
  // IMAGES
  thumbnailUrlWebp: 'https://...',              // Thumbnail
  fullPageScreenshotUrlWebp: 'https://...',     // Screenshot completo
  
  // SEO
  seo: {
    title: 'SEO Title',
    description: 'SEO Description',
    // ...
  }
}
```

## 🔄 Flujo de Datos Completo

### 1. Build Time (Static Generation)

```
1. Next.js ejecuta generateStaticParams()
   ↓
2. Obtiene todos los templates de Sanity
   ↓
3. Para cada template, ejecuta generateMetadata()
   ↓
4. Para cada template, ejecuta Page()
   ↓
5. fetchInspirationData() obtiene datos de Sanity
   ↓
6. Renderiza el Layout con los datos
   ↓
7. Genera archivos HTML estáticos
```

### 2. Runtime (Usuario visita la página)

```
1. Usuario visita /templates/landing-page-template-new/mi-template
   ↓
2. Next.js sirve la página pre-renderizada
   ↓
3. Layout renderiza HeroInspiration con breadcrumbs, título, toggle
   ↓
4. Layout renderiza InspirationPreview con iframe del template
   ↓
5. Layout renderiza InspirationDescription con el contenido
   ↓
6. Layout renderiza InspirationDetails con los items incluidos
   ↓
7. Layout renderiza SubFooter con CTA
```

## 📦 Componentes Utilizados

### HeroInspiration
- **Props**: `breadcrumbs`, `heading`, `deviceIcons`, `ctaButton`
- **Funcionalidad**: 
  - Muestra breadcrumbs
  - Título del template
  - Toggle desktop/mobile
  - Botón "Use for Free"

### InspirationPreview
- **Props**: `templateId`
- **Funcionalidad**:
  - Iframe con preview del template
  - Browser frame con "traffic lights"
  - Responsive según toggle mobile/desktop

### InspirationDescription
- **Props**: `content`
- **Funcionalidad**: Muestra la descripción del template

### InspirationDetails
- **Props**: `heading`, `items`
- **Funcionalidad**: Lista de features/items incluidos con iconos o imágenes

### SubFooter
- **Props**: `heading`, `subheading`, `ctaLabel`, `ctaHref`
- **Funcionalidad**: CTA final de la página

## 🎯 Cómo Crear un Nuevo Template

**IMPORTANTE**: Las páginas se crean automáticamente desde Sanity. No necesitas crear archivos manualmente.

### Paso 1: Crear en Sanity Studio

1. Ve a **Templates** → **Leadpage Templates Gallery** en Sanity Studio
2. Crea un nuevo documento de tipo **Template**
3. Completa los campos editables:
   - **Heading**: Heading personalizado (opcional)
   - **Content**: Label y descripción del hero
   - **Details**: Título y contenido detallado
   - **Included Items**: Lista de features/items incluidos
   - **Reviews**: Título, texto y testimonios
   - **SEO**: Metadatos para SEO

**Nota**: Los campos como `title`, `slug`, `kind`, `categories`, `tags`, etc. son **read-only** y se sincronizan automáticamente desde la API de Leadpages.

### Paso 2: Publicar el Template

1. Haz clic en **"Publish"** en Sanity Studio
2. El template se guarda en Sanity

### Paso 3: La Página se Genera Automáticamente

- Next.js detecta el nuevo template en el próximo build
- `generateStaticParams()` encuentra el template en Sanity
- Genera automáticamente la ruta: `/templates/landing-page-template-new/[slug]`
- Renderiza la página usando `fetchInspirationData()`
- La página está lista para usar

### Paso 4: Verificar

1. Ejecuta `yarn build` para generar las páginas estáticas
2. Visita: `http://localhost:3000/templates/landing-page-template-new/tu-slug`

**Ver guía completa**: `CREAR_TEMPLATE_DESDE_SANITY.md`

## 🔍 Ejemplo de URL Final

Si creas un template con:
- **Title**: "E-commerce Landing Page"
- **Slug**: "ecommerce-landing-page"
- **Kind**: Leadpage

La página estará disponible en:
```
https://www.leadpages.com/templates/landing-page-template-new/ecommerce-landing-page
```

## 🛠️ Personalización

### Cambiar el Formato de la Página

Si quieres usar el formato viejo (con tabs), usa:
```typescript
import { fetchTemplateData } from '@/lib/queries/fetchTemplateData'

const { components, hero } = await fetchTemplateData({
  kind,
  slug,
  settingsId: 'templateSettings',
})
```

### Agregar Nuevos Componentes

1. Crea el componente en `apps/web/src/app/components/`
2. Regístralo en `apps/web/src/app/components/Rack/RackComponentList.ts`
3. Agrégalo al array de `components` en `fetchInspirationData()`

## 📚 Referencias

- **fetchInspirationData**: `apps/web/src/app/lib/queries/fetchInspirationData.ts`
- **fetchTemplateData**: `apps/web/src/app/lib/queries/fetchTemplateData.ts`
- **Layout Component**: `apps/web/src/app/components/Layout/Layout.tsx`
- **HeroInspiration**: `apps/web/src/app/components/Hero/HeroInspiration.tsx`
- **InspirationPreview**: `apps/web/src/app/components/InspirationPreview/InspirationPreview.tsx`

