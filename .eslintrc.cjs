module.exports = {
  env: { browser: true, es2020: true },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    jsourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
