import { FormEvent, useState } from 'react'

import styles from './Form.module.scss'

const Form: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const validateInput = (input: string) => {
    switch (input) {
      case 'name':
        if (name === '') {
          return 'Please enter the name'
        }
        return ''
      case 'email':
        if (email === '') {
          return 'Please enter the email'
        }
        if (
          !email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          return 'Please enter a valid email'
        }
        return ''
      case 'phone':
        if (phone === '') {
          return 'Please enter the phone'
        }
        return ''
      case 'message':
        if (message === '') {
          return 'Please enter the message'
        }
        return ''
      default:
        return ''
    }
  }

  const validateForm = () => {
    let isValid = true
    const _errors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }

    _errors.name = validateInput('name')
    _errors.email = validateInput('email')
    _errors.message = validateInput('message')

    for (let i = 0; i < Object.values(_errors).length; i++) {
      const error = Object.values(_errors)[i]
      if (error !== '') isValid = false
    }
    setErrors(_errors)
    return isValid
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (loading || success) return
    if (validateForm() === false) return
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/`, {
        method: 'POST',
        headers: [['Content-Type', ' application/json']],
        body: JSON.stringify({
          template: 'contactForm',
          name: name,
          email: email,
          phone: phone,
          message: message
        })
      })
      if (res.status === 200) setSuccess(true)
    } catch (error) {
      console.log('ERROR', error)
    }
    setLoading(false)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div>
        <label>
          <span>Name:</span>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
            onBlur={() => {
              setErrors({
                ...errors,
                name: validateInput('name')
              })
            }}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
            onBlur={() => {
              setErrors({
                ...errors,
                email: validateInput('email')
              })
            }}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <label>
          <span>Phone:</span>
          <input
            type="text"
            onChange={e => setPhone(e.target.value)}
            value={phone}
            onBlur={() => {
              setErrors({
                ...errors,
                phone: validateInput('phone')
              })
            }}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </label>
        <label>
          <span>Message:</span>
          <textarea
            cols={30}
            rows={10}
            value={message}
            onChange={e => setMessage(e.target.value)}
            onBlur={() => {
              setErrors({
                ...errors,
                message: validateInput('message')
              })
            }}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </label>
      </div>
      <button>
        {!loading && !success && 'Send'}
        {loading && '•••'}
        {success && 'Email Sent'}
      </button>
    </form>
  )
}

export default Form
