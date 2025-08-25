import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/melio-tasks/', // Remplace par le nom de ton dépôt GitHub
});
