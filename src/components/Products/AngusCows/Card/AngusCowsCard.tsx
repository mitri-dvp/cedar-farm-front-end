import Image from 'next/image'

import styles from './AngusCowsCard.module.scss'

const AngusCowsCard: React.FC<{ cow: AngusCow }> = ({ cow }) => {
  return (
    <div className={styles.card}>
      <Image
        src={
          cow.attributes.pictures.data
            ? cow.attributes.pictures.data[0].attributes.url
            : ''
        }
        layout="responsive"
        width={0}
        height={0}
        objectFit="cover"
      />
      <h1>{cow.attributes.name}</h1>
      <p>{cow.attributes.description}</p>
    </div>
  )
}

export default AngusCowsCard
