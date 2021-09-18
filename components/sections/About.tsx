export default function About() {
  return (
    <section id='about' className='mx-auto px-4 sm:px-6'>
      <h1 className='mb-3 pt-16 md:pt-24'>ABOUT ME</h1>
      <p className='leading-loose'>
        {"I'm"} very passionate about technology and webdesign. I like to learn
        and dream.
      </p>
      <p className='leading-loose mt-8'>
        currently employed at{' '}
        <a
          target='_blank'
          className='font-bold'
          href='http://woodsense.dk'
          rel='noreferrer'
        >
          Woodsense
        </a>{' '}
        where {"I'm"} working as a frontend developer. Woodsense is a green
        startup that is working on making the construction industry greener by
        reducing waste wood constructions. You can read more about Woodsense{' '}
        <a
          target='_blank'
          className='font-bold'
          href='http://woodsense.dk'
          rel='noreferrer'
        >
          here
        </a>
        .
      </p>

      <p className='mt-8 leading-loose'>
        When {"I'm"} not working as a developer, I enjoy taking my dog to the
        dogpark, drinking coffe around Copenhagen and reading the newspaper on
        my balcony. {"I'm"} a big dogperson.
        <br />
      </p>
    </section>
  )
}
