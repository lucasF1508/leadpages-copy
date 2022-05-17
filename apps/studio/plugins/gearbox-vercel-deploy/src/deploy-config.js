import config from 'config:gearbox-vercel-deploy'
const dataset = process.env.SANITY_STUDIO_API_DATASET
const vercelToken = process.env.SANITY_STUDIO_VERCEL_TOKEN

const { envs, default: configDefault } = config
delete config.envs
delete config.default

export default config.envs && dataset in config.envs
  ? { vercelToken, ...config, ...configDefault, ...envs[dataset] }
  : { vercelToken, ...config, ...configDefault }
