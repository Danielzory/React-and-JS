import { Input } from '../Form/Input'
import { Button } from '../Form/Button'
import { useForm } from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { Error } from '../Interface/Error'
import { PASSWORD_LOST } from '../../api'

const PasswordLost = () => {

  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: 'http://localhost:3000/login/resetar',
      });
      await request(url, options);
    }
  }

  return (
    <section>
      <h1 className='title'>Perdeu a Senha?</h1>

      {data ? (
        <p style={{ color: '#4ca' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuário" type='text' name='email' {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export { PasswordLost };