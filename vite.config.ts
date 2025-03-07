import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import path from 'path';
export default defineConfig({
  plugins: [
    tailwindcss(),
   
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias @ to the src directory
      '@assets': '/src/assets',
      '@pages': '/src/pages',
    },
  },
})