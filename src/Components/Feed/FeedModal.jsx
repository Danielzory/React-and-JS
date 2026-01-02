import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import { Error } from '../Interface/Error'
import Loading from '../Interface/Loading'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(()=> {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options)
  }, [photo, request])

  function handlerOutsideClick (event) {
    if (event.target === event.currentTarget) setModalPhoto(null)
    
  }

  return (
    <div className={styles.modal} onClick={handlerOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />} 
      
    </div>
  )
}

export default FeedModal
