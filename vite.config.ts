// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- Importe o 'path' do Node.js

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Aqui estamos criando o alias '@'
      '@': path.resolve(__dirname, './src'),
    },
  },
})

