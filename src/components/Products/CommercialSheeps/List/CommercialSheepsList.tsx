import Products from '@components/Products'

import styles from './CommercialSheepsList.module.scss'

const CommercialSheepsList: React.FC<{ sheeps: CommercialSheep[] }> = ({
  sheeps
}) => {
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
        {sheeps.map(sheep => (
          <Products.CommercialSheeps.Card key={sheep.id} sheep={sheep} />
        ))}
      </div>
    </section>
  )
}

export default CommercialSheepsList
