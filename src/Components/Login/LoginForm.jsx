import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
import { TOKEN_POST } from '../../api'

const LoginForm = () => {
    
    //hooks
    const username = useForm('email') //é possível restringir o tipo de input passando como parametro, ex: 'email' - Observar lógica no useForm
    const password = useForm()

    async function getUser(token) {

    }

    //Submit
    async function handleSubmit (event) {
        event.preventDefault()

        if(username.validadte && password.validadte){

            const {url, options} = TOKEN_POST({
                username: username.value,
                password: password.value,
            });

            const response = await fetch (url,options);
            const json = await response.json();
            //enviar json.token para o local storage
            window.localStorage.setItem('token', json.token)
            getUser(json.token)
        }  
    }

    return (
        <section>
            <h1>Login</h1>
            <form action='' onSubmit={handleSubmit}>

                <Input label='Usuário' type='text' name='username' {...username}/>
                <Input label='Senha' type='password' name='password' {...password} />
                <Button>Entrar</Button>
            
            </form>
            <Link to='/login/criar'>Cadastro</Link>
        </section>
    )
}

export {LoginForm}