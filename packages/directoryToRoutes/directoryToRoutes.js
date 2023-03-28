const directoryTree = require('directory-tree')
const sanityClient = require('client')

const flattenDirectoryTree = ({
  rootDir = '',
  acc: _acc = [],
  children: _children,
}) =>
  _children.reduce((acc, { path, children, type }) => {
    const route = path.substring(path.indexOf(rootDir) + rootDir.length)

    if (type === 'file' && route.includes('[[...')) {
      const wildcard = route
        .replace(/(\/\[\[\.{3}.*\]\])/, '')
        .replace(/(\.\w{2,}$)/, '')
      acc.push(wildcard)
      acc.push(`${wildcard}/:path*`)
    } else if (type === 'file') {
      acc.push(route.replace('/index.js', '').replace(/(\.\w{2,}$)/, ''))
    }

    if (children) {
      return flattenDirectoryTree({ rootDir, acc, children })
    }
    return acc
  }, _acc)

const directoryToRoutes = (directory) => {
  const { name, children } = directoryTree(directory, {
    attributes: ['type'],
  })

  return flattenDirectoryTree({ rootDir: name, children })
}

const getSanityPaths = async ({
  types = ['page', 'customer', 'pageArchive', 'integration', 'comparison'],
  field = 'path',
  projectId,
  dataset,
}) => {
  const client = sanityClient({
    preview: false,
    config: {
      projectId,
      dataset,
      useCdn: false,
    },
  })

  const typesString = `[${types.map((item) => `'${item}'`).join(',')}]`
  const query = `*[_type in ${typesString} && !(_id in path('drafts.**')) && redirectToLegacy != true] | order(order asc, _createdAt desc).${field}`

  const data = await client.fetch(query)

  return data
}

const filter = (directory, routes) =>
  directory.filter((route) => !routes.includes(route))

const filterRoutesFromSanity = async ({ directory, ...sanityProps }) => {
  const dirPaths = directoryToRoutes(directory)
  const docPaths = await getSanityPaths(sanityProps)
  return filter(dirPaths, docPaths)
}

module.exports = {
  directoryToRoutes,
  getSanityPaths,
  filter,
  filterRoutesFromSanity,
}
