const About = () => {
  return (
    <section id='about' className='mx-auto px-4 sm:px-6'>
      <h1 className='mb-3 pt-24'>ABOUT</h1>
      <p className='leading-loose'>
        I live in Nørrebro in Copenhagen with my girlfriend and our Yorkie
        Arnold 👩‍❤️‍👨🐶
      </p>
      <p>
        I have a lot of interests. The primary being technology, music and
        politics.
      </p>
      <p className='leading-loose mt-8'>
        {"I'm"} currently employed at{' '}
        <a
          target='_blank'
          className='font-bold hover:text-blue'
          href='http://woodsense.dk'
          rel='noreferrer'
        >
          Woodsense
        </a>{' '}
        where {"I'm"} working as a frontend developer.
      </p>

      <p className='mt-8 leading-loose'>
        If you have any questions or just want to get in touch feel free to drop
        me a message!
        <br />
      </p>
    </section>
  )
}

export default About
