import React from 'react'
import { UserContext } from '../../UserContext'
import Head from '../Interface/Head'

const UserStatistics = () => {
  const { data } = React.useContext(UserContext)
  const title = data ? "Estatísticas" : 'Estatísticas do Usuário'
  const description = data ? `Estatísticas da conta de ${data.nome}` : 'Veja as estatísticas da sua conta'

  return (
    <div>
      <Head title={title} description={description} />
      Estatisticas
    </div>
  )
}

export default UserStatistics
