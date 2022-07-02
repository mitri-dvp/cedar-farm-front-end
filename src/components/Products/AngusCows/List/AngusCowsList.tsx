import Products from '@components/Products'

import styles from './AngusCowsList.module.scss'

const AngusCowsList: React.FC<{ cows: AngusCow[] }> = ({ cows }) => {
  return (
    <section className={styles.container}>
      <h1>Angus Cows</h1>
      <div className={styles.header}>
        <h1></h1>
        <h1>Name</h1>
        <h1>Date of Birth</h1>
        <h1>Weight</h1>
      </div>
      <div className={styles.list}>
        {cows.map(cow => (
          <Products.AngusCows.Card key={cow.id} cow={cow} />
        ))}
      </div>
    </section>
  )
}

export default AngusCowsList
