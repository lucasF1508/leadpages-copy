const path = require('path')

const sanityWebpack = require('@sanity/webpack-integration/v3')

const basePath = path.join(__dirname, '../../apps', 'studio') // TODO move to config
const options = {
  basePath,
  env: 'production', // TODO move to config
}

const { plugins, loaders } = sanityWebpack.getConfig(options)

const dir = __dirname
const studio_node_modules = path.join(basePath, 'node_modules')
const node_modules = path.join(dir, '..', '..', 'node_modules')
const null_modules = path.join(dir, 'null_modules')

const config = {
  entry: {
    main: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  plugins,
  externals: {
    '@sanity/client': '@sanity/client',
    lodash: 'lodash',
  },
  watchOptions: {
    aggregateTimeout: 200,
    ignored: ['**/node_modules', 'dist/*'],
  },
  module: {
    rules: [
      ...loaders,
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['next/babel'],
        },
      },
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        include: basePath,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: [
          path.join(node_modules, '@popperjs'),
          path.join(node_modules, '@react-dnd'),
          path.join(node_modules, '@sanity/form-builder'),
          path.join(node_modules, '@sanity/base'),
          path.join(studio_node_modules, '@sanity/base/lib/preview'),
          path.join(studio_node_modules, '@sanity/base/lib/presence'),
          path.join(studio_node_modules, '@sanity/base/lib/components'),
          path.join(studio_node_modules, '@sanity/base/lib/change-indicators'),
          path.join(node_modules, '@sanity/ui'),
          path.join(node_modules, '@sanity/uuid'),
          path.join(node_modules, '@sanity/code-input'),
          path.join(node_modules, 'axios'),
          path.join(node_modules, 'date-fns'),
          path.join(node_modules, 'dnd-core'),
          path.join(node_modules, 'framer-motion'),
          path.join(node_modules, 'hey-listen'),
          path.join(node_modules, 'humanize-list'),
          path.join(node_modules, 'immutability-helper'),
          path.join(node_modules, 'invariant'),
          path.join(node_modules, 'popmotion'),
          path.join(node_modules, 'process'),
          path.join(node_modules, 'react-dnd'),
          path.join(node_modules, 'react-dnd-html5-backend'),
          path.join(node_modules, 'react-dom'),
          path.join(node_modules, 'react-icons'),
          path.join(node_modules, 'react-select'),
          path.join(node_modules, 'styled-components'),
          path.join(basePath, 'plugins/gearbox-doc-order-sort/src/functions'),
        ],
        exclude: [path.join(node_modules, '@sanity/base/lib/schema')],
        use: 'null-loader',
      },
      {
        test: /\.css$/i,
        use: 'null-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'part:@sanity/base/client': path.join(null_modules, '/sanityClient.js'),
      'part:@sanity/base/schema': path.join(null_modules, 'schema.js'),
      'part:@sanity/form-builder$': path.join(null_modules, 'formBuilder.js'),
      '@studio': basePath,
    },
  },
}

module.exports = config
