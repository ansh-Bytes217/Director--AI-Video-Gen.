import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';

dotenv.config(); // ensures .env works everywhere

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      port: parseInt(env.VITE_PORT || '5173'),
      open: env.VITE_OPEN_BROWSER?.toLowerCase() !== 'false',
    },
  };
});
