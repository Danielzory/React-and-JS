import React from 'react'
import UserNav from './UserNav'
import Styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitlhe] = React.useState('');
  const location = useLocation();

  React.useEffect(()=>{
    const {pathname} = location;
    switch (pathname) {
        case '/conta/postar':
            setTitlhe("Poste Sua Foto")
            break;
        case '/conta/estatisticas':
            setTitlhe("Estatísticas")
            break;
        default:
            setTitlhe('Minha conta')    
            break; 
    }
  },[location])

  return (
    <header className={Styles.header}>
      <h1 className='title'>{title}</h1>
      <UserNav />
    </header>
  )
}

export default UserHeader
