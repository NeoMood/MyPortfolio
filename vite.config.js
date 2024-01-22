import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression2';

const cherryPickedKeys = [
  "NEXT_PUBLIC_SMTP_HOST",
  "NEXT_PUBLIC_SMTP_USERNAME",
  "NEXT_PUBLIC_SMTP_PASSWORD",
  "NEXT_PUBLIC_SMTP_TO",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react(), compression()],
  }
})