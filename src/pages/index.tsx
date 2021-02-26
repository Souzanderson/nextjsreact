import React from 'react'
import Head from 'next/head'

import Logo from '../assets/images/logocontrast.svg'
import {Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Malbizer</title>
      </Head>

      <img src={Logo} className="logo"></img>
      <h1>BI | Data Science | IoT | Mobile | Web</h1>
      <p> Conheça a Malbizer Soluções, empresa de software e tecnologia.</p>
    </Container>
  )
}

export default Home
