module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "warn"
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  }
};
