import React, {useEffect, useState} from 'react'
import ReactPolling from 'react-polling'
import {Badge, Box, Button, Text, Tooltip} from '@sanity/ui'
import styles from '../../../styles/deploy-button.module.scss'

/* eslint-disable no-console */

interface DeployButtonProps {
  vercelDeployUrl?: string
  vercelProject?: string
  vercelTeamId?: string
  vercelToken?: string
}

const titleCase = (str: string) =>
  str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const DeployButton = ({
  vercelDeployUrl,
  vercelProject,
  vercelToken,
  vercelTeamId,
}: DeployButtonProps) => {
  const hasConfig = !!(vercelToken && vercelProject && vercelDeployUrl)
  const [isUpdating, setUpdating] = useState(hasConfig)
  const [isDeploying, setDeploying] = useState(false)
  const [status, setStatus] = useState('')
  const [initialDeployment, setInitialDeployment] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [project, setProject] = useState(false)

  const statuses = {
    inactive: 'INACTIVE',
    loading: 'LOADING',
    initiated: 'INITIATED',
    ready: 'READY',
    canceled: 'CANCELED',
    error: 'ERROR',
  } as const

  const doneStatuses = [statuses.ready, statuses.canceled, statuses.error]

  const fetchProject = async () => {
    const response = await fetch(
      `https://api.vercel.com/v1/projects/${vercelProject}${
        vercelTeamId ? `?teamId=${vercelTeamId}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${vercelToken}`,
        },
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error (fetchProject)! status: ${response.status}`)
    }
    return response.json()
  }

  useEffect(() => {
    if (!hasConfig) {
      return
    }

    fetchProject()
      .then((res) => {
        if (res.id) {
          setProject(res.id)
        }
      })
      .catch((err) => {
        console.log(err)
        const errorMessage = err.response?.data?.error?.message

        setStatus(statuses.error)

        if (errorMessage) {
          setErrorMsg(errorMessage)
        }

        setUpdating(false)
      })
  }, [hasConfig, vercelProject, vercelTeamId, vercelToken])

  const fetchLatestDeployment = async () => {
    const response = await fetch(
      `https://api.vercel.com/v5/now/deployments?projectId=${project}&limit=1${
        vercelTeamId ? `&teamId=${vercelTeamId}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${vercelToken}`,
        },
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error (fetchLatestDeployment)! status: ${response.status}`)
    }
    return response.json()
  }

  useEffect(() => {
    if (!project) {
      return
    }

    fetchLatestDeployment().then((res) => {
      const deployment = res.deployments[0]

      setUpdating(false)
      setStatus(deployment.state === statuses.canceled ? statuses.ready : deployment.state)

      if (!doneStatuses.includes(deployment.state)) {
        setDeploying(true)
      } else {
        setInitialDeployment(deployment.uid)
      }
    })
  }, [project, vercelToken, vercelTeamId])

  const onDeploy = () => {
    setDeploying(true)
    setStatus(statuses.initiated)

    if (!vercelDeployUrl) {
      console.error('Error: No vercel deploy url found.')
      return undefined
    }

    fetch(vercelDeployUrl, {
      method: 'POST',
    }).catch((err) => {
      setDeploying(false)
      console.log(err)
    })
  }

  const onConfigure = () => {
    window.location.href = '/studio/vercel-deploy'
  }

  interface Deployment {
    uid: string
    state: 'READY' | 'CANCELED' | 'ERROR'
  }

  interface Response {
    deployments: Deployment[]
  }

  const onSuccess = async (response: Response | undefined) => {
    if (!response?.deployments || !Array.isArray(response.deployments)) {
      console.error('Invalid response or deployments data')
      return false
    }
    const [deployment] = response.deployments

    if (!deployment) {
      console.error('No deployments found')
      return false
    }

    if (deployment.uid === initialDeployment) {
      return true
    }

    setStatus(deployment.state)

    if (deployment.uid !== initialDeployment && doneStatuses.includes(deployment.state)) {
      setDeploying(false)
      setInitialDeployment(deployment.uid)
      return false
    }

    return true
  }

  return (
    <div className={styles.hookNavExtra}>
      <div className={styles.hookActionsNavExtra}>
        {hasConfig ? (
          <div className={styles.hookStatus}>
            {isDeploying ? (
              <ReactPolling
                interval={3000}
                method="GET"
                onFailure={(err: Error) => console.log(err)}
                onSuccess={onSuccess}
                promise={fetchLatestDeployment}
                render={({isPolling}: {isPolling: boolean}) => {
                  if (isPolling) {
                    return (
                      <div>
                        {status ? (
                          <span className={styles.hookStatusIndicator} data-indicator={status}>
                            {titleCase(status)}
                          </span>
                        ) : (
                          <span
                            className={styles.hookStatusIndicator}
                            data-indicator={statuses.loading}
                          >
                            Loading
                          </span>
                        )}
                      </div>
                    )
                  }
                  return (
                    <div className={styles.hookStatusIndicator} data-indicator={statuses.inactive}>
                      Status Inactive
                    </div>
                  )
                }}
                retryCount={5}
                url="custom"
              />
            ) : (
              <>
                {status ? (
                  <span className={styles.hookStatusIndicator} data-indicator={status}>
                    {errorMsg ? (
                      <>
                        {titleCase(status)}
                        <Tooltip
                          content={
                            <Box padding={2}>
                              <Text muted size={1}>
                                <span
                                  style={{
                                    display: 'inline-block',
                                    textAlign: 'center',
                                  }}
                                >
                                  {errorMsg}
                                </span>
                              </Text>
                            </Box>
                          }
                          placement="bottom"
                        >
                          <span className={styles.hookStatusError}>
                            <Badge mode="outline" tone="critical">
                              ?
                            </Badge>
                          </span>
                        </Tooltip>
                      </>
                    ) : (
                      <>{titleCase(status)}</>
                    )}
                  </span>
                ) : (
                  <span className={styles.hookStatusIndicator} data-indicator={statuses.loading}>
                    Loading
                  </span>
                )}
              </>
            )}
          </div>
        ) : (
          <div className={styles.hookStatus}>
            <div>
              <span className={styles.hookStatusIndicator} data-indicator={statuses.inactive}>
                Inactive
              </span>
            </div>
          </div>
        )}
        <Button
          disabled={isDeploying || isUpdating}
          loading={isDeploying}
          onClick={!hasConfig ? onConfigure : onDeploy}
          text={!hasConfig ? 'Configure' : 'Deploy'}
          tone="positive"
          type="button"
        />
      </div>
    </div>
  )
}

export default DeployButton
