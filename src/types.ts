import type ngrok from '@ngrok/ngrok'

interface IntunnelOptions {
  intunnel: typeof ngrok
  port: number
  auth: string
}

export { IntunnelOptions }
