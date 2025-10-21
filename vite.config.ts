import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log('::: env', env);

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss(),
      svgr({
        include: '**/*.svg?react',
      }),
    ],
    server:
      mode === 'development'
        ? {
            host: '0.0.0.0',
            allowedHosts: true,
            port: 5173,
          }
        : undefined,
  };
});
