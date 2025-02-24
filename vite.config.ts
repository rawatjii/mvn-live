import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base:'/',
  plugins: [react()],
  test:{
    globals:true, //allow using global jest like functions
    environment:'jsdom', //simulate a browser environment
    setupFiles: './setupTests.js',
  },
  // json:{
  //   stringify:true,
  // },
  resolve:{
    alias:{
      root:path.resolve(__dirname, 'src/'),
      common:path.resolve(__dirname, 'src/common')
    }
  }
})
