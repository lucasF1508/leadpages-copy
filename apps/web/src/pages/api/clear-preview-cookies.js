const clearPreview = async (req, res) => {
  res.clearPreviewData()
  return res.status(200).json({ message: 'Preview data cleared' })
}

export default clearPreview
