import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Notification App',
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
