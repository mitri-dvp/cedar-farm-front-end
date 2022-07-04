import Products from '@components/Products'

import styles from './EwesList.module.scss'

const EwesList: React.FC<{ ewes: Ewe[] }> = ({ ewes }) => {
  return (
    <section className={styles.container}>
      <h1>Commercial Dorper Sheep For Sale</h1>
      <div className={styles.header}>
        <h1></h1>
        <h1>Name</h1>
        <h1>Born</h1>
        <h1>Weight</h1>
      </div>
      <div className={styles.list}>
        {ewes.map(ewe => (
          <Products.Ewes.Card key={ewe.id} ewe={ewe} />
        ))}
      </div>
    </section>
  )
}

export default EwesList
