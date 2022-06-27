import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './SiresCard.module.scss'

const SiresCard: React.FC<{ sire: Sire }> = ({ sire }) => {
  return (
    <Link href={`/sires/${sire.attributes.slug}`}>
      <a className={styles.card}>
        <Image
          src={getStrapiMedia(sire.attributes.pictures.data)}
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
        />
        <h1>{sire.attributes.name}</h1>
        <p>{sire.attributes.description}</p>
      </a>
    </Link>
  )
}

export default SiresCard
