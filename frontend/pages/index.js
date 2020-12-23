import Head from 'next/head'
import Link from 'next/link'

import axios from './axios/api'
import Loja from './loja/loja'
export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Loja/>
      {/** <button type="submit" onClick={handle}>Enviar</button>*/} 
      </main>
    </div>
  )
}
