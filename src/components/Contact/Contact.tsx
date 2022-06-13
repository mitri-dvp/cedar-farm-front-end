import { FC } from 'react'

import styles from './Contact.module.scss'

import Form from '@components/Form'
import { InstagramSVG, PhoneSVG } from '@components/SVG'

const Contact: FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>Contact US</h1>
        <div className={styles.content}>
          <div className={styles.address}>
            <h1>Our Address</h1>
            <p>
              133 Mt Willing Rd, <br />
              Saluda, SC 29138.
            </p>
            <br />
            <h1>Contact Info</h1>
            <div>
              <InstagramSVG />
              <a
                href="https://www.instagram.com/cedarfarmsc/"
                target="_blank"
                rel="noreferrer"
              >
                @cedarfarmsc
              </a>
            </div>
            <div>
              <PhoneSVG />
              <a
                href="https://www.instagram.com/cedarfarmsc/"
                target="_blank"
                rel="noreferrer"
              >
                (201) 555-5555
              </a>
            </div>
          </div>
          <Form />
          <div className={styles.location}>
            <h1>Our Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9967833875926!2d-81.68413194878762!3d33.99261638052716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8658fbde490d3%3A0xcad04cbe8763122!2s133%20Mt%20Willing%20Rd%2C%20Saluda%2C%20SC%2029138%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1655070751234!5m2!1ses!2sco"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
