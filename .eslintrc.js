module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      env: {
        'jest/globals': true,
      },
      plugins: ['jest', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // js 파일에서도 jsx 문법 사용하게 허용
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // emotion의 css 프로퍼티 예외 처리
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
