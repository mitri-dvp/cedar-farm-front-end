import Image from 'next/image'
import { FC } from 'react'

import styles from './CommercialSheepsCard.module.scss'

const CommercialSheepsCard: FC<{ sheep: CommercialSheep }> = ({ sheep }) => {
  return (
    <div className={styles.card}>
      <Image
        src={sheep.pictures[0]}
        layout="responsive"
        width={0}
        height={0}
        objectFit="cover"
      />
      <h1>{sheep.name}</h1>
      <p>{sheep.description}</p>
    </div>
  )
}

export default CommercialSheepsCard
