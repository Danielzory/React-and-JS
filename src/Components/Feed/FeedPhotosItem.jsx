import React from 'react'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({photo}) => {
  return (
    <li className={styles.photos}>
      <img src={photo.src} alt={photo.title}/>
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
