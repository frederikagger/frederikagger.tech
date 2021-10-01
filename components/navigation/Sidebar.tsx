import React from 'react'

import { HeaderLinksData } from '../../data/HeaderLinksData'

const Sidebar: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className='absolute top-0 bg-darkgrey h-screen inset-0 md:hidden'>
      <nav className='grid mx-auto mt-48 justify-center gap-y-12'>
        {HeaderLinksData.map(link => (
          <a
            key={link.href}
            onClick={onClick}
            href={link.href}
            className='text-darkred text-3xl uppercase cursor-pointer'
          >
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
