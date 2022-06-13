import Image from 'next/image'
import { FC } from 'react'

import styles from './AngusCowsCard.module.scss'

const AngusCowsCard: FC<{ cow: AngusCow }> = ({ cow }) => {
  return (
    <div className={styles.card}>
      <Image
        src={cow.pictures[0]}
        layout="responsive"
        width={0}
        height={0}
        objectFit="cover"
      />
      <h1>{cow.name}</h1>
      <p>{cow.description}</p>
    </div>
  )
}

export default AngusCowsCard
