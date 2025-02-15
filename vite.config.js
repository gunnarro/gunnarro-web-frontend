import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

 export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), '');
   return {
     define: {
       'process.env.ENVIRONMENT': JSON.stringify(mode),
       'process.env.TODO_SERVICE_URL': JSON.stringify(env.TODO_SERVICE_URL),
       'process.env.TODO_SERVICE_USER': JSON.stringify(env.TODO_SERVICE_USER),
       'process.env.TODO_SERVICE_PWD': JSON.stringify(env.TODO_SERVICE_PWD),
       'process.env.APP_VERSION': JSON.stringify(env.APP_VERSION),
     },
     server: {
       port: 3000,
       host: true
     },
     build: {
         outDir: 'build',
       },
     plugins: [react(), svgr({ svgrOptions: { icon: true } })],
   };
});
