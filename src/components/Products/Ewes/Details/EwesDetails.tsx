import Image from 'next/image'

import styles from './EwesDetails.module.scss'

const EwesDetails: React.FC<{ ewe: Ewe }> = ({ ewe }) => {
  return (
    <div className={styles.card}>
      <Image
        src={ewe.pictures[0]}
        layout="responsive"
        width={0}
        height={0}
        objectFit="cover"
      />
      <h1>{ewe.name}</h1>
      <p>{ewe.description}</p>
    </div>
  )
}

export default EwesDetails
