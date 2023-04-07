import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Blocks = [
  {
    name: 'NFT Drop',
    description: 'Claimable drop of one-of-one NFTs',
    link: `/nft-drop`,
    icon: `/icons/drop.webp`,
  },
  {
    name: 'NFT Collection',
    description: 'A collection of one-of-one NFTs',
    link: `/nft-collection`,
    icon: `/icons/nft-collection.webp`,
  },
  {
    name: 'Token',
    description: 'Your own digital currency',
    link: `/token`,
    icon: `/icons/token.webp`,
  },
]

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <img src='/thirdweb.svg' className={styles.icon} />
          <img src='/sol.png' className={styles.icon} />
        </div>
        <div className={styles.contractBoxGrid}>
          {Blocks.map(c => (
            <div
              className={styles.contractBox}
              key={c.name}
              onClick={() => router.push(`${c.link}`)}
            >
              <div className={styles.contractImage}>
                <img src={c.icon} />
              </div>
              <h3 className={styles.cardName}>{c.name}</h3>
              <p className={styles.description}>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
