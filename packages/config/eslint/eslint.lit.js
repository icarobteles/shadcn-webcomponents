import globals from "globals";
import tseslint from "typescript-eslint";
import liteslint from "eslint-plugin-lit";

export default tseslint.config(
  ...tseslint.configs.recommended,
  liteslint.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      indent: ["error", 2],
      "max-len": ["error", 120],
      "no-console": "warn",
      "no-debugger": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "HTMLElementTagNameMap" }],
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/ban-ts-comment": "off"
    }
  }
);
