module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'spaced-comment': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
