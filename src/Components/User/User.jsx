import React from 'react'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost';
import UserStatistics from './UserStatistics';
import {Routes, Route} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import NotFount from '../NotFount';
import Head from '../Interface/Head'

const User = () => {
  const {data} = React.useContext(UserContext);

  return (
    <section className='container'>
      <Head title={data ? data.nome : 'Minha Conta'} description={data ? `Conta de ${data.nome}` : ''} />
      <UserHeader />
      <Routes>
        <Route path= '/' element={<Feed user={data.id} />} />
        <Route path= 'postar' element={<UserPhotoPost />} />
        <Route path= 'estatisticas' element={<UserStatistics />} />
        <Route path="*" element={<NotFount />}/>
      </Routes>
    </section>
  )
}

export default User
