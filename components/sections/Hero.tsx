export default function Hero() {
  return (
    <section className='relative mx-auto px-4 sm:px-6'>
      <div className='absolute max-w-sm text-darkred leading-10 text-3xl top-1/2 transform-gpu -translate-y-1/2'>
        Hi
        <div className='animate-wave inline-block'>👋</div>, I’m{' '}
        <span className='font-extrabold'>Frederik Agger</span>. <br />
        I’m a <span className='font-extrabold'>developer</span> based in <br />
        <span className='font-extrabold'>Copenhagen</span>.
      </div>
    </section>
  )
}
