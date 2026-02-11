# Feature Index - 3 Opciones Sin Elementos Colapsables

Este directorio contiene 3 opciones diferentes para mostrar el Feature Index sin elementos colapsables. Todas las opciones muestran **todo el contenido visible** desde el inicio.

## 📋 Opciones Disponibles

### **Opción 1: Grid de Tarjetas Expandidas**
- **Archivo:** `../FeatureIndexOption1/FeatureIndexOption1.tsx`
- **Características:**
  - Layout de grid responsivo (1 columna móvil, 2 columnas desktop)
  - Cada categoría es una tarjeta grande con todo el contenido visible
  - Navegación horizontal sticky arriba para scroll suave
  - Ideal para contenido extenso que necesita estar siempre accesible

### **Opción 2: Tabs Horizontales**
- **Archivo:** `../FeatureIndexOption2/FeatureIndexOption2.tsx`
- **Características:**
  - Pestañas horizontales en la parte superior
  - Contenido de la pestaña activa completamente visible
  - Cambio de pestaña sin elementos colapsables
  - Ideal para organizar categorías de forma clara sin saturar la vista

### **Opción 3: Layout Vertical Expandido con Sidebar Fijo**
- **Archivo:** `../FeatureIndexOption3/FeatureIndexOption3.tsx`
- **Características:**
  - Sidebar de navegación fijo a la izquierda (desktop)
  - Todo el contenido expandido verticalmente en una columna continua
  - Scroll suave automático al hacer clic en el sidebar
  - En mobile: menú sticky superior desplegable
  - Ideal para lectura continua tipo documento o guía

## 🚀 Cómo Ver el Ejemplo

### Opción A: Usar el Componente de Demo
Importa el componente de demo en cualquier página para ver las 3 opciones funcionando:

```tsx
import FeatureIndexDemo from '@/app/components/FeatureIndexDemo/FeatureIndexDemo'

export default function TestPage() {
  return <FeatureIndexDemo />
}
```

### Opción B: Usar una Opción Directamente
Cada opción se puede usar directamente:

```tsx
import FeatureIndexOption1 from '@/app/components/FeatureIndexOption1/FeatureIndexOption1'

export default function FeaturePage({ data }) {
  return (
    <FeatureIndexOption1
      heading="Feature Index"
      categories={data.categories}
      navigationLinks={data.navigationLinks}
    />
  )
}
```

## 📝 Estructura de Datos

Todas las opciones esperan la misma estructura de datos:

```typescript
interface FeatureSubsection {
  _key: string
  title: string
  content: PortableTextBlock[] // Sanity Portable Text
}

interface FeatureCategory {
  _key: string
  title: string
  description: string
  icon?: {
    altText?: string
    asset: { _ref: string; _type: string }
  }
  subsections: FeatureSubsection[]
}

interface FeatureIndexProps {
  heading?: string
  categories: FeatureCategory[]
  navigationLinks?: Array<{ title: string; href: string }> // Solo para Opción 1
}
```

## 🎨 Personalización

Todos los componentes usan:
- Colores de marca: `purple-700`, `purple-50`, etc.
- Fondo de tarjetas: `#F9F7FD`
- Tipografía: clases `type-h1`, `type-h2`, `type-h3`, `type-body-base`, etc.

Puedes personalizar los estilos modificando las clases de Tailwind CSS en cada componente.





