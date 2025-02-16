import type ngrok from '@ngrok/ngrok'

interface IntunnelOptions {
  intunnel: typeof ngrok
  port: number
  auth: string
}

export type { Listener } from '@ngrok/ngrok'

export { IntunnelOptions }
