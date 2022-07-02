import Image from 'next/image'
import dayjs from 'dayjs'

import styles from './AngusCowsDetails.module.scss'

import { getStrapiMedia } from '@lib/media'

const AngusCowsDetails: React.FC<{ cow: AngusCow }> = ({ cow }) => {
  const displayAdditionalPictures = () => {
    const pictures = []
    if (cow.attributes.pictures.data) {
      // Start on Index 1 since Main Image is displayed on the right column
      for (let i = 1; i < cow.attributes.pictures.data.length; i++) {
        pictures.push(
          <div>
            <Image
              src={getStrapiMedia(cow.attributes.pictures.data, i)}
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
            {cow.attributes.name} ({cow.attributes.uid})
          </h1>
          <p>{cow.attributes.description}</p>
          <h2>
            Date of Birth:{' '}
            <span>
              {dayjs(cow.attributes.dateOfBirth).format('MM/DD/YYYY')}
            </span>
          </h2>
          <h2>
            Weigth: <span>{cow.attributes.weight}lb</span>
          </h2>
          <h2>
            Price: <span>{cow.attributes.price}</span>
          </h2>
          <h2></h2>
        </div>
        <div className={styles.main_image}>
          <Image
            src={getStrapiMedia(cow.attributes.pictures.data)}
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

export default AngusCowsDetails
