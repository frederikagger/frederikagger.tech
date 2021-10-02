export default function About() {
  return (
    <section id='about' className='mx-auto px-4 sm:px-6'>
      <h1 className='mb-3 pt-24'>ABOUT</h1>
      <p className='leading-loose'>
        I live in Nørrebro in Copenhagen with my girlfriend and our beautiful
        Yorkie Arnold 👩‍❤️‍👨🐶
      </p>
      <br />
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
        where {"I'm"} working as a frontend developer. Woodsense is a green
        startup that is working on making the construction industry greener by
        reducing waste in wood constructions. You can read more about Woodsense{' '}
        <a
          target='_blank'
          className='font-bold hover:text-blue'
          href='http://woodsense.dk'
          rel='noreferrer'
        >
          here
        </a>
        .
      </p>

      <p className='mt-8 leading-loose'>
        When {"I'm"} not working as a developer, I enjoy taking my dog to the
        park or walk around Copenhagen while enjoying a cup of coffee. I like
        being out in nature and explore.
        <br />
      </p>
    </section>
  )
}
