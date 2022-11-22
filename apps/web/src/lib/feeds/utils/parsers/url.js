export const url = (urlOrg) => {
  const encodedUrl = encodeURI(urlOrg)
  return !/^https?:\/\//i.test(encodedUrl)
    ? `https://${encodedUrl}`
    : encodedUrl
}
