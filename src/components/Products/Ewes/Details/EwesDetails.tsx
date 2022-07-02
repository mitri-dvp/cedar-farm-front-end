import Image from 'next/image'
import dayjs from 'dayjs'

import styles from './EwesDetails.module.scss'

import { getStrapiMedia } from '@lib/media'

const EwesDetails: React.FC<{ ewe: Ewe }> = ({ ewe }) => {
  const displayAdditionalPictures = () => {
    const pictures = []
    if (ewe.attributes.pictures.data) {
      // Start on Index 1 since Main Image is displayed on the right column
      for (let i = 1; i < ewe.attributes.pictures.data.length; i++) {
        pictures.push(
          <div>
            <Image
              src={getStrapiMedia(ewe.attributes.pictures.data, i)}
              layout="responsive"
              width={0}
              height={0}
              objectFit="cover"
            />
          </div>
        )
      }
    }
    return pictures
  }

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.table}>
          <h1>
            {ewe.attributes.name} ({ewe.attributes.uid})
          </h1>
          <p>{ewe.attributes.description}</p>
          <h2>
            Date of Birth:{' '}
            <span>
              {dayjs(ewe.attributes.dateOfBirth).format('MM/DD/YYYY')}
            </span>
          </h2>
          <h2>
            Weigth: <span>{ewe.attributes.weight}lb</span>
          </h2>
          <h2>
            Price: <span>{ewe.attributes.price}</span>
          </h2>
          <h2></h2>
        </div>
        <div className={styles.main_image}>
          <Image
            src={getStrapiMedia(ewe.attributes.pictures.data)}
            layout="responsive"
            width={0}
            height={0}
            objectFit="cover"
          />
        </div>
      </main>
      <footer className={styles.pictures_list}>
        {displayAdditionalPictures()}
      </footer>
    </div>
  )
}

export default EwesDetails
