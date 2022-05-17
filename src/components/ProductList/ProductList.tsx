import { FC } from 'react'
import ProductCard from './ProductCard'

import styles from './ProductList.module.scss'

const ProductList: FC<{ title: string; products: Sire[] | Sire[] }> = ({
  title,
  products
}) => {
  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
