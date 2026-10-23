import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

// الملفات الثابتة (الصورة والأيقونات) موجودة في المجلد الرئيسي، وهنا بننسخها لمجلد البناء
const staticFiles = [
  'photo.jpg',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png',
  'apple-touch-icon.png',
  'manifest.webmanifest',
]

const copyStatic = () => ({
  name: 'copy-static',
  generateBundle() {
    for (const f of staticFiles) {
      this.emitFile({
        type: 'asset',
        fileName: f,
        source: readFileSync(new URL('./' + f, import.meta.url)),
      })
    }
  },
})

export default defineConfig({ plugins: [react(), copyStatic()], publicDir: false })
