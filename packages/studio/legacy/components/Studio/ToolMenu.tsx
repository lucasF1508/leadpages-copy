import type {ToolMenuProps} from 'sanity'
import clsx from 'clsx'
import {isDev} from 'sanity'
import styles from '@/styles/styles.module.scss'
import DeployButton from './DeployButton'

const deployConfig = {
  vercelDeployUrl: import.meta.env.SANITY_STUDIO_VERCEL_DEPLOY_URL,
  vercelProject: import.meta.env.SANITY_STUDIO_VERCEL_DEPLOY_PROJECT,
  vercelTeamId: import.meta.env.SANITY_STUDIO_VERCEL_DEPLOY_TEAM_ID,
  vercelToken: import.meta.env.SANITY_STUDIO_VERCEL_DEPLOY_TOKEN,
}

const ToolMenu = (props: ToolMenuProps) => {
  const {tools, renderDefault} = props
  const devTools = ['vision']
  const availableTools = isDev ? tools : tools.filter((tool) => devTools.includes(tool.name))

  return (
    <div className={clsx(styles.toolbar, 'toolbar')}>
      <div className={clsx(styles.tools, 'tools')}>{renderDefault({...props, tools: availableTools})}</div>
      <DeployButton {...deployConfig} />
    </div>
  )
}

export default ToolMenu
