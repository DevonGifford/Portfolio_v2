import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vitest/config";

const root = import.meta.dirname;

const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|avif|gif|svg)$/;

/**
 * Resolves image imports to a `StaticImageData`-shaped object, the way Next does.
 *
 * Vite resolves `import img from "./x.png"` to a URL *string*; Next resolves it to a
 * `StaticImageData` *object*. Without this the content schemas — which validate images
 * with `z.custom<StaticImageData>()` — would reject every project and skill icon under
 * Vitest while `next build` passed clean. Mocking `next/image` does not help: that
 * changes what the component renders, not what the import evaluates to.
 */
const nextStaticImages: Plugin = {
  name: "next-static-images",
  enforce: "pre",
  load(id) {
    const file = id.split("?")[0];

    if (!IMAGE_EXTENSIONS.test(file)) return null;

    const src = `/${path
      .relative(root, file)
      .split(path.sep)
      .join("/")
      .replace(/^public\//, "")}`;

    return `export default ${JSON.stringify({ src, width: 100, height: 100, blurDataURL: "" })};`;
  },
};

export default defineConfig({
  plugins: [react(), nextStaticImages],
  resolve: {
    // Array form, longest prefix first: `content/` and `public/` live outside
    // `src/`, and Vite's object form matches in insertion order rather than by
    // specificity, so `@/public/x` would otherwise resolve against `@`.
    alias: [
      { find: /^@\/public\//, replacement: `${root}/public/` },
      { find: /^@\/content\//, replacement: `${root}/content/` },
      { find: /^@\//, replacement: `${root}/src/` },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    css: false,
    setupFiles: ["./src/tests/setup.ts"],
    include: ["src/tests/**/*.test.{ts,tsx}"],
  },
});
