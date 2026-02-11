# 🔍 Explicación: Cómo Funciona un Template

## ⚠️ Concepto Importante

**En Sanity NO se guarda la página web del template. Solo se guardan METADATOS (información sobre el template).**

La página web real viene de la **API de Leadpages** usando el ID del template.

---

## 📊 Flujo Completo

```
┌─────────────────────────────────────────────────────────┐
│                    SANITY STUDIO                        │
│  (Aquí solo guardas INFORMACIÓN sobre el template)      │
└─────────────────────────────────────────────────────────┘
                          │
                          │ Guardas:
                          │ - Título
                          │ - Descripción
                          │ - Detalles
                          │ - Features incluidos
                          │ - ID del template (si existe)
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              PÁGINA WEB DEL SITIO                        │
│  (Muestra información + Preview del template)            │
└─────────────────────────────────────────────────────────┘
                          │
                          │ Usa el ID para cargar:
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│         API DE LEADPAGES (Mandrel)                      │
│  https://api.leadpages.io/template/v2/templates/       │
│                    [ID]/preview.html                     │
│                                                          │
│  ← Aquí está la PÁGINA WEB REAL del template            │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Qué Campos Llenar en Sanity

### En Sanity Studio llenas:

#### 1. **Content** (Información básica)
- **Template Name**: Nombre del template (ej: "E-commerce Landing Page")
- **Heading**: Título principal (ej: "Boost Your Sales")
- **Hero Content → Description**: Descripción del template
- **ID**: ⚠️ **Este es el campo clave** - Si tienes un ID real de Leadpages API, aquí va

#### 2. **Details** (Detalles adicionales)
- Información sobre qué incluye el template
- Columnas de texto con características

#### 3. **What's Included** (Features)
- Lista de características del template
- Ej: "Mobile responsive", "Forms", etc.

#### 4. **Meta** (Metadatos)
- **Slug**: URL del template (se genera del título)
- **Kind**: Tipo (LeadpageTemplate o SiteTemplate)
- **ID**: ⚠️ **AQUÍ va el ID de Leadpages API**

#### 5. **SEO**
- Título y descripción para buscadores

---

## 🌐 Cómo se Muestra la Página Web Real

### En la página del sitio web:

```tsx
// apps/web/src/app/components/InspirationPreview/InspirationPreview.tsx

<iframe
  src={`https://api.leadpages.io/template/v2/templates/${templateId}/preview.html`}
/>
```

**El iframe carga la página web REAL desde la API de Leadpages usando el ID.**

---

## ❓ Preguntas Frecuentes

### ¿Dónde está la página web del template?

**NO está en Sanity.** Está en la API de Leadpages:
- URL: `https://api.leadpages.io/template/v2/templates/[ID]/preview.html`
- Se carga en un iframe en la página del sitio

### ¿Qué guardo en Sanity entonces?

Solo **información sobre el template**:
- Título, descripción, detalles
- Features incluidos
- Imágenes (thumbnails)
- Tags y categorías
- **ID del template** (para cargar el preview)

### ¿Cómo obtengo el ID del template?

El ID viene de:
1. **Mandrel/Leadpages API**: Si el template ya existe en Leadpages
2. **Creación manual**: Si creas un template nuevo, necesitarías crear primero el template en Leadpages y luego usar su ID

### ¿Puedo crear un template completamente nuevo sin ID?

**Sí**, pero:
- ✅ Puedes guardar toda la información en Sanity
- ✅ La página de información se mostrará correctamente
- ❌ El preview NO funcionará (mostrará "Template preview no disponible")
- ❌ El botón "Use for Free" redirigirá al builder pero sin template pre-cargado

---

## 📝 Ejemplo Práctico

### Template Existente (con ID real):

```
Sanity:
  - Template Name: "Thanks for Signing Up"
  - ID: "pPRzWeL2HZem5weUF3ixdL" ← ID real de Leadpages
  
Página Web:
  - Muestra información de Sanity
  - Carga preview desde: 
    https://api.leadpages.io/template/v2/templates/pPRzWeL2HZem5weUF3ixdL/preview.html
  - ✅ Preview funciona
```

### Template Nuevo (sin ID):

```
Sanity:
  - Template Name: "Mi Template Nuevo"
  - ID: (vacío o "ejemplo-123")
  
Página Web:
  - Muestra información de Sanity
  - Intenta cargar preview pero falla
  - Muestra: "Template preview no disponible"
  - ⚠️ Preview NO funciona
```

---

## 🎯 Resumen

1. **Sanity** = Base de datos de información sobre templates
2. **Leadpages API** = Donde está la página web real del template
3. **ID del template** = El puente entre ambos
4. **Sin ID real** = No hay preview, solo información

---

## 💡 Para Crear un Template Completamente Nuevo

1. Crea el template en **Leadpages Builder** primero
2. Obtén el **ID del template** creado
3. Ve a **Sanity Studio**
4. Crea el documento template
5. Pega el **ID** en el campo "ID"
6. Llena el resto de la información
7. Publica

Ahora el preview funcionará porque tiene un ID real de Leadpages.


