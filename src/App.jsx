import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Countries from './components/Countries'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
         <Countries/>
      </QueryClientProvider>
    </>
  )
}

export default App
