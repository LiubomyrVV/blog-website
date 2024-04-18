import styles from './background.module.css'
import { ReactComponent as Vector } from './Vector.svg'

export const Background = ({ children }) => {

  return (
    <div className={styles.background}>
      <div className={styles.vectorContainer}><Vector /></div>

      {children}

      <div className={styles.vectorContainer}><Vector /></div>
    </div>
  )
}
