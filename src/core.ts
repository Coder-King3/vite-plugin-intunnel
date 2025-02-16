import { Plugin } from 'vite'
import { IntunnelOptions } from './types'
import type { Listener } from '@ngrok/ngrok'

function VitePluginIntunnel({ intunnel, port, auth }: IntunnelOptions): Plugin {
  let listeners: Listener

  const printUrl = () => console.log(`🌍 Ngrok Tunnel: ${listeners.url()}`)

  return {
    name: 'vite-plugin-intunnel',
    apply: 'serve', // 只在开发模式下启用
    async configureServer(server) {
      if (listeners) return printUrl()

      const addr = port || server.config.server.port
      listeners = await intunnel.forward({
        addr,
        authtoken: auth
      })

      // 获取 ngrok 分配的域名
      const intunnelHost = new URL(listeners.url() as string).hostname

      // 动态添加到 allowedHosts
      const allowedHosts = (server.config.server.allowedHosts as string[]) ?? []
      server.config.server.allowedHosts = [...allowedHosts, intunnelHost]

      printUrl()
    }
  }
}

export { VitePluginIntunnel }
