import { defineConfig } from "vite"

export default defineConfig({
    server: {
        https: {
            key: './ssl/localhost-key.key',
            cert: './ssl/localhost-key.crt'
        }
    }
});