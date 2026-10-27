import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://littlebloomhousejc.com",
  output: "static",
  trailingSlash: "never",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 8080,
      watch: {
        usePolling: process.env.CHOKIDAR_USEPOLLING === "true",
      },
    },
  },
});
