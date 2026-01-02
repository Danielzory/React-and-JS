import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import { Error } from '../Interface/Error'
import Styles from './LoginForm.module.css'
import StylesBtn from '../Form/Button.module.css'
import Head from '../Interface/Head'

const LoginForm = () => {
    
    //hooks
    const username = useForm() //é possível restringir o tipo de input passando como parametro, ex: 'email' - Observar lógica no useForm
    const password = useForm()

    //context
    
    const{userLogin, error, loading} = React.useContext(UserContext)
    
    //Submit
    async function handleSubmit (event) {
        event.preventDefault()

        if(username.validate && password.validate){
            userLogin(username.value, password.value)
        }  
    }

    return (
        <section className='animeLeft'>
            <Head title="Login" description="Faça login para acessar sua conta" />
            <h1 className='title'>Login</h1>
            <form className={Styles.form} onSubmit={handleSubmit}>

                <Input label='Usuário' type='text' name='username' {...username}/>
                <Input label='Senha' type='password' name='password' {...password} />
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ):(
                    <Button>Entrar</Button>
                )}
                
                <Error error={error} />
            
            </form>
            <Link className = {Styles.lost}to='/login/perdeu'>Esqueceu a Senha?</Link>

            <div className={Styles.register}>
                <h2 className={Styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={StylesBtn.button} to='/login/criar'>Cadastro</Link>
            </div>
            
        </section>
    )
}

export {LoginForm}