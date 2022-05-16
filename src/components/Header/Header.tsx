import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Header.module.scss'
import Image from 'next/image'

export default function Header() {
  const { pathname } = useRouter()

  const [showDropdownList, setShowDropdownList] = useState(false)

  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.main_list}>
          <li className={styles.logo}>
            <Image
              src={'/logo.png'}
              width={100}
              height={100}
              alt="cedar-farm-logo"
            />
          </li>
          <li>
            <Link href="/">
              <a className={pathname === '/' ? styles.active : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={pathname === '/sires' ? styles.active : ''}>
                Sires
              </a>
            </Link>
          </li>
          <li className={styles.dropdown}>
            <button
              className={pathname.includes('/sheeps') ? styles.active : ''}
              onClick={() => setShowDropdownList(!showDropdownList)}
              onMouseEnter={() => setShowDropdownList(true)}
              onMouseLeave={() => setShowDropdownList(false)}
            >
              Sheeps For Sale
            </button>
            {showDropdownList && (
              <ul
                onMouseEnter={() => setShowDropdownList(true)}
                onMouseLeave={() => setShowDropdownList(false)}
              >
                <li>
                  <Link href="/sheeps/rams">
                    <a>Rams</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sheeps/ewes">
                    <a>Ewes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sheeps/commercial">
                    <a>Commercial</a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about">
              <a>Angus Cows</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
