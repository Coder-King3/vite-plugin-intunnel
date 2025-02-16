# vite-plugin-intunnel

A Vite plugin that securely exposes local development servers to the internet using Ngrok.

[![NPM version](https://img.shields.io/npm/v/vite-plugin-intunnel?color=a1b858)](https://www.npmjs.com/package/vite-plugin-intunnel)

## Installing this Plugin

Installation can be done in a few simple steps. From the root of your repo do the following:

1. **NPM Install**

   ```bash
   npm i vite-plugin-intunnel @ngrok/ngrok -D
   ```

2. **Ngrok Configuration**

   You need to log in to the Ngrok website and obtain your authtoken.

   Create a file named ngrok.config.ts and add it to your .gitignore to keep it private.

   ```ts
   export const NGROK_AUTH = 'your_auth'
   ```

3. **Vite Configuration**

   Add the following to your `vite.config.js` / `vite.config.ts` file:

   ```ts
   import { defineConfig } from 'vite'

   import { VitePluginIntunnel } from 'vite-plugin-intunnel'
   import ngrok from '@ngrok/ngrok'

   // 需要登录 ngrok 官网获取 ngrok authtoken
   import { NGROK_AUTH } from './ngrok.config'

   const SERVER_PROT = 8080

   export default defineConfig({
     server: {
       host: '0.0.0.0',
       port: SERVER_PROT
     },
     plugins: [
       VitePluginIntunnel({
         intunnel: ngrok,
         port: SERVER_PROT,
         auth: NGROK_AUTH
       })
     ]
   })
   ```
