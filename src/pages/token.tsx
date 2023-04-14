import { useProgram, useTokenSupply } from '@thirdweb-dev/react/solana'
import { contractAddresses } from 'configs/contractAddresses'
import styles from 'styles/Home.module.css'

export default function Token() {
  const { program } = useProgram(contractAddresses.TOKEN.address, 'token')
  const balanceQuery = useTokenSupply(program)

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>Token</h1>
        </div>

        <div className={styles.tokenGrid}>
          <div className={styles.tokenItem}>
            <h3 className={styles.tokenLabel}>Total Supply</h3>
            <p className={styles.tokenValue}>
              {balanceQuery.isLoading ? 'Loading...' : balanceQuery.data?.displayValue || ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
