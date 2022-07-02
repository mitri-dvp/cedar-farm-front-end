import { CloseSVG } from '@components/SVG'
import { ReactNode, useEffect } from 'react'

import styles from './Modal.module.scss'

const Modal: React.FC<{
  show: boolean
  onHide: () => void
  children: ReactNode
}> = ({ show, onHide, children }) => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.code === 'Escape') onHide()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>
      {show ? (
        <div
          className={styles.container}
          id="modal-container"
          onClick={e => {
            if ((e.target as HTMLDivElement).id === 'modal-container') {
              onHide()
            }
          }}
        >
          <div className={styles.content}>
            <div onClick={onHide} className={styles.close_button}>
              <CloseSVG />
            </div>
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Modal
