import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "frontend/src/",
            "@components": "src/app/components/",
            "@containers": "src/app/containers/",
            "@images": "@/app/images/",
        }
    },
    plugins: [
        react(),
    ],
    server: {
        host: true,
        port: 3000,
    },
});
