import { useState } from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'
import Image from 'next/image'
import { ListSVG } from '@components/SVG'

const Header: React.FC = () => {
  const [showDropdownList, setShowDropdownList] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <header className={styles.container}>
      <nav className={styles.desktop_nav}>
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

      <nav className={styles.mobile_nav}>
        <li className={styles.logo}>
          <Image
            src={'/logo.png'}
            width={100}
            height={100}
            alt="cedar-farm-logo"
          />
        </li>
        <div>
          <div
            onClick={() => {
              setShowMobileNav(!showMobileNav)
              setShowDropdownList(false)
            }}
          >
            <ListSVG />
          </div>
          {showMobileNav && (
            <ul className={styles.mobile_list}>
              <li>
                <Link href="/">
                  <a
                    onClick={() => {
                      setShowMobileNav(false)
                    }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sires">
                  <a
                    onClick={() => {
                      setShowMobileNav(false)
                    }}
                  >
                    Sires
                  </a>
                </Link>
              </li>
              <li className={styles.dropdown}>
                <button onClick={() => setShowDropdownList(!showDropdownList)}>
                  Sheeps For Sale
                </button>
                {showDropdownList && (
                  <ul
                    onMouseEnter={() => setShowDropdownList(true)}
                    onMouseLeave={() => setShowDropdownList(false)}
                  >
                    <li>
                      <Link href="/sheeps/rams">
                        <a
                          onClick={() => {
                            setShowMobileNav(false)
                          }}
                        >
                          Rams
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sheeps/ewes">
                        <a
                          onClick={() => {
                            setShowMobileNav(false)
                          }}
                        >
                          Ewes
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sheeps/commercial-sheeps">
                        <a
                          onClick={() => {
                            setShowMobileNav(false)
                          }}
                        >
                          Commercial
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/angus-cows">
                  <a
                    onClick={() => {
                      setShowMobileNav(false)
                    }}
                  >
                    Angus Cows
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a
                    onClick={() => {
                      setShowMobileNav(false)
                    }}
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
