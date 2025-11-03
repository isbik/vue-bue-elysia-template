import createFetchClient from 'openapi-fetch'
import type { ApiPaths } from './schema'
import type { operations } from './schema/generated'

export type OperationResponse<TOperation extends keyof operations> =
  operations[TOperation]['responses'][200]['content']['application/json']

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: '/api',
})
