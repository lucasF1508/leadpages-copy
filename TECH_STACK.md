# Stack Tecnologico - Leadpages Marketing Site

Resumen del stack real del proyecto para referencia rapida en entrevistas.

## Runtime y monorepo

- Node.js: `>=20.0.0`
- Package manager: `yarn@1.19.1`
- Monorepo/orquestacion: Turborepo (`turbo`)
- Estructura: workspaces en `apps/*` y `packages/*`

## Frontend web

- Framework: Next.js (`^14.2.35`)
- UI: React (`18`) + React DOM (`18`)
- Lenguaje: TypeScript (en gran parte del codigo)
- Estilos: Tailwind CSS (`3`), Stitches, utilidades de variantes
- Animaciones/UI dinamica: Framer Motion, Motion, Lottie, Embla Carousel

## CMS y contenido

- CMS: Sanity (`@sanity/client`, `next-sanity`)
- Rich content y utilidades: `@sanity/block-content-to-react`, `@portabletext/block-tools`
- Studio en workspace dedicado: `packages/studio`

## Estado, datos e integraciones

- Estado cliente: Zustand
- Formularios: React Hook Form
- Data fetching: SWR
- HTTP client: Axios
- Integraciones de marketing: HubSpot, Mailchimp, SendGrid
- Seguridad/bot protection: hCaptcha y reCAPTCHA

## Tooling y calidad

- Linting: ESLint (configuracion Next + Airbnb + plugins React/TS)
- Formato: Prettier (+ plugin Tailwind)
- Build y analisis: Next build, bundle analyzer
- Imagenes: Sharp

## Infra y despliegue

- Hosting/deploy: Vercel
- Analytics/performance: `@vercel/analytics`, `@vercel/speed-insights`
- Variables de entorno y linking via Vercel CLI

## Paquetes internos relevantes del monorepo

- `apps/web`: aplicacion principal del sitio
- `packages/studio`: configuracion de Sanity Studio
- `packages/client`: cliente compartido
- `packages/icons`, `packages/indices`, `packages/redirects`, entre otros

## Comandos utiles para demo tecnica

- Instalar dependencias: `yarn install`
- Levantar proyecto: `yarn start`
- Solo web (workspace): `yarn workspace web start`
- Lint: `yarn lint`
- Build web: `yarn build:web`
