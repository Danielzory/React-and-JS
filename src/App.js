import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import User from './Components/User/User'
import { Login } from './Components/Login/Login';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Interface/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFount from './Components/NotFount';
import { useLocation } from 'react-router-dom'

function LocationLogger(){
  const location = useLocation()
  React.useEffect(()=>{
    console.debug('Route change', { pathname: location.pathname, search: location.search })
  }, [location])
  return null
}

function App(){

    return (
    <>
        <div>
            <BrowserRouter>
            <UserStorage>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login/*" element={<Login />}/>
                    <Route path="conta/*" element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    }
                />
                <Route path="foto/:id" element={<Photo />}/>
                <Route path="perfil/:user" element={<UserProfile />}/>
                <Route path="*" element={<NotFount />}/>
                </Routes>
                <Footer />
            </UserStorage> 
            </BrowserRouter> 
        </div>
    
    </>
    )
}

export {App}