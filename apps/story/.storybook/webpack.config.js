const path = require('path')
const findUp = require('find-up')
const Dotenv = require('dotenv-webpack')

const pathToPublic = path.resolve(__dirname, '../../web/public')
const importAliases = require(path.resolve(
  __dirname,
  '../../web/jsconfig.json'
))

const covertAliasFromWebToStory = () =>
  Object.keys(importAliases.compilerOptions.paths)
    .map((alias) => {
      if (!alias.includes('@')) return false

      const [aliasPath] = importAliases.compilerOptions.paths[alias]

      const newPath =
        aliasPath.substr(0, 2) === './'
          ? aliasPath.replace('./', `../../web/`)
          : `../${aliasPath}`

      return {
        [alias.replace('/*', '')]: path.resolve(
          __dirname,
          newPath.replace('/*', '')
        ),
      }
    })
    .filter(Boolean)
    .reduce(
      (object, field) => ({
        ...object,
        ...field,
      }),
      {}
    )

module.exports = ({ config }) => {
  const convertedAliases = covertAliasFromWebToStory()

  const aliases = {
    '@data': path.resolve(__dirname, '../data'),
    '@storyUtils': path.resolve(__dirname, '../utils'),
    ...convertedAliases,
  }

  const fileLoaderRule = config.module.rules.find(({ test }) =>
    test.test('.svg')
  )

  fileLoaderRule.exclude = pathToPublic

  config.plugins.push(
    new Dotenv({
      // makes vars available to the application js code
      path: findUp.sync([`.env.${process.env.NODE_ENV}`, '.env.local', '.env']),
      allowEmptyValues: true,
      systemvars: true,
    })
  )

  config.module.rules.push({
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    include: `${pathToPublic}/images`,
    use: [
      {
        loader: 'sizeof-loader',
        options: {
          useFileLoader: false,
          name: '[path][name].[ext]',
        },
      },
    ],
  })

  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases,
  }

  config.node = {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }

  return config
}
;('use strict')
