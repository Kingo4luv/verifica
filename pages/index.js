import Head from 'next/head'
import Client from '../components/home/clients'
import Headers from '../components/home/HeaderContainer'
import Feature from '../components/home/Feature'

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Verifica Test </title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <div className="px-4 lg:px-12 xl:px-32 w-full">
        <Headers/>
        <Client/>
        <Feature/>
      </div>

    </div>
  )
}
