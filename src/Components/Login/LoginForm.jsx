import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'

const LoginForm = () =>{
    
    //hooks
    const username = useForm('email') //é possível restringir o tipo de input passando como parametro, ex: 'email' - Observar lógica no useForm
    const password = useForm()

    //Submit
    const handleSubmit = (event) => {
        event.preventDefault()

        if(username.validadte && password.validadte){
            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(),
            }).then((response) => {
                console.log(response);
                return response.json();
            }).then(json => {
                console.log(json)
            });
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