import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, '/src/assets/') },
      { find: '@components', replacement: path.resolve(__dirname, '/src/components/') },
      { find: '@data', replacement: path.resolve(__dirname, '/src/data/') },
      { find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks/') },
      { find: '@theme', replacement: path.resolve(__dirname, '/src/theme/') },
      { find: '@utils', replacement: path.resolve(__dirname, '/src/utils/') },
      { find: '@widgets', replacement: path.resolve(__dirname, '/src/widgets/') },
    ],
  },
  plugins: [react()],
})