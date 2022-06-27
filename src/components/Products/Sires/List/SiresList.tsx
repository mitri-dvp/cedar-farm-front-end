import Sires from '@components/Products/Sires'

import styles from './SiresList.module.scss'

const SiresList: React.FC<{ sires: Sire[] }> = ({ sires }) => {
  return (
    <section className={styles.container}>
      <h1>Dorper Sheep Sires</h1>
      <div>
        {sires.map(sire => (
          <Sires.Card key={sire.id} sire={sire} />
        ))}
      </div>
    </section>
  )
}

export default SiresList
