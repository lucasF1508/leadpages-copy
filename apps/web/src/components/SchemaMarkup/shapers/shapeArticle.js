const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'

export const shapeArticle = ({articleStructuredData, page}) => {
  const {
    _updatedAt, 
    modified, 
    publishedDate, 
    _createdAt, title, 
    publisher,
    image: featuredImage,
  } = page || {}

  const image = [featuredImage, ...(articleStructuredData?.image || [])].filter(Boolean).map(({asset, _type}) => ({
    _type,
    asset,
  }))

  const {path, title: name} = publisher || {}

  const author = path && name ? 
  {
    url: `${NEXT_PUBLIC_URL}${path}`, 
    name, 
    type: "Person"
  } 
  : {
    id: '@Leadpages',
    type: 'Organization',
  }

  const datePublished = new Date(publishedDate || _createdAt);
  const dateModified = new Date(modified || _updatedAt);
  
  const defaultPostData = {
    type: 'Article',
    headline: title,
    author,
  }

  const mergedData = {
    ...defaultPostData,
    ...(articleStructuredData || {}),
    datePublished: datePublished?.toISOString(),
    dateModified: dateModified?.toISOString(),
    image
  }

  return mergedData
}