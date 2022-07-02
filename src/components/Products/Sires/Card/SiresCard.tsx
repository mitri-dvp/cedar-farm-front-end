import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './SiresCard.module.scss'

const SiresCard: React.FC<{ sire: Sire }> = ({ sire }) => {
  return (
    <div className={styles.card}>
      {!sire.attributes.sold && (
        <div className={styles.image_sold}>
          <Image src={'/sold.svg'} layout="responsive" width={0} height={0} />
        </div>
      )}
      <Link href={`/sires/${sire.attributes.slug}`}>
        <a className={styles.image_container}>
          <Image
            src={getStrapiMedia(sire.attributes.pictures.data)}
            layout="responsive"
            width={0}
            height={0}
            objectFit="cover"
          />
        </a>
      </Link>
      <h1>{sire.attributes.name}</h1>
      <h1>{sire.attributes.dateOfBirth}</h1>
      <h1>{sire.attributes.weight}lb</h1>
    </div>
  )
}

export default SiresCard
