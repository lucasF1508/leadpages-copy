import config from 'config:gearbox-vercel-deploy'

const dataset = process.env.SANITY_STUDIO_API_DATASET
const vercelToken = process.env.SANITY_STUDIO_VERCEL_TOKEN
const url = process.env.SANITY_STUDIO_VERCEL_DEPLOY_URL
const vercelProject = process.env.SANITY_STUDIO_VERCEL_DEPLOY_PROJECT
const vercelTeam = process.env.SANITY_STUDIO_VERCEL_DEPLOY_TEAM_ID

// Clean up
const { envs, default: configDefault } = config
delete config.envs
delete config.default
//

const defaultConfig =
  config.envs && dataset in config.envs
    ? { vercelToken, ...config, ...configDefault, ...envs[dataset] }
    : { vercelToken, ...config, ...configDefault }

const deployConfig = {
  ...defaultConfig,
  ...(url ? { url } : {}),
  ...(vercelProject ? { vercelProject } : {}),
  ...(vercelTeam ? { vercelTeam } : {}),
}

export default deployConfig
