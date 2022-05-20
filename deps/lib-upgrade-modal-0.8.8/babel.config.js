module.exports = function(api) {
  api.cache(true);

  let presets = [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
        modules: process.env.ESM ? false : 'auto',
      },
    ],
    '@babel/preset-react',
  ];

  if (process.env.NODE_ENV === 'test') {
    presets = [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-react',
    ];
  }
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        // CommonJS helpers
        useESModules: !!process.env.ESM,
        // By default, babel assumes babel/runtime version 7.0.0,
        version: require('@babel/runtime/package.json').version,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
