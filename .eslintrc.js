/*
 * rules列表项
 * 第一个是ErrorLevel：off/0, warn/1, error/2
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  /* ?顺序？ */
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',
    // 'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  /* ？有无顺序？ */
  plugins: ['react'],
  /*
   * https://eslint.org/docs/rules/
   */
  rules: {
    'no-unused-vars': ['off'],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2]
  }
};
