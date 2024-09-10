module.exports = {
  root: true,
  // TODO: Add TS plugin to code-consistency repo
  extends: ["@igne-agency/eslint-config-igne", "plugin:@typescript-eslint/recommended"],
  // TODO: Add to code-consistency repo
  globals: {
    React: true,
    JSX: true,
  },
  // Allow console in this project
  rules: {
    "no-console": 0,
  },
};
