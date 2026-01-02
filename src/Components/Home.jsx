import React from 'react'
import Feed from './Feed/Feed'
import Head from './Interface/Head'

const Home = () => {
    console.debug('Home render')
    return (
    <section className='container mainContainer'>
        <Head title="Home" description="Home do ROAD" />
        <Feed />
    </section>
    )

}

export {Home}