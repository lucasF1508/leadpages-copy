import { isValidRequest } from '@sanity/webhook'
import getClient from 'client'
import axios from 'axios'

const { SANITY_STUDIO_PREVIEW_SECRET } = process.env

const isValidRevalidateRequest = async (req, secret) =>
  req?.headers?.authorization?.replace('Bearer ', '') === secret ||
  isValidRequest(req, secret)

const setLottieData = async (req, res) => {
  if (!isValidRevalidateRequest(req, SANITY_STUDIO_PREVIEW_SECRET)) {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid signature' })
  }

  // eslint-disable-next-line no-console
  const { _id } = req.body
  const client = getClient({ preview: true })
  const asset = await client.fetch(
    `*[_type == 'sanity.fileAsset' && _id == '${_id}'][0]`
  )

  if (!asset) {
    return res.status(500).json({
      success: false,
      message: `Asset not found. Webhook will retry. Asset: ${asset}`,
    })
  }

  if (!asset?.url) {
    return res.status(200).json({
      success: true,
      message: `Asset did not have a url. Asset: ${asset}`,
    })
  }

  const { data } = await axios.get(asset.url)

  if (!data) {
    return res.status(200).json({
      success: true,
      message: `No data was found from asset url: ${asset}`,
    })
  }

  const {
    w: width,
    h: height,
    fr: frameRate,
    op: frames,
    nm: animationName,
  } = data || {}

  if (
    [width, height, frameRate, frames, animationName].some(
      (metaData) => !metaData
    )
  ) {
    return res.status(200).json({
      success: true,
      message: `Incorrect data in file. Likely this is not a lottie json file. ${data}`,
    })
  }

  try {
    const response = await client
      .patch(_id)
      .set({ width, height, frameRate, frames, animationName })
      .commit()
    return res.status(200).json({
      success: true,
      message: `File updated Lottie meta data. _id: ${_id}`,
      response,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error updating lottie file. _id: ${_id}, error: ${err}`,
    })
  }
}

export default setLottieData
