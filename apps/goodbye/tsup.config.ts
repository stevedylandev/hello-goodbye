import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm"],
  outDir: "dist",
  clean: true,
  minify: false,
  sourcemap: true,
  dts: true,
  splitting: false,
  treeshake: true,
});
