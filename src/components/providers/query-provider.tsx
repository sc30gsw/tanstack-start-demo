import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()

export function QueryProvider({ children }: Record<'children', ReactNode>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
