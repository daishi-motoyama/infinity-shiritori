module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: [
    'simple-import-sort',
    'typescript-sort-keys',
    'sort-keys-fix',
    'sort-destructure-keys',
    'unused-imports',
    '@typescript-eslint',
  ],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Application code.
          ['^@addcari/global'],
          ['^@src'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'warn',
    'unused-imports/no-unused-imports': 'warn',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    // https://github.com/yannickcr/eslint-plugin-react
    'react/destructuring-assignment': ['warn', 'always'],
    'react/display-name': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': ['warn', { props: 'always' }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': [
      'warn',
      { callbacksLast: true, shorthandFirst: true },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
