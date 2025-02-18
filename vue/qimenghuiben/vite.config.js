import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "https://van.mama.cn/hb",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
