import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "/src",
            "@components": "@/components",
            "@containers": "@/containers",
            "@layouts" : "@/layouts",
            "@images": "@/images",
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
