import React from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../Feed/Feed';
import Head from '../Interface/Head';

const UserProfile = () => {

    const { user } = useParams();
    const { data } = React.useContext(UserContext);
    const username = user || (data && data.username) || ''
    console.debug('UserProfile render', { user, username, userData: data })
  return (
    <section className="container mainContainer">
      <Head title={username} description={username ? `Perfil de ${username}` : ''} />
        <h1 className='title'>{username || 'Perfil'}</h1>
      <Feed user={username} />
    </section>
  )
}

export default UserProfile
