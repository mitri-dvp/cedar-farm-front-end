import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './CommercialSheepsCard.module.scss'

const CommercialSheepsCard: React.FC<{ sheep: CommercialSheep }> = ({
  sheep
}) => {
  return (
    <div className={styles.card}>
      {sheep.attributes.sold && (
        <div className={styles.sold_tag}>
          <Image src={'/sold.svg'} layout="responsive" width={0} height={0} />
        </div>
      )}
      <Link href={`/sheeps/commercial-sheeps/${sheep.attributes.slug}`}>
        <a className={styles.image_container}>
          <Image
            src={getStrapiMedia(sheep.attributes.pictures.data)}
            layout="responsive"
            width={0}
            height={0}
            objectFit="cover"
          />
        </a>
      </Link>
      <h1 className={styles.name}>
        <Link href={`/sheeps/commercial-sheeps/${sheep.attributes.slug}`}>
          <a>{sheep.attributes.name}</a>
        </Link>
      </h1>
      <h1>{sheep.attributes.dateOfBirth}</h1>
      <h1>{sheep.attributes.weight}lb</h1>
    </div>
  )
}

export default CommercialSheepsCard
