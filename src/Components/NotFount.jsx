import React from 'react'
import Head from './Interface/Head'

const NotFount = () => {
  console.debug('NotFount render')
  return (
    <div className='container mainContainer'>
        <Head title="404" description="Página não encontrada" />
        <h1 className='title'>Erro: 404</h1>
        <p>Página não encontrada</p>
      
    </div>
  )
}

export default NotFount 
