import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import ThemeProvider from 'contexts/themes/provider'
import { Hydrate } from 'react-query/hydration'
import 'styles/themes/tailwind.css'

function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
