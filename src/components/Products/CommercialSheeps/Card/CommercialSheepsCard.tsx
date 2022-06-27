import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './CommercialSheepsCard.module.scss'

const CommercialSheepsCard: React.FC<{ sheep: CommercialSheep }> = ({
  sheep
}) => {
  return (
    <Link href={`/sheeps/commercial-sheeps/${sheep.attributes.slug}`}>
      <a className={styles.card}>
        <Image
          src={getStrapiMedia(sheep.attributes.pictures.data)}
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
        />
        <h1>{sheep.attributes.name}</h1>
        <p>{sheep.attributes.description}</p>
      </a>
    </Link>
  )
}

export default CommercialSheepsCard
