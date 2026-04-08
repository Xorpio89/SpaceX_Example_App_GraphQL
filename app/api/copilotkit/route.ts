import { CopilotRuntime, AnthropicAdapter, copilotRuntimeNextJSAppRouterHandler } from '@copilotkit/runtime'
import Anthropic from '@anthropic-ai/sdk'

const runtime = new CopilotRuntime()
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export const POST = copilotRuntimeNextJSAppRouterHandler({
  runtime,
  serviceAdapter: new AnthropicAdapter({ anthropic }),
  endpoint: '/api/copilotkit',
})
