import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';
import Styles from './UserNav.module.css'
import useMedia from '../../Hooks/useMedia';


const UserNav = () => {
    const mobile = useMedia('(max-width: 40rem');
    const {userLogout} = React.useContext(UserContext);
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const {pathname} = useLocation();

    React.useEffect(()=>{
      setMobileMenu(false);
    }, [pathname])

  return (
  <>
    {mobile && (
      <button aria-label='Menu' onClick={()=>setMobileMenu(!mobileMenu)} className={`${Styles.mobileButton} ${mobileMenu && Styles.mobileButtonActive}`}></button>
    )} 
    <nav className={`${mobile ? Styles.navMobile : Styles.nav} ${mobileMenu && Styles.navMobileActive}`}>
      <NavLink to='/conta' end>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to='/conta/postar'>
        <AdicionarFoto />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  </>  
  )
}

export default UserNav
