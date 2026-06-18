import pluginJs from "@eslint/js";

import nextPlugin from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";

import eslintConfigPrettier from "eslint-config-prettier";
import pluginPromise from "eslint-plugin-promise";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended, // ? https://github.com/eslint/eslint
  importPlugin.flatConfigs.recommended, // ? https://github.com/import-js/eslint-plugin-import
  ...tseslint.configs.recommended, // ? https://github.com/typescript-eslint/typescript-eslint
  pluginPromise.configs["flat/recommended"], // ? https://github.com/eslint-community/eslint-plugin-promise
  pluginReact.configs.flat.recommended, // ? https://github.com/jsx-eslint/eslint-plugin-react
  pluginReact.configs.flat["jsx-runtime"], // ? https://github.com/jsx-eslint/eslint-plugin-react
  eslintConfigPrettier, // ? https://github.com/prettier/eslint-config-prettier
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",
      "react/display-name": "off",
      "react/prop-types": "off",
      "newline-before-return": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unused-expressions": "error",
      "import/no-unresolved": "off",
      "import/no-named-as-default": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "error",
      "import/named": "off",
      "import/no-named-as-default-member": "off",
    },
  },
  // ! ===================== DISCLAIMER =====================
  // ! There is no official solution available for new ESLint 9 flat config structure for NextJS
  // ! The solution is taken from the community and may not be the best practice, use it at your own risk
  // ? Ref: https://github.com/vercel/next.js/discussions/49337?sort=top#discussioncomment-5998603
  // ! ======================================================
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "error",
    },
  },
  // The content seam: `content/` holds raw, unparsed data. Only `lib/content/`
  // may read it; everything else consumes the validated exports. Scoping the
  // rule to app/ and components/ exempts lib/content itself and the tests,
  // which need the raw data to assert the parser rejects it.
  //
  // `content/site.config` is the one exception, by design: client components
  // read it directly so that importing `@/lib/content` — and zod with it —
  // never pulls the validator into the browser bundle. It is validated
  // server-side in `lib/content/index.ts`.
  //
  // The group is `@/content/*` rather than `@/content`: these are gitignore
  // semantics, so excluding the directory outright would make the negation
  // below unreachable.
  {
    files: ["src/app/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/content/*", "!@/content/site.config"],
              message:
                "Import validated content from `@/lib/content` — `content/` is raw, unparsed data.",
            },
          ],
        },
      ],
    },
  },

  // Tests run under Vitest's globals (`globals: true` in vitest.config.mts), so
  // `describe`/`it`/`expect`/`vi` are ambient rather than imported.
  {
    files: ["src/tests/**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.vitest },
    },
  },
  {
    ignores: [".next/*", "coverage/*"],
  },
];
