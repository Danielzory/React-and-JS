import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import { Error } from '../Interface/Error'

const LoginForm = () => {
    
    //hooks
    const username = useForm() //é possível restringir o tipo de input passando como parametro, ex: 'email' - Observar lógica no useForm
    const password = useForm()

    //context
    
    const{userLogin, error, loading} = React.useContext(UserContext)
    
    //Submit
    async function handleSubmit (event) {
        event.preventDefault()

        if(username.validadte && password.validadte){
            userLogin(username.value, password.value)
        }  
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Login</h1>
            <form action='' onSubmit={handleSubmit}>

                <Input label='Usuário' type='text' name='username' {...username}/>
                <Input label='Senha' type='password' name='password' {...password} />
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ):(
                    <Button>Entrar</Button>
                )}
                
                {error && <p>{error}</p>}
            
            </form>
            <Link to='/login/criar'>Cadastro</Link>
        </section>
    )
}

export {LoginForm}