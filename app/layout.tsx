'use client'
import './globals.css'
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotPopup } from '@copilotkit/react-ui'
import '@copilotkit/react-ui/styles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CopilotKit runtimeUrl="/api/copilotkit">
          <header className="border-b border-[--color-space-border] px-6 py-4 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <h1 className="text-white font-mono font-semibold tracking-wide">SpaceX Mission Intelligence</h1>
              <p className="text-[--color-space-muted] text-xs">Ask the AI anything about any launch</p>
            </div>
          </header>
          <main>{children}</main>
          <CopilotPopup
            instructions="You are a SpaceX mission expert. Answer questions about launches, rockets, and missions concisely and with enthusiasm for space."
            defaultOpen={false}
            labels={{ title: 'Mission Intelligence', initial: 'Ask me anything about SpaceX...' }}
          />
        </CopilotKit>
      </body>
    </html>
  )
}
