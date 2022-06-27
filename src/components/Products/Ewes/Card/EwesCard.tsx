import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './EwesCard.module.scss'

const EwesCard: React.FC<{ ewe: Ewe }> = ({ ewe }) => {
  return (
    <Link href={`/sheeps/ewes/${ewe.attributes.slug}`}>
      <a className={styles.card}>
        <Image
          src={getStrapiMedia(ewe.attributes.pictures.data)}
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
        />
        <h1>{ewe.attributes.name}</h1>
        <p>{ewe.attributes.description}</p>
      </a>
    </Link>
  )
}

export default EwesCard
