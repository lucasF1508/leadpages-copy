module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  ignore: ['/node_modules/'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-function-bind'
  ],
  sourceMaps: false,
  env: {
    production: {
      plugins: [
        'babel-plugin-transform-react-remove-prop-types',
        'transform-remove-console',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-function-bind'
      ],
      sourceMaps: false
    },
    test: {
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        'dynamic-import-node',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-function-bind'
      ]
    }
  }
};
