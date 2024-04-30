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
      "@context": "/src/context",
      "@interface": "/src/interface",
      "@lib": "/src/lib",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@services": "/src/services",
      "@utils": "/src/utils",
    },
  },
});
