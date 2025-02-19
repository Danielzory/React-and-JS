import React from 'react'
import { LoginForm } from './LoginForm'
import {LoginCreate} from './LoginCreate'
import { PasswordReset } from './PasswordReset'
import {PasswordLost} from './PasswordLost'
import { Routes, Route, Navigate} from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Styles from './Login.module.css'

const Login = () =>{
    const {login} = React.useContext(UserContext);

    if(login === true) return <Navigate to="/conta" />

    return(
        <section className={Styles.login}>
            <div className={Styles.forms}>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='criar' element={<LoginCreate />} />
                    <Route path='perdeu' element={<PasswordLost />} />
                    <Route path='resetar' element={<PasswordReset />} />
                </Routes>
            </div>
        </section>
    )
}

export {Login}