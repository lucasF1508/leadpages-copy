import type { AppProps } from 'next/app'

export interface CustomAppProps extends AppProps {
  pageProps: {
    data: any[]
    global?: {
      footer?: any
      navigation?: any
      siteMeta?: any
    }
    preview?: boolean
    queries?: any[]
  }
}
