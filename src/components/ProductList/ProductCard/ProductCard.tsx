import Image from 'next/image'
import { FC } from 'react'

import styles from './ProductCard.module.scss'

const ProductCard: FC<{ product: Sire }> = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        layout="responsive"
        width={0}
        height={0}
        objectFit="cover"
      />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductCard
