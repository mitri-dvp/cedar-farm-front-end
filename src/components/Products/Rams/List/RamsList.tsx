import Products from '@components/Products'

import styles from './RamsList.module.scss'

const RamsList: React.FC<{ rams: Ram[] }> = ({ rams }) => {
  return (
    <section className={styles.container}>
      <h1>Commercial Dorper Sheep For Sale</h1>
      <div className={styles.header}>
        <h1></h1>
        <h1>Name</h1>
        <h1>Date of Birth</h1>
        <h1>Weight</h1>
      </div>
      <div className={styles.list}>
        {rams.map(ram => (
          <Products.Rams.Card key={ram.id} ram={ram} />
        ))}
      </div>
    </section>
  )
}

export default RamsList
