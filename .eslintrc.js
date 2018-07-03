module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html', 'vue'
  ],
  // add your custom rules here
  rules: {
    'max-depth': ['warn', {
      'max': 3
    }],
    'import/extensions': ['error', 'always', {
       js: 'never',
       vue: 'never'
    }],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', {
      'args': 'none',
      'caughtErrors': 'all'
    }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-param-reassign': ['warn', { props: false }],
    'import/no-extraneous-dependencies': 'never',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'radix': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 6
    }],
    'no-plusplus': [2, {
      'allowForLoopAfterthoughts': true
    }],
    'no-underscore-dangle': ['error', { 
      'allow': ['_id'] 
    }]
  },
  globals: {},
  settings: {}
}