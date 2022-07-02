import { InstagramSVG } from '@components/SVG'
import Image from 'next/image'

import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div>
        <div className={styles.content}>
          <div className={styles.logos}>
            <a
              href="https://dorpersheep.org/"
              target={'_blank'}
              rel="noreferrer"
            >
              <Image
                src={'/white-dorpers-logo.png'}
                width={148}
                height={100}
                alt="white-dorpers-logo"
              />
            </a>
            <a href="https://4h.ucanr.edu/" target={'_blank'} rel="noreferrer">
              <Image
                src={'/4h-emblem.svg'}
                width={100}
                height={100}
                alt="4h-emblem"
              />
            </a>
          </div>
          <div className={styles.contact}>
            <h1>Contact Info</h1>
            <div>
              <a
                href="https://www.instagram.com/cedarfarmsc/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramSVG />
                @cedarfarmsc
              </a>
            </div>
          </div>
          <div className={styles.address}>
            <h1>Our Address</h1>
            133 Mt Willing Rd, <br />
            Saluda, SC 29138.
          </div>
        </div>
        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Cedar Farm. All rights reserved.
          Raised with Care and Integrity.
        </div>
      </div>
    </footer>
  )
}

export default Footer
