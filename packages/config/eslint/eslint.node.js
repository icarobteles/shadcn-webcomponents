import globals from "globals";
import jseslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    files: ["**/*.ts"],
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
      "arrow-parens": ["error", "always"],
      "max-len": ["error", 120],
      "no-console": "warn",
      "no-debugger": "warn"
    }
  }
);
