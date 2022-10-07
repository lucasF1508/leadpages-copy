export const link = {
  '...': true,
  url: `
    select(
      condition == 'internal' && page->_type == 'pageHome' => "/",
      condition == 'internal' => page->path,
      condition == 'external' => url,
      condition == 'download' => file.asset->url
    )
  `,
  label: `
    select(
      defined(label) => label,
      condition == 'internal' => page->title,
      condition == 'external' => url,
      condition == 'download' => file.asset->originalFilename
    )
  `,
  target: `
    select(
      condition == 'external' => target,
      false
  )`,
}

export default link
