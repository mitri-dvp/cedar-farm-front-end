import { FC } from 'react'
import Products from '@components/Products'

import styles from './AngusCowsList.module.scss'

const AngusCowsList: FC<{ cows: AngusCow[] }> = ({ cows }) => {
  return (
    <section className={styles.container}>
      <h1>Angus Cows</h1>
      <div>
        {cows.map(cow => (
          <Products.AngusCows.Card key={cow.id} cow={cow} />
        ))}
      </div>
    </section>
  )
}

export default AngusCowsList
