import Rams from '@components/Products/Rams'

import styles from './RamsList.module.scss'

const RamsList: React.FC<{ rams: Ram[] }> = ({ rams }) => {
  return (
    <section className={styles.container}>
      <h1>Dorper Rams For Sale</h1>
      <div>
        {rams.map(ram => (
          <Rams.Card key={ram.id} ram={ram} />
        ))}
      </div>
    </section>
  )
}

export default RamsList
