import Image from 'next/image'
import { FC } from 'react'

import styles from './RamsCard.module.scss'

const RamsCard: FC<{ ram: Ram }> = ({ ram }) => {
  return (
    <div className={styles.card}>
      <Image
        src={ram.pictures[0]}
        layout="responsive"
        width={0}
        height={0}
        objectFit="cover"
      />
      <h1>{ram.name}</h1>
      <p>{ram.description}</p>
    </div>
  )
}

export default RamsCard
