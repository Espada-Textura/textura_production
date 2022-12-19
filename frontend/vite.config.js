import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "/src",
            "@components": "/src/components",
            "@containers": "/src/containers",
            "@layouts": "/src/layouts",
            "@images": "/src/images",
            "@fonts": "/src/fonts",
            "@sass": "/src/sass",

        }
    },
    plugins: [
        react(),
    ],
    server: {
        host: true,
        port: 3000,
    },  
    preview: {
    port: 2000,
  },
});
