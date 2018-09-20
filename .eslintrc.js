module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  'extends': 'eslint:recommended',
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': 'off',
    'no-console': 'off',
    'no-multi-spaces': 0
  }
};
