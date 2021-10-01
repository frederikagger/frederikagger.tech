import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { HeaderLinksData } from '../../data/HeaderLinksData'
import Sidebar from './Sidebar'

export default function Header() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  const toggleSidebar = () =>
    setIsSideBarVisible(isSideBarVisible => !isSideBarVisible)

  return (
    <div className='sticky top-0 z-50 bg-darkgrey shadow-lg'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center py-4 sm:py-6 md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#' className='text-darkred text-xl font-extrabold'>
              FA
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              onClick={toggleSidebar}
              type='button'
              className='rounded-md absolute top-2 right-2 z-50 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='#db2777'
                viewBox='0 0 24 24'
                stroke='#db2777'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='square'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden sm:flex space-x-14'>
            {HeaderLinksData.map(link => (
              <a
                key={link.href}
                className='text-darkred text-xl uppercase'
                href={link.href}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <CSSTransition
        in={isSideBarVisible}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames='animateSidebar'
      >
        <Sidebar onClick={toggleSidebar} />
      </CSSTransition>
    </div>
  )
}
