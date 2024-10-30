import { fetchTemplatesByType } from '@lib/mandrel/index'

const { NODE_ENV } = process.env

const templates = async (req, res) => {
  if (NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333')
  }
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (!['GET', 'OPTIONS'].includes(req.method)) {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' })
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    const [leadpagesTemplates, siteTemplates] = await Promise.all([
      fetchTemplatesByType('Leadpage'),
      fetchTemplatesByType('Site'),
    ])

    const data = {
      leadpages: leadpagesTemplates,
      sites: siteTemplates,
    }

    return res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching templates:', error)
    return res.status(500).json({ success: false, message: error.message })
  }
}

export default templates
