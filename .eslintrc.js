module.exports = {
  extends: ['expo', 'plugin:prettier/recommended'],
  ignorePatterns: ['/dist/*'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['warn', 'single', { avoidEscape: true }],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
};
