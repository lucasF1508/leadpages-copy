# Component Testing Data

Este archivo contiene datos de ejemplo para los 6 componentes creados:

1. **Testimonial Dark** - Variante oscura del componente de testimonios
2. **Testimonial Light** - Variante clara del componente de testimonios
3. **FAQ Accordion Dark** - Variante oscura del componente de preguntas frecuentes
4. **FAQ Accordion Light** - Variante clara del componente de preguntas frecuentes
5. **Feature Scroll Dark** - Variante oscura del componente de características
6. **Feature Scroll Light** - Variante clara del componente de características

## Cómo usar estos datos

### Opción 1: Agregar manualmente en Sanity

1. Ve a Sanity Studio
2. Busca la página con slug `component-testing`
3. En la sección de componentes, agrega cada uno de los componentes usando los datos de ejemplo
4. Reemplaza las referencias de imágenes (`_ref`) con imágenes reales de tu proyecto

### Opción 2: Importar datos (si tienes acceso a la API)

Los datos están estructurados en formato Sanity y pueden ser importados directamente usando la API de Sanity.

## Estructura de datos

Cada componente incluye:
- `_type`: Tipo del componente (testimonialBlock, faqAccordion, featureScroll)
- `_key`: Identificador único del componente
- `variant`: Variante del tema ('dark' o 'light')
- Datos específicos según el tipo de componente

## Notas importantes

- Las referencias de imágenes (`_ref`) son placeholders y deben ser reemplazadas con IDs reales de imágenes en Sanity
- Los textos pueden ser modificados según tus necesidades
- Asegúrate de que las imágenes referenciadas existan en tu proyecto de Sanity

