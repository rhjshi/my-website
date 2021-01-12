import Head from 'next/head'
import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Richie Shi</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      </Head>
      
      <Intro/>
      <hr className='intro-break'/>
      <AboutMe/>
    </div>
  )
}
