# Interview Showcase - Leadpages Marketing Site

Este documento resume el trabajo realizado para compartirlo en entrevistas tecnicas, con foco en el impacto, decisiones y desafios.

## 1) Contexto del proyecto

- Proyecto: sitio de marketing de Leadpages.
- Arquitectura: monorepo con aplicacion web en Next.js y CMS en Sanity.
- Objetivo del cambio principal: permitir seleccionar desde CMS el post principal ("main hero post") de una seccion del blog, en lugar de depender solo del orden por fecha.

## 2) Alcance implementado

### A. CMS (Sanity Studio)

- Se agrego soporte de configuracion para elegir un post destacado por seccion de blog.
- Se incorporo input personalizado en Studio para mejorar la seleccion editorial.
- Se actualizaron esquemas de contenido para soportar el nuevo campo sin romper contenido existente.

Archivos relacionados:
- `packages/studio/components/BlogSectionMainHeroInput.tsx`
- `packages/studio/schema/documents/templates/post.ts`
- `packages/studio/legacy/schema/documents/templates/schemaPost.jsx`

### B. Frontend (Next.js)

- Se adapto la capa de consultas (GROQ) para traer el post principal configurado desde CMS.
- Se actualizo el render de la seccion del blog para priorizar el post seleccionado.
- Se ajustaron componentes de layout para mantener consistencia visual y comportamiento de fallback.

Archivos relacionados:
- `apps/web/src/app/lib/queries/groq.ts`
- `apps/web/src/app/components/BlogSection/BlogSection.tsx`
- `apps/web/src/app/components/BlogSection/BlogSection.types.ts`
- `apps/web/src/app/components/BlogPostLayout/BlogPostLayout.tsx`

### C. Ajustes complementarios de UI

- Ajustes en componentes auxiliares usados dentro del flujo del blog/home.

Archivos relacionados:
- `apps/web/src/app/components/SocialMedia/SocialMedia.tsx`
- `apps/web/src/app/components/SubFooter/SubFooter.tsx`

## 3) Desafios tecnicos y como se resolvieron

### Desafio 1: Mantener compatibilidad con contenido previo

Problema:
- Habia contenido historico que no tenia el nuevo campo editorial para "main hero post".

Solucion:
- Se implemento un comportamiento de fallback: si no hay post seleccionado, el frontend conserva la logica anterior (post principal por orden normal).

Resultado:
- No hubo necesidad de migracion bloqueante para publicar la mejora.

### Desafio 2: Sincronizar contrato CMS <-> Frontend

Problema:
- Cualquier cambio en schema sin reflejo en consultas/render podia romper el hero del blog.

Solucion:
- Se actualizo en paralelo schema, tipos y query, asegurando consistencia de datos de punta a punta.

Resultado:
- Menor riesgo de datos nulos y mejor estabilidad en produccion.

### Desafio 3: Evitar regresiones visuales

Problema:
- El bloque de hero y sus componentes satelite podian desalinearse al cambiar la fuente del post principal.

Solucion:
- Ajustes puntuales en layout/componentes relacionados y validacion visual en flujo real.

Resultado:
- Se mantuvo la experiencia esperada sin impactar otras paginas.

## 4) Como se valida este trabajo

Checklist funcional:
- En Sanity, seleccionar un post como main hero en una seccion de blog.
- Publicar y verificar que el hero muestra ese post en el frontend.
- Remover la seleccion y verificar fallback correcto.
- Revisar links, imagen destacada y metadata del post en el bloque principal.

Checklist tecnico:
- Ejecutar lint del proyecto.
- Verificar build del workspace web.
- Probar en entorno conectado a variables de Vercel.

## 5) Impacto para negocio/editorial

- Da control editorial directo sobre el contenido prioritario del blog.
- Mejora capacidad de promocionar contenido estrategico sin cambiar fechas.
- Reduce friccion del equipo de contenido para campañas y lanzamientos.

## 6) Notas para entrevista

Si necesitas presentar este trabajo en 2-3 minutos:
- Problema: "El hero del blog no era editorialmente configurable."
- Solucion: "Agregamos seleccion de post principal en Sanity y lo conectamos al render del frontend con fallback."
- Valor: "Mas control de contenido, menos operaciones manuales y sin romper contenido legado."
