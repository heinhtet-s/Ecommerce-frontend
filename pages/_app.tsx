import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import {
  Hydrate,
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function MyApp({ Component, pageProps }: AppProps) {

  // const [isSSR, setIsSSR] = useState<boolean>(true);

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      }
    }
  }));
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider >

    </>
  )
}

export default MyApp
