const path = require('path')

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, '../stories'))

    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/,
    })

    return config
  },
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
}
