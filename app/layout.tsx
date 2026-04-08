import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'SpaceX Mission Intelligence',
  description: 'Real-time SpaceX launches with AI mission briefings',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="border-b border-[--color-space-border] px-6 py-4 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <h1 className="text-white font-mono font-semibold tracking-wide">SpaceX Mission Intelligence</h1>
              <p className="text-[--color-space-muted] text-xs">Ask the AI anything about any launch</p>
            </div>
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
