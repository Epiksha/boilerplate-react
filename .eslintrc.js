module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },

  rules: {
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};