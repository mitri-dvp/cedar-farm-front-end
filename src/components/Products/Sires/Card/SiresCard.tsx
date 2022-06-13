import Image from 'next/image'
import { FC } from 'react'

import styles from './SiresCard.module.scss'

const SiresCard: FC<{ sire: Sire }> = ({ sire }) => {
  return (
    <div className={styles.card}>
      <Image
        src={sire.pictures[0]}
        layout="responsive"
        width={0}
        height={0}
        objectFit="cover"
      />
      <h1>{sire.name}</h1>
      <p>{sire.description}</p>
    </div>
  )
}

export default SiresCard
