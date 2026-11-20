import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

import { nitro } from "nitro/vite";

export default defineConfig(({ mode }) => {
  const isGithubPagesBuild = mode === "github-pages";

  return {
    base: "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      dyadComponentTagger(),
      react(),
      ...(isGithubPagesBuild ? [] : [nitro()]),
    ],
    ...(isGithubPagesBuild ? { build: { outDir: "dist" } } : {}),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
