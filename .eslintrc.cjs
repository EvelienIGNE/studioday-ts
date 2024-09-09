module.exports = {
  root: true,
  // TODO: Add TS plugin to code-consistency repo
  extends: ["@igne-agency/eslint-config-igne", "plugin:@typescript-eslint/recommended"],
  // TODO: Add to code-consistency repo
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ["scripts/**"],
  rules: {
    "no-console": 0,
  },
};
