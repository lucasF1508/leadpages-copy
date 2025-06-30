import path from 'path'
import {defineCliConfig} from 'sanity/cli'
import {nodePolyfills} from 'vite-plugin-node-polyfills'

export default defineCliConfig({
  project: {
    basePath: '/studio',
  },
  api: {
    // projectId: 'zh3laji4', // Sandbox Project ID
    projectId: "1ux2e04i",
    dataset: 'production_v3',
  },
  vite: (prevConfig) => ({
    ...prevConfig,
    envDir: '../../',
    plugins: [...prevConfig.plugins, nodePolyfills({util: true})],
    define: {
      ...prevConfig.define,
      'process.env': {},
    },
    resolve: {
      ...prevConfig.resolve,
      alias: {
        ...prevConfig.resolve?.alias,
        '@': __dirname,
        '@schema': path.resolve(__dirname, './schema'),
      },
    },
  }),
})
