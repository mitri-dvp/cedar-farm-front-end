import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './RamsCard.module.scss'

const RamsCard: React.FC<{ ram: Ram }> = ({ ram }) => {
  return (
    <Link href={`/sheeps/rams/${ram.attributes.slug}`}>
      <a className={styles.card}>
        <Image
          src={getStrapiMedia(ram.attributes.pictures.data)}
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
        />
        <h1>{ram.attributes.name}</h1>
        <p>{ram.attributes.description}</p>
      </a>
    </Link>
  )
}

export default RamsCard
