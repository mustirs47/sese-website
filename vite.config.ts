import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { assertNoPublicExposure } from "./scripts/security/publicExposure";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    {
      name: "prevent-public-secret-exposure",
      apply: "build" as const,
      buildStart() { assertNoPublicExposure(__dirname); },
    },
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  build: { sourcemap: false },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
