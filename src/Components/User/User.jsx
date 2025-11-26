import React from 'react'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost';
import UserStatistics from './UserStatistics';
import {Routes, Route} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import NotFount from '../NotFount';

const User = () => {
  const {data} = React.useContext(UserContext);

  return (
    <section className='container'>
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
