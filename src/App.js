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
                    <Route path="acount/*" element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    }
                />
                </Routes>
                <Footer />
            </UserStorage> 
            </BrowserRouter> 
        </div>
    
    </>
    )
}

export {App}