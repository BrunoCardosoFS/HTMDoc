import { defineConfig } from "vite"

export default defineConfig({
    server: {
        https: {
            key: './ssl/localhost-key.key',
            cert: './ssl/localhost-key.crt'
        }
    },
    build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                return 'vendor'; // Todos os módulos de terceiros vão para um chunk chamado 'vendor'
              }
            }
          }
        }
    }
});