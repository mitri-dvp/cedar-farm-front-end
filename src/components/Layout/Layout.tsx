import { ReactNode } from 'react'
import Footer from '@components/Footer'
import Header from '@components/Header'

import styles from './Layout.module.scss'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
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
