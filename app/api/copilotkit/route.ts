import { CopilotRuntime, AnthropicAdapter, copilotRuntimeNextJSAppRouterEndpoint } from '@copilotkit/runtime'

export const POST = copilotRuntimeNextJSAppRouterEndpoint({
  runtime: new CopilotRuntime(),
  serviceAdapter: new AnthropicAdapter(),
  endpoint: '/api/copilotkit',
})
