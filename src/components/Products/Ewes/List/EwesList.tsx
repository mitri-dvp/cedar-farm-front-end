import { FC } from 'react'
import Products from '@components/Products'

import styles from './EwesList.module.scss'

const EwesList: FC<{ ewes: Ewe[] }> = ({ ewes }) => {
  return (
    <section className={styles.container}>
      <h1>Dorper Ewe Lambs For Sale</h1>
      <div>
        {ewes.map(ewe => (
          <Products.Ewes.Card key={ewe.id} ewe={ewe} />
        ))}
      </div>
    </section>
  )
}

export default EwesList
