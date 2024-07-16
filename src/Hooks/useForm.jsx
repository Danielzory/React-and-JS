import React from "react";

const types = {
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        ,
        message: 'Preencha um e-mail válido'
    },
};

const useForm = (type) => {                                       //type será informado como parametro

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function validadte (value){
        if (type === false) return true
        if (value.length === 0){
            setError('Preencha um valor')
            return false
        }else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        }else{
            setError(null)
            return true
        }
    }

    function onChange ({target}) {

        if(error) validadte(target.value)
        setValue(target.value) //value passa a ser o valor target do evento
        
    }


    return {
        //exportando variáveis e funções
        value,
        setValue,
        onChange,
        error,
        validadte: () => validadte (value),
        onBlur: () => validadte (value),
    }
}

export {useForm}