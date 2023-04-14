/* eslint-disable unicorn/filename-case */
/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import { useProgram, useClaimNFT } from '@thirdweb-dev/react/solana'
import { useWallet } from '@solana/wallet-adapter-react'
import { contractAddresses } from 'configs/contractAddresses'
import styles from 'styles/Home.module.css'

export default function NFTDrop() {
  const { publicKey, connected } = useWallet()
  const walletAddress = useMemo(() => publicKey?.toBase58(), [publicKey])
  console.log(walletAddress)

  const { program } = useProgram(contractAddresses.DROP.address, 'nft-drop')
  const claim = useClaimNFT(program)

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>NFT Drop</h1>
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
        </div>
        <img src='/yellow_star.png' alt='Example NFT Image' width={300} height={300} />
        {connected && (
          <button
            className={styles.mainButton}
            onClick={() =>
              claim.mutate(
                { amount: 1 },
                {
                  onError: error => {
                    console.error(error)
                    alert('Something went wrong. Check the console for more details.')
                  },
                },
              )
            }
          >
            {claim.isLoading ? 'Claiming...' : claim.isSuccess ? 'Success!' : 'Claim NFT'}
          </button>
        )}
      </div>
    </div>
  )
}
