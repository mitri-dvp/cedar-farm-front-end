import { ReactNode, FC } from 'react'
import Footer from '@components/Footer'
import Header from '@components/Header'

import styles from './Layout.module.scss'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main className={styles.container}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
