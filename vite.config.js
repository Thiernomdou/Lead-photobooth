import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, 'pages')

export default defineConfig({
  // Sert depuis pages/ → les URLs /lyon/, /blog/, etc. correspondent à la structure finale
  root,
  server: {
    port: 3002,
    open: '/lyon/'
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        lyon:           resolve(root, 'lyon/index.html'),
        mariage:        resolve(root, 'lyon/mariage/index.html'),
        anniversaire:   resolve(root, 'lyon/anniversaire/index.html'),
        entreprise:     resolve(root, 'lyon/entreprise/index.html'),
        pasCher:        resolve(root, 'lyon/pas-cher/index.html'),
        blogPrix:       resolve(root, 'blog/prix-location-photobooth/index.html'),
        blogAnimations: resolve(root, 'blog/idees-animations-mariage-lyon/index.html'),
        blogFormats:    resolve(root, 'blog/photobooth-ouvert-ferme/index.html'),
      }
    }
  }
})
