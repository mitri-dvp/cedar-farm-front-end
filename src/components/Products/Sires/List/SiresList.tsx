import Products from '@components/Products'

import styles from './SiresList.module.scss'

const SiresList: React.FC<{ sires: Sire[] }> = ({ sires }) => {
  return (
    <section className={styles.container}>
      <h1>Dorper Sheep Sires</h1>
      <div className={styles.header}>
        <h1></h1>
        <h1>Name</h1>
        <h1>Date of Birth</h1>
        <h1>Weight</h1>
      </div>
      <div className={styles.list}>
        {sires.map(sire => (
          <Products.Sires.Card key={sire.id} sire={sire} />
        ))}
      </div>
    </section>
  )
}

export default SiresList
