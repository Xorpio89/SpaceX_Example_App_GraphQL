import { CopilotRuntime, AnthropicAdapter, copilotRuntimeNextJSAppRouterEndpoint } from '@copilotkit/runtime'

const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
  runtime: new CopilotRuntime(),
  serviceAdapter: new AnthropicAdapter(),
  endpoint: '/api/copilotkit',
})

export const POST = handleRequest
export const GET = handleRequest
