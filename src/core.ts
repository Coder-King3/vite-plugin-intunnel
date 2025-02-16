import type { IntunnelOptions, Listener } from './types'

import { PluginOption } from 'vite'
import colors from 'chalk'
import consola from 'consola'

function VitePluginIntunnel({
  intunnel,
  port,
  auth
}: IntunnelOptions): PluginOption {
  let listeners: Listener

  return {
    name: 'vite:intunnel-server',
    apply: 'serve', // 只在开发模式下启用
    async configureServer(server) {
      if (listeners) return

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

      const _printUrls = server.printUrls
      server.printUrls = () => {
        _printUrls()

        consola.log(
          `  ${colors.green('➜')}  ${colors.bold(
            'Intunnel Server'
          )}: ${colors.cyan(listeners.url())}`
        )
      }
    }
  }
}

export { VitePluginIntunnel }
