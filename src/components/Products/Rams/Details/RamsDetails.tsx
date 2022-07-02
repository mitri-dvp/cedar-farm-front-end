import Image from 'next/image'
import dayjs from 'dayjs'

import styles from './RamsDetails.module.scss'

import { getStrapiMedia } from '@lib/media'

const RamsDetails: React.FC<{ ram: Ram }> = ({ ram }) => {
  const displayAdditionalPictures = () => {
    const pictures = []
    if (ram.attributes.pictures.data) {
      // Start on Index 1 since Main Image is displayed on the right column
      for (let i = 1; i < ram.attributes.pictures.data.length; i++) {
        pictures.push(
          <div>
            <Image
              src={getStrapiMedia(ram.attributes.pictures.data, i)}
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
            {ram.attributes.name} ({ram.attributes.uid})
          </h1>
          <p>{ram.attributes.description}</p>
          <h2>
            Date of Birth:{' '}
            <span>
              {dayjs(ram.attributes.dateOfBirth).format('MM/DD/YYYY')}
            </span>
          </h2>
          <h2>
            Weigth: <span>{ram.attributes.weight}lb</span>
          </h2>
          <h2>
            Price: <span>{ram.attributes.price}</span>
          </h2>
          <h2></h2>
        </div>
        <div className={styles.main_image}>
          <Image
            src={getStrapiMedia(ram.attributes.pictures.data)}
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

export default RamsDetails
