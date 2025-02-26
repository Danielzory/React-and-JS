import React from 'react'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost';
import UserStatistics from './UserStatistics';
import {Routes, Route} from 'react-router-dom';

const USer = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path= '/' element={<Feed />} />
        <Route path= 'postar' element={<UserPhotoPost />} />
        <Route path= 'estatisticas' element={<UserStatistics />} />
      </Routes>
    </section>
  )
}

export default USer
