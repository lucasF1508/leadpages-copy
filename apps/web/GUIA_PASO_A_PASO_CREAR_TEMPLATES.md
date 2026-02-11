# 📝 Guía Paso a Paso: Crear Templates en Sanity Studio

Esta guía te explica cómo crear tanto **Landing Page Templates** como **Website Templates** desde cero en Sanity Studio.

---

## 🚀 Paso 1: Abrir Sanity Studio

1. Abre tu navegador y ve a: `http://localhost:3333/studio`
2. Si no está corriendo, ejecuta en una terminal:
   ```bash
   yarn workspace studio dev
   ```

---

## 📄 Paso 2: Crear un Landing Page Template

### 2.1 Navegar a Templates

1. En el menú lateral izquierdo, haz clic en **"Templates"**
2. Luego haz clic en **"Leadpage Templates"**
3. Verás la lista de templates existentes

### 2.2 Crear Nuevo Template

1. Haz clic en el botón **"Create"** o **"+"** en la parte superior
2. Selecciona **"Template"** del menú desplegable
3. Se abrirá el formulario de creación

### 2.3 Llenar Campos - Grupo "Content"

**Template Name** (Título):
- ⚠️ Este campo puede ser readOnly si hay datos de Mandrel
- Si puedes editarlo, escribe: `"Mi Landing Page Template"`

**Heading**:
- Título principal del hero
- Ejemplo: `"Transform Your Business with Our Premium Landing Page"`

**Hero Content**:
- **Label** (opcional): `"Best Seller"` o `"New"`
- **Description**: Descripción del template usando el editor de texto enriquecido
  - Ejemplo: `"Este landing page template está diseñado para convertir visitantes en clientes. Incluye formularios optimizados, diseño moderno y responsive."`

**ID**:
- ⚠️ Campo readOnly normalmente
- Si quieres que el preview funcione, necesitarías un ID real de Leadpages API
- Para templates nuevos sin preview, déjalo vacío

### 2.4 Llenar Campos - Grupo "Details"

**Details Title**:
- Título de la sección de detalles
- Ejemplo: `"Landing Page Details"`

**Column 1** (Content):
- Descripción principal del template
- Usa el editor de texto enriquecido
- Ejemplo: `"Este template incluye diseño moderno, formularios optimizados y está completamente responsive."`

**Column 2**:
- Información adicional (opcional)
- Ejemplo: `"Fácil de personalizar con nuestro editor drag & drop."`

### 2.5 Llenar Campos - Grupo "What's Included"

**Included Items** (Array):
- Haz clic en **"Add item"** para agregar cada feature
- Cada item tiene:
  - **Content**: Texto descriptivo (ej: `"Conversion-driven design"`)
  - **Image**: Imagen opcional del feature

**Ejemplo de items para Landing Page:**
1. "Conversion-driven design"
2. "Drag & drop editing, no coding required"
3. "Mobile responsive for every device"
4. "Forms for lead generation"
5. "Embedded scroll"
6. "SEO-optimized content"
7. "Complete customization"

### 2.6 Llenar Campos - Grupo "Reviews" (Opcional)

**Reviews Title**:
- Ejemplo: `"See what our customers are saying"`

**Reviews Text**:
- Texto descriptivo de las reseñas

**Testimonials**:
- Haz clic en **"Add item"** y selecciona testimonios existentes en Sanity

### 2.7 Llenar Campos - Grupo "SEO"

**SEO Title**:
- Ejemplo: `"Mi Landing Page Template | Leadpages"`

**SEO Description**:
- Ejemplo: `"Crea landing pages de alta conversión con nuestro template personalizado. Diseño moderno, responsive y fácil de usar."`

**SEO Image**:
- Imagen para compartir en redes sociales (opcional)

### 2.8 Campos Meta (ReadOnly - Normalmente)

Estos campos son normalmente **readOnly**:
- **Slug**: Se genera automáticamente desde el título
- **Kind**: `LeadpageTemplate` (se establece automáticamente)
- **Tags**: Tags del template (readOnly)
- **Categories**: Categorías del template (readOnly)
- **Thumbnail URLs**: URLs de las imágenes (readOnly)

### 2.9 Publicar

1. Haz clic en **"Publish"** en la esquina superior derecha
2. El template se guardará y estará disponible

### 2.10 Ver el Template

Una vez publicado, puedes verlo en:
```
http://localhost:3000/templates/landing-page-template-new/[slug-generado]
```

---

## 🌐 Paso 3: Crear un Website Template

### 3.1 Navegar a Templates

1. En el menú lateral izquierdo, haz clic en **"Templates"**
2. Luego haz clic en **"Website Templates"**
3. Verás la lista de website templates existentes

### 3.2 Crear Nuevo Template

1. Haz clic en el botón **"Create"** o **"+"** en la parte superior
2. Selecciona **"Template"** del menú desplegable
3. Se abrirá el formulario de creación

### 3.3 Llenar Campos - Grupo "Content"

**Template Name**:
- Ejemplo: `"Mi Website Template"`

**Heading**:
- Ejemplo: `"Build Your Professional Website Today"`

**Hero Content**:
- **Label**: `"Popular"` o `"New"`
- **Description**: `"Este website template incluye múltiples páginas, diseño profesional y todas las secciones que necesitas para tu negocio."`

### 3.4 Llenar Campos - Grupo "Details"

**Details Title**:
- Ejemplo: `"Website Details"`

**Column 1**:
- Ejemplo: `"Este website template incluye página de inicio, sobre nosotros, servicios, contacto y más."`

**Column 2**:
- Ejemplo: `"Completamente personalizable y optimizado para SEO."`

### 3.5 Llenar Campos - Grupo "What's Included"

**Included Items** para Website:
1. "Multiple page templates included"
2. "Professional design"
3. "Mobile responsive"
4. "Contact forms"
5. "Blog section"
6. "SEO-optimized"
7. "Easy customization"

**Page Templates Included** (Array):
- Lista de páginas incluidas en el website template
- Haz clic en **"Add item"** y escribe nombres de páginas:
  - "Home"
  - "About"
  - "Services"
  - "Contact"
  - "Blog"

### 3.6 Llenar Campos - Grupo "Reviews" (Opcional)

Igual que para Landing Page Template

### 3.7 Llenar Campos - Grupo "SEO"

**SEO Title**:
- Ejemplo: `"Mi Website Template | Leadpages"`

**SEO Description**:
- Ejemplo: `"Crea un website profesional con nuestro template. Múltiples páginas incluidas, diseño moderno y fácil de personalizar."`

### 3.8 Campos Meta (ReadOnly)

- **Kind**: `SiteTemplate` (se establece automáticamente)
- Los demás campos son iguales que para Landing Page

### 3.9 Publicar

1. Haz clic en **"Publish"**
2. El website template se guardará

### 3.10 Ver el Website Template

Una vez publicado, puedes verlo en:
```
http://localhost:3000/templates/landing-page-template-new/[slug-generado]
```

(La misma ruta funciona para ambos tipos, detecta automáticamente el tipo)

---

## 📋 Resumen de Diferencias

### Landing Page Template vs Website Template

| Campo | Landing Page | Website |
|-------|-------------|---------|
| **Kind** | `LeadpageTemplate` | `SiteTemplate` |
| **Ubicación en Sanity** | Templates → Leadpage Templates | Templates → Website Templates |
| **Included Items** | Features de landing page | Features de website |
| **Page Templates Included** | ❌ No aplica | ✅ Lista de páginas incluidas |
| **Uso típico** | Páginas de aterrizaje | Websites completos |

---

## ⚠️ Notas Importantes

1. **Preview no funcionará** sin un ID real de Leadpages API
   - Verás el mensaje "Template preview no disponible"
   - Esto es normal para templates creados desde cero

2. **Slug y Kind** son normalmente readOnly
   - Se generan automáticamente
   - El slug viene del título
   - El kind depende de dónde lo crees (Leadpage Templates vs Website Templates)

3. **Tags y Categories** son readOnly normalmente
   - Vienen de Mandrel o se sincronizan desde otros sistemas

4. **Para que el preview funcione**:
   - Necesitas un ID real de Leadpages API
   - O usar un template existente que ya tenga ID

---

## 🔗 URLs Útiles

- **Sanity Studio**: `http://localhost:3333/studio`
- **Leadpage Templates**: `http://localhost:3333/studio/production_v3/template?kind=LeadpageTemplate`
- **Website Templates**: `http://localhost:3333/studio/production_v3/template?kind=SiteTemplate`
- **Página del Template**: `http://localhost:3000/templates/landing-page-template-new/[slug]`

---

## 💡 Tips

1. **Usa títulos descriptivos**: Ayudan a generar slugs claros
2. **Llena todos los campos**: Mejor experiencia para los usuarios
3. **Agrega imágenes**: Hacen los templates más atractivos
4. **Incluye testimonios**: Aumentan la confianza
5. **Optimiza SEO**: Mejora la visibilidad en buscadores

---

## 🎯 Ejemplo Completo: Landing Page Template

### Template Name:
```
E-commerce Landing Page
```

### Heading:
```
Boost Your Sales with Our E-commerce Template
```

### Hero Content:
- **Label**: `"Best Seller"`
- **Description**: `"Este template está diseñado específicamente para tiendas online. Incluye carrito de compras, galería de productos y checkout optimizado."`

### Details:
- **Title**: `"E-commerce Features"`
- **Column 1**: `"Incluye todas las herramientas que necesitas para vender online: catálogo de productos, carrito de compras, y páginas de checkout optimizadas."`
- **Column 2**: `"Diseño moderno y responsive que funciona perfectamente en todos los dispositivos."`

### Included Items:
1. "Product catalog"
2. "Shopping cart"
3. "Checkout pages"
4. "Payment integration"
5. "Mobile responsive"
6. "SEO-optimized"

### SEO:
- **Title**: `"E-commerce Landing Page Template | Leadpages"`
- **Description**: `"Crea una landing page para tu tienda online con nuestro template optimizado para conversión."`

---

## 🎯 Ejemplo Completo: Website Template

### Template Name:
```
Business Website Template
```

### Heading:
```
Build Your Professional Business Website
```

### Hero Content:
- **Label**: `"Popular"`
- **Description**: `"Template completo para empresas. Incluye todas las páginas esenciales: inicio, servicios, sobre nosotros, contacto y blog."`

### Details:
- **Title**: `"Website Features"`
- **Column 1**: `"Este template incluye múltiples páginas pre-diseñadas listas para usar."`
- **Column 2**: `"Fácil de personalizar con nuestro editor drag & drop."`

### Included Items:
1. "Home page"
2. "About page"
3. "Services page"
4. "Contact page"
5. "Blog section"
6. "Mobile responsive"

### Page Templates Included:
- "Home"
- "About"
- "Services"
- "Contact"
- "Blog"

### SEO:
- **Title**: `"Business Website Template | Leadpages"`
- **Description**: `"Crea un website profesional para tu negocio con nuestro template completo."`

---

¡Listo! Ahora puedes crear tanto Landing Page Templates como Website Templates desde Sanity Studio. 🎉


