import Head from 'next/head'
import type { AppProps } from 'next/app'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { ThirdwebProvider } from '@thirdweb-dev/react/solana'
import Header from 'components/Header'
import 'styles/globals.css'

require('@solana/wallet-adapter-react-ui/styles.css')

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider network='devnet'>
      <WalletModalProvider>
        <Head>
          <title>Solana TestHub</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </WalletModalProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
