<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindscss from "@tailwindcss/vite";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import path from 'path'
>>>>>>> ae2ecec (feat: add tailwindcss)

export default defineConfig({
<<<<<<< HEAD
  root: "src/app",
  plugins: [react(), tailwindscss()],
});
=======
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
>>>>>>> ae2ecec (feat: add tailwindcss)
