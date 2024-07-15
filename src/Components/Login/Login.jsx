import React from 'react'
import { LoginForm } from './LoginForm'
import {LoginCreate} from './LoginCreate'
import { PasswordReset } from './PasswordReset'
import {PasswordLost} from './PasswordLost'
import { Routes, Route } from 'react-router-dom'

const Login = () =>{
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