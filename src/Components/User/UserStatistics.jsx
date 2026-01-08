import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Head from '../Interface/Head'
import { GET_STATISTICS } from '../../api'
import Loading from '../Interface/Loading'
import {Error} from '../Interface/Error'
import UserStatisticsGraphs from './UserStatisticsGraphs'

const UserStatistics = () => {
  
  const title =  "Estatísticas"
  const description = "Veja suas estatísticas de uso do site"

  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function getData() {
      const {url, options} = GET_STATISTICS()
      await request(url, options)
    }
    getData()
    }, [request])

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data)
  return (
    <div>
      <Head title={title} description={description} />
      <UserStatisticsGraphs data={data} />
    </div>
  )
  else return null
}

export default UserStatistics
