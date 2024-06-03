import getClient from 'client'

const deployUrl = process.env.SANITY_STUDIO_VERCEL_DEPLOY_URL
const client = getClient({ preview: false })

const scheduledPostsCron = async (req, res) => {
  if (!deployUrl)
    return res
      .status(400)
      .json({ message: 'SANITY_STUDIO_VERCEL_DEPLOY_URL not found' })

  const today = new Date().toLocaleDateString('en-CA')
  const posts = await client.fetch(
    `*[_type == $type && publishedDate == $today]{
    _id
  }`,
    {
      type: 'post',
      today,
    }
  )

  const triggerDeploy = async () => {
    try {
      const response = await fetch(deployUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error:', error)
      return res
        .status(500)
        .json({ message: 'Error Deploying During Publish Cron Job' })
    }
  }

  if (posts.length > 0) await triggerDeploy()

  const output = {
    message: 'Publish Cron Job Executed',
    numPosts: posts?.length || 0,
    ids: [...(posts || [])].map(({ _id }) => _id),
  }

  // eslint-disable-next-line no-console
  console.log(output)

  // FYI: Does not output response in Vercel logs, explicitly logging above to preserve output
  return res.status(200).json(output)
}

export default scheduledPostsCron
