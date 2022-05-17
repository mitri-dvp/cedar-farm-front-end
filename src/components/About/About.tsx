import React, { FC } from 'react'

import styles from './About.module.scss'

const About: FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.card}>
          <h1>About US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            facere eos? Sint tempora quia quibusdam sequi consequatur
            consectetur dicta ullam rerum laudantium eaque sed corrupti quaerat,
            deleniti fugit est odit. Vel ratione debitis beatae, expedita
            architecto temporibus consequatur sunt id porro vero eum blanditiis
            ducimus praesentium amet magni saepe nostrum quae reprehenderit
            asperiores assumenda, nam dolorem. Repellat iure nihil debitis.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
