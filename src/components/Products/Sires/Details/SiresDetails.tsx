import { useState } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'

import styles from './SiresDetails.module.scss'

import { getStrapiMedia } from '@lib/media'
import Modal from '@components/Modal'
import { CaretLeftSVG, CaretRightSVG } from '@components/SVG'

const SiresDetails: React.FC<{ sire: Sire }> = ({ sire }) => {
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState(0)

  const displayAdditionalPictures = () => {
    const pictures = []
    if (sire.attributes.pictures.data) {
      // Start on Index 1 since Main Image is displayed on the right column
      for (let i = 1; i < sire.attributes.pictures.data.length; i++) {
        pictures.push(
          <div
            onClick={() => {
              setShowModal(true)
              setSelected(i)
            }}
          >
            <Image
              src={getStrapiMedia(sire.attributes.pictures.data, i)}
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
            {sire.attributes.name} ({sire.attributes.uid})
          </h1>
          <p>{sire.attributes.description}</p>
          <h2>
            Date of Birth:{' '}
            <span>
              {dayjs(sire.attributes.dateOfBirth).format('MM/DD/YYYY')}
            </span>
          </h2>
          <h2>
            Weigth: <span>{sire.attributes.weight}lb</span>
          </h2>
          <h2>
            Price: <span>{sire.attributes.price}</span>
          </h2>
          <h2></h2>
        </div>
        <div className={styles.main_image}>
          <Image
            onClick={() => {
              setShowModal(true)
              setSelected(0)
            }}
            src={getStrapiMedia(sire.attributes.pictures.data)}
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
      {sire.attributes.pictures.data && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Image
            src={getStrapiMedia(sire.attributes.pictures.data, selected)}
            layout="responsive"
            width={0}
            height={0}
            objectFit="cover"
          />
          <div className={styles.modal_buttons}>
            <div
              onClick={() => {
                const n = selected - 1
                if (n < 0) return
                setSelected(n)
              }}
            >
              <CaretLeftSVG />
            </div>
            <div
              onClick={() => {
                if (sire.attributes.pictures.data) {
                  const n = selected + 1
                  if (n > sire.attributes.pictures.data.length - 1) return
                  setSelected(n)
                }
              }}
            >
              <CaretRightSVG />
            </div>
            <span>
              {selected + 1} of {sire.attributes.pictures.data.length}
            </span>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default SiresDetails
