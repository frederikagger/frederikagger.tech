import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className='py-4 text-center'>
      <div className='flex justify-center gap-9 mx-auto text-center my-10'>
        <SocialIcon
          bgColor='#DB2777'
          fgColor='#111827'
          url='https://www.linkedin.com/in/frederik-agger-5351b0195/'
        />
        <SocialIcon
          bgColor='#DB2777'
          fgColor='#111827'
          url='https://twitter.com/frederik_agger'
        />
        <SocialIcon
          bgColor='#DB2777'
          fgColor='#111827'
          url='https://www.facebook.com/frederik.agger.1'
        />
      </div>
      <p className='text-sm font-light opacity-80'>
        © 2021 Frederik Agger. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
