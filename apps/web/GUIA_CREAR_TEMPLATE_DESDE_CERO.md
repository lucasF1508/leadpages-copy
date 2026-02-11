# 📝 Guía: Crear Template desde Cero en Sanity Studio

Esta guía te explica cómo crear un template completamente nuevo en Sanity Studio sin usar Mandrel.

## ⚠️ Importante sobre el Preview

**El preview del template solo funcionará si tienes un ID válido de la API de Leadpages.** Si creas un template nuevo sin ID real, verás el mensaje "Template preview no disponible". Esto es normal y esperado.

---

## 🚀 Paso a Paso

### Paso 1: Abrir Sanity Studio

1. Abre tu navegador y ve a: `http://localhost:3333/studio`
2. Si no está corriendo, ejecuta: `yarn workspace studio dev`

### Paso 2: Navegar a Templates

1. En el menú lateral izquierdo, haz clic en **"Templates"**
2. Luego haz clic en **"Leadpage Templates"** (o "Website Templates" si es un website template)
3. Verás la lista de templates existentes

### Paso 3: Crear Nuevo Template

1. Haz clic en el botón **"Create"** o **"+"** en la parte superior
2. Selecciona **"Template"** del menú desplegable
3. Se abrirá el formulario de creación

### Paso 4: Llenar los Campos Editables

#### 📋 Grupo: Content (Contenido Principal)

**Template Name** (Título):
- Este campo es **readOnly** normalmente, pero puedes editarlo si no hay datos de Mandrel
- Ejemplo: `"Mi Template Personalizado"`

**Heading**:
- Título principal que aparece en el hero
- Ejemplo: `"Transform Your Business with Our Premium Template"`

**Hero Content**:
- **Label**: Etiqueta pequeña (opcional)
  - Ejemplo: `"Best Seller"` o `"New"`
- **Description**: Descripción del template (texto enriquecido)
  - Ejemplo: `"Este template está diseñado para convertir visitantes en clientes..."`

**ID** (Campo oculto normalmente):
- Este campo es **readOnly** y normalmente viene de Mandrel
- Si quieres que el preview funcione, necesitarías un ID real de Leadpages API
- Para templates nuevos sin preview, puedes dejarlo vacío

#### 📋 Grupo: Details (Detalles)

**Details Title**:
- Título de la sección de detalles
- Ejemplo: `"Template Details"`

**Column 1** (Content):
- Contenido principal de la columna izquierda
- Puedes usar texto enriquecido con formato

**Column 2**:
- Contenido de la columna derecha (opcional)
- Puedes usar texto enriquecido con formato

#### 📋 Grupo: What's Included (Lo que Incluye)

**Included Items** (Array):
- Lista de items que incluye el template
- Haz clic en **"Add item"** para agregar cada item
- Cada item tiene:
  - **Content**: Texto descriptivo del item
  - **Image**: Imagen opcional del item

Ejemplo de items:
- "Conversion-driven design"
- "Drag & drop editing, no coding required"
- "Mobile responsive for every device"
- "Forms for lead generation"
- etc.

#### 📋 Grupo: Reviews (Reseñas)

**Reviews Title**:
- Título de la sección de reseñas
- Ejemplo: `"See what our customers are saying"`

**Reviews Text**:
- Texto descriptivo de las reseñas

**Link**:
- Link opcional (máximo 1)

**Testimonials**:
- Referencias a testimonios existentes en Sanity
- Haz clic en **"Add item"** y selecciona testimonios

#### 📋 Grupo: SEO

**SEO Title**:
- Título para SEO
- Ejemplo: `"Mi Template Personalizado | Leadpages"`

**SEO Description**:
- Descripción para SEO
- Ejemplo: `"Crea landing pages de alta conversión con nuestro template personalizado..."`

**SEO Image**:
- Imagen para compartir en redes sociales

### Paso 5: Campos Meta (ReadOnly - Normalmente)

Los siguientes campos son normalmente **readOnly** porque vienen de Mandrel:
- **Slug**: Se genera automáticamente desde el título
- **Kind**: `LeadpageTemplate` o `SiteTemplate`
- **Tags**: Tags del template (readOnly)
- **Categories**: Categorías del template (readOnly)
- **Thumbnail URLs**: URLs de las imágenes (readOnly)

**Nota**: Si necesitas editar estos campos, podrías necesitar permisos especiales o modificar el schema temporalmente.

### Paso 6: Guardar y Publicar

1. Haz clic en **"Publish"** en la esquina superior derecha
2. El template se guardará y estará disponible

### Paso 7: Ver el Template

Una vez publicado, puedes ver el template en:
```
http://localhost:3000/templates/landing-page-template-new/[slug]
```

Donde `[slug]` es el slug generado automáticamente desde el título.

---

## 🎯 Ejemplo Completo

### Template Name:
```
Mi Template de Prueba
```

### Heading:
```
Transform Your Business Today
```

### Hero Content:
- **Label**: `"New"`
- **Description**: `"Este es un template completamente nuevo creado desde cero en Sanity Studio. Incluye todas las características que necesitas para crear landing pages de alta conversión."`

### Details:
- **Title**: `"Template Details"`
- **Column 1**: `"Este template incluye diseño moderno, responsive y optimizado para conversión."`
- **Column 2**: `"Fácil de personalizar con nuestro editor drag & drop."`

### Included Items:
1. "Conversion-driven design"
2. "Drag & drop editing"
3. "Mobile responsive"
4. "Forms for lead generation"
5. "SEO-optimized"

### SEO:
- **Title**: `"Mi Template de Prueba | Leadpages"`
- **Description**: `"Crea landing pages profesionales con nuestro template personalizado."`

---

## ⚠️ Limitaciones

1. **Preview no funcionará** sin un ID real de Leadpages API
2. **Slug y Kind** son readOnly normalmente
3. **Tags y Categories** son readOnly normalmente
4. **Thumbnail URLs** son readOnly normalmente

## 💡 Soluciones

Si necesitas que el preview funcione:
1. Usa un template existente que ya tenga un ID real
2. O sincroniza el template desde Mandrel primero
3. O agrega manualmente un ID real de Leadpages API en el campo `id`

---

## 📍 Ubicación en Sanity Studio

```
Sanity Studio → Templates → Leadpage Templates Gallery → Create New → Template
```

---

## 🔗 URLs Útiles

- **Sanity Studio**: `http://localhost:3333/studio`
- **Templates List**: `http://localhost:3333/studio/production_v3/template`
- **Página del Template**: `http://localhost:3000/templates/landing-page-template-new/[slug]`

