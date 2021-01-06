import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Richie Shi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Intro/>

    </div>
  )
}
