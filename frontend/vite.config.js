import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "/src/",
            "@app": "@/app/",
            "@components": "@app/components/",
            "@containers": "@app/containers/",
            "@images": "@app/images/",
            "@globalStyle" : "@containers/app/styles/"
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
