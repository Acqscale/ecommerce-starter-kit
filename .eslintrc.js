module.exports = {
  // Configuration for JavaScript files
  extends: [
    'airbnb-base',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        jsxBracketSameLine: false,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports', 'tailwindcss'],
      extends: [
        'plugin:tailwindcss/recommended',
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@next/next/no-img-element': 'off', // We currently not using next/image because it isn't supported with SSG mode
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'class-methods-use-this': 'off', // _document.tsx use render method without `this` keyword
        'tailwindcss/no-custom-classname': 'off', // Disabled otherwise nightmare to allow each custom tailwind classes
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
  ],
};
