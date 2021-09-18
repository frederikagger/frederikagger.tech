import Head from 'next/head'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Work from '../components/sections/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio by Frederik Agger</title>
        <meta name='description' content='Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Hero />
        <Work />
        <Skills />
        <Contact />
        <About />
      </div>
    </>
  )
}
