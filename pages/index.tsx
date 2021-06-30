import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio by Frederik Agger</title>
        <meta name='description' content='Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='css-selector'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 min-h-screen'>
          <div className='absolute max-w-sm text-darkred leading-10 text-3xl left-4 sm:left-6 top-1/3 sm:top-1/2 transform-gpu -translate-y-1/2'>
            Hi
            <div className='animate-wave inline-block'>👋</div>, I’m{' '}
            <span className='font-extrabold'>Frederik Agger</span>. <br />
            I’m a <span className='font-extrabold'>developer</span> based in{' '}
            <br />
            <span className='font-extrabold'>Copenhagen</span>.
          </div>
        </div>
      </section>
      <section id='about' className='bg-white'>
        <div className='relative top-16 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen'>
          <h1 className='mb-3'>ABOUT ME</h1>
          <p className='text-base sm:text-lg'>
            I'm currently employed at{' '}
            <a
              target='_blank'
              href='http://woodsense.dk'
              className='hover:text-darkred font-bold'
              rel='noreferrer'
            >
              Woodsense
            </a>{' '}
            where I'm a frontend developer. Woodsense is a green startup that is
            working on making the construction industry greener by reducing
            waste.
            <br />
            <br />
            When I'm not working as a frontend developer, I enjoy taking my dog
            to the dogpark, drinking coffe around Copenhagen and reading the
            newspaper on my balcony. I'm a big dogperson.
            <br />
          </p>
        </div>
      </section>
      <section id='skills' className='bg-darkgrey'>
        <div className='relative top-16 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen'>
          <h1 className='mb-3'>SKILLS</h1>
          <p className='text-base sm:text-lg'>
            Here are a few of the technologies I work with and have worked with
            recently:
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Vue</li>
              <li>Node</li>
            </ul>
          </p>
        </div>
      </section>
      <section id='contact'>
        <div className='relative top-16 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen'>
          <h1>CONTACT</h1>
        </div>
      </section>
    </>
  )
}
