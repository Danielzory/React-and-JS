import React from 'react'
import { LoginForm } from './LoginForm'
import {LoginCreate} from './LoginCreate'
import { PasswordReset } from './PasswordReset'
import {PasswordLost} from './PasswordLost'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const Login = () =>{
    const {login} = React.useContext(UserContext);

    if(login === true) return <Navigate to="/conta" />

    return(
        <div>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='criar' element={<LoginCreate />} />
                <Route path='perdeu' element={<PasswordLost />} />
                <Route path='resetar' element={<PasswordReset />} />
            </Routes>
        </div>
    )
}

export {Login}