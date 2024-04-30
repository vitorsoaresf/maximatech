import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@contexts": "/src/contexts",
      "@interfaces": "/src/interfaces",
      "@libs": "/src/libs",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@services": "/src/services",
      "@utils": "/src/utils",
    },
  },
});
