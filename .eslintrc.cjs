module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    sourceType: "module"
  },
  globals: {
    Translator: 'readonly',
  },
};
