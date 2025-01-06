import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    host: "0.0.0.0", // Allow external access
    port: 5173, // Force the server to use port 5173
    strictPort: true, // Prevent Vite from changing ports automatically
    watch: {
      usePolling: true, // Enable polling to detect file changes
    },
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"], // Include image files in the build
});
