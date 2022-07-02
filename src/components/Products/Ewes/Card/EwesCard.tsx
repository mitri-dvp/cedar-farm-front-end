import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './EwesCard.module.scss'

const EwesCard: React.FC<{ ewe: Ewe }> = ({ ewe }) => {
  return (
    <div className={styles.card}>
      {ewe.attributes.sold && (
        <div className={styles.sold_tag}>
          <Image src={'/sold.svg'} layout="responsive" width={0} height={0} />
        </div>
      )}
      <Link href={`/sheeps/ewes/${ewe.attributes.slug}`}>
        <a className={styles.image_container}>
          <Image
            src={getStrapiMedia(ewe.attributes.pictures.data)}
            layout="responsive"
            width={0}
            height={0}
            objectFit="cover"
          />
        </a>
      </Link>
      <h1 className={styles.name}>
        <Link href={`/sheeps/ewes/${ewe.attributes.slug}`}>
          <a>{ewe.attributes.name}</a>
        </Link>
      </h1>
      <h1>{ewe.attributes.dateOfBirth}</h1>
      <h1>{ewe.attributes.weight}lb</h1>
    </div>
  )
}

export default EwesCard
