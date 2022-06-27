import { useState, FC } from 'react'

import styles from './Form.module.scss'

const Form: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <form className={styles.container}>
      <div>
        <label>
          <span>Name:</span>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Message:</span>
          <textarea
            cols={30}
            rows={10}
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </label>
      </div>
      <button>Send</button>
    </form>
  )
}

export default Form
