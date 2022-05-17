import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPolling from 'react-polling'

import { Badge, Box, Button, Text, Tooltip } from '@sanity/ui'

import styles from './deploy-item.css'

const deployItem = ({
  name,
  url,
  id,
  vercelProject,
  vercelToken,
  vercelTeam,
}) => {
  const hasConfig = vercelToken && vercelProject
  const [isUpdating, setUpdating] = useState(hasConfig)
  const [isDeploying, setDeploying] = useState(false)
  const [status, setStatus] = useState(false)
  const [initialDeployment, setInitialDeployment] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [project, setProject] = useState(false)
  const statuses = {
    inactive: 'INACTIVE',
    loading: 'LOADING',
    initiated: 'INITIATED',
    ready: 'READY',
    canceled: 'CANCELED',
    error: 'ERROR',
  }
  const doneStatuses = [statuses.ready, statuses.canceled, statuses.error]

  useEffect(() => {
    if (!hasConfig) {
      return
    }

    getProject(vercelProject)
      .then((res) => {
        if (res.data.id) {
          setProject(res.data.id)
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
  }, [])

  useEffect(() => {
    if (!project) {
      return
    }

    getLatestDeployment().then((res) => {
      const deployment = res.data.deployments[0]

      setUpdating(false)
      setStatus(
        deployment.state === statuses.canceled
          ? statuses.ready
          : deployment.state
      )

      if (!doneStatuses.includes(deployment.state)) {
        setDeploying(true)
      } else {
        setInitialDeployment(deployment.uid)
      }
    })

    return
  }, [project])

  const getLatestDeployment = async () => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${vercelToken}`,
      },
      url: `https://api.vercel.com/v5/now/deployments?projectId=${project}&limit=1${
        vercelTeam?.id ? `&teamId=${vercelTeam?.id}` : ''
      }`,
    }

    return axios(options)
  }

  const getProject = (id) => {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${vercelToken}`,
      },
      url: `https://api.vercel.com/v1/projects/${id}${
        vercelTeam?.id ? `?teamId=${vercelTeam?.id}` : ''
      }`,
    }

    return axios(options)
  }

  const onDeploy = (name, url) => {
    setDeploying(true)
    setStatus(statuses.initiated)

    global
      .fetch(url, {
        method: 'POST',
      })
      .catch((err) => {
        setDeploying(false)
        console.log(err)
      })
  }

  const onConfigure = (event) => {
    // https://h7a1w5an.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'webhook_deploy'%5D
    window.location.href = '/studio/vercel-deploy'
  }

  const onSuccess = (res) => {
    const [deployment] = res.data.deployments

    if (deployment.uid === initialDeployment) {
      return true
    }

    setStatus(deployment.state)

    if (
      deployment.uid !== initialDeployment &&
      doneStatuses.includes(deployment.state)
    ) {
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
                url="custom"
                method="GET"
                interval={3000}
                retryCount={5}
                onSuccess={onSuccess}
                onFailure={(err) => console.log(err)}
                promise={getLatestDeployment}
                render={({ isPolling }) => {
                  if (isPolling) {
                    return (
                      <div>
                        {status ? (
                          <span
                            className={styles.hookStatusIndicator}
                            data-indicator={status}
                          >
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
                  } else {
                    return (
                      <div
                        className={styles.hookStatusIndicator}
                        data-indicator={statuses.inactive}
                      >
                        Status Inactive
                      </div>
                    )
                  }
                }}
              />
            ) : (
              <>
                {status ? (
                  <span
                    className={styles.hookStatusIndicator}
                    data-indicator={status}
                  >
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
                          placement="top"
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
                  <span
                    className={styles.hookStatusIndicator}
                    data-indicator={statuses.loading}
                  >
                    Loading
                  </span>
                )}
              </>
            )}
          </div>
        ) : (
          <div className={styles.hookStatus}>
            <div>
              <span
                className={styles.hookStatusIndicator}
                data-indicator={statuses.inactive}
              >
                Inactive
              </span>
            </div>
          </div>
        )}
        <Button
          type="button"
          tone="positive"
          disabled={isDeploying || isUpdating}
          loading={isDeploying}
          onClick={!hasConfig ? onConfigure : () => onDeploy(name, url)}
          text={!hasConfig ? 'Configure' : 'Deploy'}
        />{' '}
      </div>
    </div>
  )
}

const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export default deployItem
