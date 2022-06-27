import Image from 'next/image'
import dayjs from 'dayjs'

import styles from './CommercialSheepsDetails.module.scss'

import { getStrapiMedia } from '@lib/media'

const CommercialSheepsDetails: React.FC<{ sheep: CommercialSheep }> = ({
  sheep
}) => {
  const displayAdditionalPictures = () => {
    const pictures = []
    if (sheep.attributes.pictures.data) {
      // Start on Index 1 since Main Image is displayed on the right column
      for (let i = 1; i < sheep.attributes.pictures.data.length; i++) {
        pictures.push(
          <div>
            <Image
              src={getStrapiMedia(sheep.attributes.pictures.data, i)}
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
            {sheep.attributes.name} ({sheep.attributes.uid})
          </h1>
          <p>{sheep.attributes.description}</p>
          <h2>
            Born:{' '}
            <span>
              {dayjs(sheep.attributes.dateOfBirth).format('MM/DD/YYYY')}
            </span>
          </h2>
          <h2>
            Weigth: <span>{sheep.attributes.weight}</span>
          </h2>
          <h2>
            Price: <span>{sheep.attributes.price}</span>
          </h2>
          <h2></h2>
        </div>
        <div className={styles.main_image}>
          <Image
            src={getStrapiMedia(sheep.attributes.pictures.data)}
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

export default CommercialSheepsDetails
