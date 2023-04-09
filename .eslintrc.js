module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  overrides: [{files: ['*.ts', '*.tsx']}],
  plugins: ['react', '@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules', '/src/reportWebVitals.ts'],
  rules: {},
};
