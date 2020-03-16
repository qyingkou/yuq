module.exports = function(api) {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3.6
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-class-properties', { loose: false }]
  ];

  return {
    presets,
    plugins
  };
};
