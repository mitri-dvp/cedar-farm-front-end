import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './AngusCowsCard.module.scss'

const AngusCowsCard: React.FC<{ cow: AngusCow }> = ({ cow }) => {
  return (
    <Link href={`/angus-cows/${cow.attributes.slug}`}>
      <a className={styles.card}>
        <Image
          src={getStrapiMedia(cow.attributes.pictures.data)}
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
        />
        <h1>{cow.attributes.name}</h1>
        <p>{cow.attributes.description}</p>
      </a>
    </Link>
  )
}

export default AngusCowsCard
