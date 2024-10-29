import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["**/build/*", "**/node_modules/*", "**/public/*"],
  },
  {
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      "typescript-eslint": tseslint,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
