import React from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import {Error} from '../Interface/Error'
import Loading from '../Interface/Loading'
import PhotoContent from './PhotoContent'
import Head from '../Interface/Head'

const Photo = () => {
  const {id} = useParams()  
  const {data, loafing, error, request} = useFetch()

  React.useEffect(()=>{
    const {url, options} = PHOTO_GET(id) 
    request(url, options)
  }, [id, request])

  if (error) return <Error error={error}/>
  if (loafing) return <Loading />
  if (data) 
  return (
    <section className='container mainContainer'>
      <Head title={data.photo.title} description={data.photo.title || `Foto de ${data.photo.author}`} />
      <PhotoContent data={data} single={true} />
    </section>
  )
  else return null
}

export default Photo
