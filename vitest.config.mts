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
    alias: { "@": root },
  },
  test: {
    environment: "jsdom",
    globals: true,
    css: false,
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.{ts,tsx}"],
  },
});
