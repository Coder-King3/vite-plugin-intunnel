import { defineConfig } from 'vite'

import { VitePluginIntunnel } from '../src'
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
