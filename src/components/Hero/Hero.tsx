import Image from 'next/image'

import styles from './Hero.module.scss'

const defaultFeaturesList = [
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/sires/indy_sm.jpg',
    name: 'Steve',
    type: 'Sires'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/01.jpg',
    name: 'Steve',
    type: 'Rams'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/08-02-19/Untitled-1.png',
    name: 'Steve',
    type: 'Ewes'
  },
  {
    id: new Date().toString(),
    image: 'https://kjhdorpersheep.com/images/2019/1910.jpg',
    name: 'Steve',
    type: 'Sheep'
  }
]

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Registered Dorper Sheep & Lamb</h1>
        <div className={styles.featured_list}>
          {defaultFeaturesList.map(entry => (
            <div key={entry.id} className={styles.entry}>
              <Image
                src={entry.image}
                layout="responsive"
                width={0}
                height={0}
                objectFit="cover"
              />
              <h1>{entry.name}</h1>
              <p>{entry.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Hero
