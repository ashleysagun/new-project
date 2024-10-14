import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  <QueryClientProvider client={queryClient}>
    <div class="container mx-auto">
      <Card/>
    </div>
  </QueryClientProvider>
}
