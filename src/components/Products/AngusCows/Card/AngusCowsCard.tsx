import { getStrapiMedia } from '@lib/media'
import Image from 'next/image'
import Link from 'next/link'

import styles from './AngusCowsCard.module.scss'

const AngusCowsCard: React.FC<{ cow: AngusCow }> = ({ cow }) => {
  return (
    <div className={styles.card}>
      {cow.attributes.sold && (
        <div className={styles.sold_tag}>
          <Image src={'/sold.svg'} layout="responsive" width={0} height={0} />
        </div>
      )}
      <Link href={`/angus-cows/${cow.attributes.slug}`}>
        <a className={styles.image_container}>
          <Image
            src={getStrapiMedia(cow.attributes.pictures.data)}
            layout="responsive"
            width={0}
            height={0}
            objectFit="cover"
          />
        </a>
      </Link>
      <h1 className={styles.name}>
        <Link href={`/angus-cows/${cow.attributes.slug}`}>
          <a>{cow.attributes.name}</a>
        </Link>
      </h1>
      <h1>{cow.attributes.dateOfBirth}</h1>
      <h1>{cow.attributes.weight}lb</h1>
    </div>
  )
}

export default AngusCowsCard
