import contractAddresses from '../configs/contractAddresses'
import styles from '../styles/Home.module.css'
import { useNFTs, useProgram } from '@thirdweb-dev/react/solana'
import { ThirdwebNftMedia } from '@thirdweb-dev/react'

export default function NFTCollection() {
  const { program } = useProgram(contractAddresses[1].address, 'nft-collection')
  const allQuery = useNFTs(program)

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>NFT Collection</h1>
        </div>

        {allQuery.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.nftBoxGrid}>
            {allQuery.data?.map(nft => (
              <div className={styles.nftBox} key={nft.metadata.id?.toString() || ''}>
                <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftMedia} />
                <h3>{nft.metadata.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
