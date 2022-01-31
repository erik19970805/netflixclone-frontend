import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      cert: fs.readFileSync(path.resolve(__dirname, 'cert/cert.pem')),
      key: fs.readFileSync(path.resolve(__dirname, 'cert/key.pem')),
    },
  },
});
