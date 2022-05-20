module.exports = {
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-storysource'],
  babel: async options => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-proposal-optional-chaining'],
  }),
};
