import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as vitePluginSvgr from "vite-plugin-svgr";
const svgrPlugin = vitePluginSvgr['default'];

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
