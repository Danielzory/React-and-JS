import React from "react";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { useForm } from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { Error } from "../Interface/Error";
import { PASSWORD_RESET } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../Interface/Head";

const PasswordReset = () =>{
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const password = useForm();
    const {loading, error, request} = useFetch();
    const navigate = useNavigate()

    React.useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        if (key) setKey(key);
        const login = params.get('login');
        if (login) setLogin(login);
    },[])

     async function handleSubmit(event){
        event.preventDefault();
        if(password.validate()){
            const {url, options} = PASSWORD_RESET({
                login,
                key,
                password: password.value
            });
            const {response} = await request (url, options);
            if(response.ok) navigate('/login')
        }
     }
        
    return(
        <div>
            <Head title="Resetar Senha" description="Redefina sua senha no Road" />
            <h1 className="title">Resetar Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="password" name="password" {...password} />
                {loading ? ( <Button disabled>Resetando...</Button> ) : ( <Button>Resetar</Button> )}
            </form>
            <Error error={error} />
        </div>
    )
}

export {PasswordReset}