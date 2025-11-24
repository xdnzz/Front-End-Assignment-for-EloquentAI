import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'


export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ 
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), 
      name: 'EloquentChatWidget',
      fileName: (format) => `eloquent-chat-widget.${format}.js`
    },
    rollupOptions: {
      
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})