'use client'
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotPopup } from '@copilotkit/react-ui'
import '@copilotkit/react-ui/styles.css'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      {children}
      <CopilotPopup
        instructions="You are a SpaceX mission expert. Answer questions about launches, rockets, and missions concisely and with enthusiasm for space."
        defaultOpen={false}
        labels={{ title: 'Mission Intelligence', initial: 'Ask me anything about SpaceX...' }}
      />
    </CopilotKit>
  )
}
