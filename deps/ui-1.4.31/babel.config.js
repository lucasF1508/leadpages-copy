module.exports = api => {
  const env = api.env();
  const isProd = env === 'production';
  const ESM = process.env.ESM;
  // NOTE: env can also be 'docker' or 'development'.
  // Add vars here if you need to target those environments specifically.

  return {
    ignore: ['/node_modules/'],
    sourceMaps: !isProd,
    presets: [
      ESM && [
        // https://babeljs.io/docs/en/babel-preset-env
        '@babel/preset-env',
        {
          // Tries to compile the broken syntax to the closest non-broken
          // modern syntax supported by your target browsers
          bugfixes: true,
          // Do not transform modules to CJS
          modules: false,
          // Exclude transforms that make all code slower
          exclude: ['transform-typeof-symbol'],
        },
      ],
      !ESM && [
        // ES features necessary for user's Node version
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      [
        // https://babeljs.io/docs/en/babel-preset-react
        '@babel/preset-react',
        {
          // Adds component stack to warning messages
          // Adds __self attribute to JSX which React will use for some warnings
          development: !isProd,
          // Will use the native built-in instead of trying to polyfill
          // behavior for any plugins that require one.
          useBuiltIns: true,
        },
      ],
    ].filter(Boolean),
    plugins: [
      // https://github.com/merceyz/babel-plugin-optimize-clsx#readme
      'babel-plugin-optimize-clsx',
      // https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements
      '@babel/plugin-transform-react-constant-elements',
      // Optional chaining and nullish coalescing are supported in @babel/preset-env,
      // but not yet supported in webpack/acorn due to support missing from acorn.
      // These can be removed once acorn has support.
      // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
      '@babel/plugin-proposal-optional-chaining',
      // https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
      '@babel/plugin-proposal-nullish-coalescing-operator',
      [
        // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
        '@babel/plugin-proposal-class-properties',
        {
          // class { handleClick = () => { } }
          // Enable loose mode to use assignment instead of defineProperty
          loose: true,
        },
      ],
      [
        // https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
        '@babel/plugin-proposal-object-rest-spread',
        { loose: true },
      ],
      // Polyfills the runtime needed for async/await, generators, and friends
      // https://babeljs.io/docs/en/babel-plugin-transform-runtime
      [
        '@babel/plugin-transform-runtime',
        {
          // CommonJS helpers
          useESModules: !!ESM,
          // By default, babel assumes babel/runtime version 7.0.0,
          version: require('@babel/runtime/package.json').version,
        },
      ],
      [
        // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#readme
        'babel-plugin-transform-react-remove-prop-types',
        {
          // propType definitions are wrapped in if (process.env.NODE_ENV !== "production") {}
          mode: 'unsafe-wrap',
        },
      ],
      [
        'babel-plugin-transform-imports',
        {
          // Ensures that bundles do not load entire MUI libraries
          // https://material-ui.com/guides/minimizing-bundle-size/#option-2
          '@material-ui/core': {
            // eslint-disable-next-line no-template-curly-in-string
            transform: '@material-ui/core/${member}',
            preventFullImport: true,
          },
          '@material-ui/icons': {
            // eslint-disable-next-line no-template-curly-in-string
            transform: '@material-ui/icons/${member}',
            preventFullImport: true,
          },
          '@material-ui/lab': {
            // eslint-disable-next-line no-template-curly-in-string
            transform: '@material-ui/lab/${member}',
            preventFullImport: true,
          },
        },
      ],
      isProd && [
        // https://babeljs.io/docs/en/babel-plugin-transform-remove-console
        'babel-plugin-transform-remove-console',
        {
          exclude: ['error', 'warn'],
        },
      ],
    ].filter(Boolean),
  };
};
