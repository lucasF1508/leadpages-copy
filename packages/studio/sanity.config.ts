import type {WorkspaceOptions} from 'sanity'
import adminMessagePlugin from '@gearbox-built/sanity-admin-message'
import autoCompleteAddressPlugin from '@gearbox-built/sanity-autocomplete-address'
import multiReferencesPlugin from '@gearbox-built/sanity-multi-reference'
import {structuredData} from '@gearbox-built/sanity-structured-data'
import structuredDataConfig from './structuredDataConfig'
import vimeoPlugin from '@gearbox-built/sanity-vimeo'
import {table} from '@sanity/table'
import {visionTool} from '@sanity/vision'
import capitalize from 'lodash/capitalize'
import PathInputPlugin from '@gearbox-built/sanity-path-input'
import generatePath from '@/utils/paths/generatePath'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import './styles/styles.css'
import DocumentActions from './actions/DocumentActions'
import {
  defaultDocumentNode as legacyDefaultDocumentNode,
  structure as legacyStructure,
} from './legacy/components/DeskStructure'
import {Layout as LegacyLayout, ToolMenu as LegacyToolMenu} from './legacy/components/Studio'
import legacySchemaTypes from './legacy/schema'
import schemaTypes from './schema'
import {getPreviewPaneUrl} from './utils/getPreviewUrl'
import {tags} from 'sanity-plugin-tags'
import {defaultDocumentNode, structure} from './components/DeskStructure'
import {Logo} from './components/Studio'
import {docCreationControl} from './plugins/doc-creation-control'

const sanityDatasets = [
  import.meta.env.SANITY_STUDIO_API_DATASET,
  import.meta.env.SANITY_STUDIO_API_DATASET_LEGACY,
].filter(Boolean)

const config = defineConfig(
  sanityDatasets.map(
    (dataset): WorkspaceOptions => ({
      title: `${import.meta.env.SANITY_STUDIO_PROJECT_NAME} (${capitalize(dataset)})`,
      name: dataset,
      subtitle: dataset,
      basePath: sanityDatasets.length > 1 ? `/${dataset}` : '',
      projectId: import.meta.env.SANITY_STUDIO_API_PROJECT_ID,
      icon: Logo,
      dataset,
      releases: {
        enabled: false,
      },
      scheduledPublishing: {enabled: false},
      plugins: [
        structureTool({
          name: 'desk',
          title: 'Desk',
          structure: dataset === 'production_v3' ? structure : legacyStructure,
          defaultDocumentNode:
            dataset === 'production_v3' ? defaultDocumentNode : legacyDefaultDocumentNode,
        }),
        visionTool({defaultApiVersion: import.meta.env.SANITY_STUDIO_API_VERSION}),
        table(),
        media(),
        multiReferencesPlugin({apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION}),
        adminMessagePlugin(),
        autoCompleteAddressPlugin({
          apiKey: import.meta.env.SANITY_STUDIO_GOOGLE_API_KEY,
          options: {types: ['address']},
        }),
        vimeoPlugin({
          apiKey: import.meta.env.SANITY_STUDIO_VIMEO_TOKEN,
        }),
        tags({}),
        PathInputPlugin({
          generatePath,
          apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION,
        }),
        structuredData(structuredDataConfig),
        dataset !== 'production_v3' &&
          docCreationControl({
            exclude: [
              'page',
              'experiments',
              'comparison',
              'footer',
              'navigation',
              'integration',
              'pageHome',
              'template',
            ],
          }),
      ].filter(Boolean),
      document: {
        actions: DocumentActions,
        productionUrl: getPreviewPaneUrl,
      },
      schema: {
        types:
          dataset === import.meta.env.SANITY_STUDIO_API_DATASET ? schemaTypes : legacySchemaTypes,
      },
      studio: {
        components: {
          layout: LegacyLayout,
          toolMenu: LegacyToolMenu,
        },
      },
    })
  )
)

export default config
