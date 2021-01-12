import Head from 'next/head'
import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Richie Shi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Intro/>
      <hr className='intro-break'/>
      <AboutMe/>
    </div>
  )
}
