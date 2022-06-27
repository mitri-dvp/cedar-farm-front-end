import Products from '@components/Products'

import styles from './CommercialSheepsList.module.scss'

const CommercialSheepsList: React.FC<{
  sheeps: CommercialSheep[]
}> = ({ sheeps }) => {
  return (
    <section className={styles.container}>
      <h1>Commercial Dorper Sheep For Sale</h1>
      <div>
        {sheeps.map(sheep => (
          <Products.CommercialSheeps.Card key={sheep.id} sheep={sheep} />
        ))}
      </div>
    </section>
  )
}

export default CommercialSheepsList
