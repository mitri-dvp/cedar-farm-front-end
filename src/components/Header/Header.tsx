import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Header.module.scss'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header className={styles.container}>
      <nav className={styles.body}>
        <Link href="/">
          <a className={pathname === '/' ? styles.active : ''}>Home</a>
        </Link>
        <Link href="/about">
          <a className={pathname === '/about' ? styles.active : ''}>About</a>
        </Link>
        <Link href="/cart">
          <a className={pathname === '/contact' ? styles.active : ''}>
            Contact
          </a>
        </Link>
      </nav>
    </header>
  )
}
