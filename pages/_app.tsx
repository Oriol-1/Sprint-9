import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SWRConfig } from 'swr'
import { lightTheme } from '@/themes'
import '../styles/globals.css' 
import { AuthProvider, CartProvider, UiProvider } from '../components/context/indext';

 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return(

<SWRConfig 
      value={{
       
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <AuthProvider>
      <CartProvider>
      <UiProvider>
      <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
      </UiProvider>
      </CartProvider>
      </AuthProvider>
    </SWRConfig>
  
  )
}


