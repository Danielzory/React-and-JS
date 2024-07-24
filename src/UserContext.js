import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    //função recebe token, recupera dados do usuário e seta em data, seta login como true
    async function getUser(token) {
        const {url, options} = USER_GET({token});
        const response = await fetch(url, options); 
        const json = await response.json();

        setData(json);
        setLogin(true);
    }


    //função recebe login e senha, recupera o token, add o token no local stora e mandda o token pro getUser
    async function userLogin (username, password) {
        const {url, options} = TOKEN_POST({username, password});
        const tokenRes = await fetch(url, options);
        const {token} = await tokenRes.json();
        window.localStorage.setItem('token', token);
        getUser(token)
    }

    return(

        <UserContext.Provider value={{ userLogin, data }}>
            {children}
        </UserContext.Provider>
    )       

}

export {UserStorage}