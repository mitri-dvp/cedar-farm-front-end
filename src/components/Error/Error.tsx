import Link from 'next/link'


import styles from './Error.module.scss'

const Error: React.FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.card}>
          <h1>404 - Page Not Found</h1>
          <Link href={'/'}>
            <a>Go To Homepage</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error
