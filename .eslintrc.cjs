module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
    'plugin:tailwindcss/recommended',
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/pages'],
          ['~', './src/'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.vue']
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'tailwindcss',
  ],
  rules: {
    "vue/max-len": 'off',
    "linebreak-style": 0,
    "vue/multi-word-component-names": 'off',
    "vue/no-v-text-v-html-on-component": 'off',
    "tailwindcss/classnames-order": "error",
    "tailwindcss/enforces-negative-arbitrary-values": "error",
    "tailwindcss/enforces-shorthand": "error",
    "import/prefer-default-export": "off",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": 'off',
    "tailwindcss/no-contradicting-classname": "error",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'import/no-cycle': 'off',
  },
};
