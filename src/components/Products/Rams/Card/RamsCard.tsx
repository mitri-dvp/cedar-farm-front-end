import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './RamsCard.module.scss'

const RamsCard: React.FC<{ ram: Ram }> = ({ ram }) => {
  return (
    <div className={styles.card}>
      {ram.attributes.sold && (
        <div className={styles.sold_tag}>
          <Image src={'/sold.svg'} layout="responsive" width={0} height={0} />
        </div>
      )}
      <Link href={`/sheeps/rams/${ram.attributes.slug}`}>
        <a className={styles.image_container}>
          <Image
            src={getStrapiMedia(ram.attributes.pictures.data)}
            layout="responsive"
            width={0}
            height={0}
            objectFit="cover"
          />
        </a>
      </Link>
      <h1 className={styles.name}>
        <Link href={`/sheeps/rams/${ram.attributes.slug}`}>
          <a>{ram.attributes.name}</a>
        </Link>
      </h1>
      <h1>{ram.attributes.dateOfBirth}</h1>
      <h1>{ram.attributes.weight}lb</h1>
    </div>
  )
}

export default RamsCard
