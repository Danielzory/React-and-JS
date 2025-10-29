import React from 'react'
import styles from './Loading.module.css'
import loading from '../../Assets/loading.svg'

const Loading = () => {
  return (
    <div className={styles.wrapper  }>
      <div className={styles.loading}>
        <img src={loading} alt="Loading" />
      </div>
    </div>
  )
}

export default Loading
