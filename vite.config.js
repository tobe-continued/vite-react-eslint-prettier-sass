import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import * as pkgJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: pkgJson.config.port,
    cors: {
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
    }
  },
  plugins: [
    react(),
    eslintPlugin(),
  ]
});
