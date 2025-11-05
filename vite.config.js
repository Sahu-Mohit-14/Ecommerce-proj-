import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { PATH_LOGIN } from './src/routes/routeConfig'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server:{
    open:PATH_LOGIN
  }
})