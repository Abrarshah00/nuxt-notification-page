module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'no-comments', 'vitest'],
  rules: {
    'vue/multi-word-component-names': ['off'],
    'vue/html-self-closing': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'no-comments/disallowComments': [
      'error',
      {
        allow: ['TODO', 'FIXME', 'NOTE', 'DEBUG'],
      },
    ],
    'no-console': 'warn',
  },
};
