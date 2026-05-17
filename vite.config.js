import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(() => ({
  // Default to root for Vercel/static hosting.
  // For GitHub Pages, pass `--base=/Simple-ChatBOT/` in the build command.
  plugins: [tailwindcss(), react(), babel({ presets: [reactCompilerPreset()] })],
}))
