import startCase from 'lodash/startCase'
import { BsLink as icon } from 'react-icons/bs'

export const link = ({
  prefix = '',
  select = {},
  prepare = () => ({}),
} = {}) => ({
  select: {
    condition: `${prefix}condition`,
    label: `${prefix}label`,
    pageTitle: `${prefix}page.title`,
    downloadFile: `${prefix}file.asset.originalFilename`,
    externalUrl: `${prefix}url`,
    ...select,
  },
  prepare: ({
    condition,
    label,
    pageTitle,
    externalUrl,
    downloadFile,
    ...rest
  }) => {
    let title

    switch (condition) {
      case 'internal':
        title = pageTitle
        break
      case 'external':
        title = externalUrl
        break
      case 'download':
        title = downloadFile
        break
      default:
        title = `${startCase(condition)} Link`
        break
    }

    return {
      title: label || title,
      media: icon,
      ...prepare({
        condition,
        label,
        pageTitle,
        externalUrl,
        downloadFile,
        ...rest,
      }),
    }
  },
})
