/// <reference types="vite/client" />
/// Provide IntelliSense for Typescript

interface ImportMetaEnv {
  readonly SANITY_STUDIO_API_DATASET: string
  readonly SANITY_STUDIO_API_PROJECT_ID: string
  readonly SANITY_STUDIO_API_VERSION: string
  readonly SANITY_STUDIO_APP_TOKEN: string
  readonly SANITY_STUDIO_GOOGLE_API_KEY: string
  readonly SANITY_STUDIO_PREVIEW_SECRET: string
  readonly SANITY_STUDIO_PROJECT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
