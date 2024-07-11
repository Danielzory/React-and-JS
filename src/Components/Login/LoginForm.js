import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () =>{
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password }),
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json)
        });

    }

    return(
        <section>
            <h1>Login</h1>
            <form action='' onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={userName}
                    onChange={({target}) => setUserName(target.value)} />
                    <input 
                    type='text'
                    value={password}
                    onChange={({target}) => setPassword(target.value)} />
                    <button>Entrar</button>
            </form>
            <Link to='/login/criar'>Cadastro</Link>
        </section>
    )
}

export {LoginForm}