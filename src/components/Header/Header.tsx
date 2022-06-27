import { useState } from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'
import Image from 'next/image'

const Header: React.FC = () => {
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
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sires">
              <a>Sires</a>
            </Link>
          </li>
          <li className={styles.dropdown}>
            <button
              onClick={() => setShowDropdownList(true)}
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
                  <Link href="/sheeps/commercial-sheeps">
                    <a>Commercial</a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/angus-cows">
              <a>Angus Cows</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
