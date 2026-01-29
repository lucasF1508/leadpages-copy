# Script: Crear Página Component Testing

Este script crea o actualiza la página `component-testing` en Sanity con los 6 componentes de ejemplo (variantes dark y light).

## Componentes que se crean

1. **Testimonial Dark** - Variante oscura del componente de testimonios
2. **Testimonial Light** - Variante clara del componente de testimonios
3. **FAQ Accordion Dark** - Variante oscura del componente de preguntas frecuentes
4. **FAQ Accordion Light** - Variante clara del componente de preguntas frecuentes
5. **Feature Scroll Dark** - Variante oscura del componente de características
6. **Feature Scroll Light** - Variante clara del componente de características

## Requisitos

- Variables de entorno configuradas:
  - `SANITY_STUDIO_API_PROJECT_ID`
  - `SANITY_STUDIO_API_DATASET`
  - `SANITY_STUDIO_API_VERSION`
  - `STUDIO_APP_TOKEN_DANGEROUS` (token con permisos de escritura)

## Uso

### Desde el directorio raíz del proyecto:

```bash
cd packages/migration
npm run create-component-testing
```

### O directamente con tsx:

```bash
tsx -r tsconfig-paths/register packages/migration/src/tools/create-component-testing-page.ts
```

## Qué hace el script

1. Busca si existe una página con slug `component-testing` o path `/component-testing`
2. Si existe:
   - Actualiza los componentes de la página existente
3. Si no existe:
   - Crea una nueva página con todos los componentes
4. Muestra un resumen de los componentes agregados

## Notas importantes

- Las imágenes en los componentes están vacías (`{}`) - deberás agregarlas manualmente en Sanity
- El script sobrescribe los componentes existentes en la página
- Asegúrate de tener permisos de escritura en Sanity antes de ejecutar el script

## Verificar resultado

Después de ejecutar el script, visita:
- Sanity Studio: Busca la página "Component Testing"
- Frontend: `/component-testing`

