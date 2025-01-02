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
    port: 5173, // Force port 5173
    strictPort: true, // Prevent Vite from changing ports automatically
  },
});
