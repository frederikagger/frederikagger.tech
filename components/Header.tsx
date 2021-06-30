import { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const node = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside: (e: Event) => void = e => {
      if (node.current && !node.current.contains(e.target as Element)) {
        console.log('click')
        setIsMobileDropdownOpen(!isMobileDropdownOpen) // outside click
      }
    }

    isMobileDropdownOpen
      ? document.addEventListener('click', handleClickOutside)
      : document.removeEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileDropdownOpen])

  return (
    <div className='sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center py-4 sm:py-6 md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#' className='text-darkred text-xl font-extrabold'>
              FA
            </a>
          </div>
          <div className='-mr-2 -my-2 sm:hidden'>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              type='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden sm:flex space-x-14'>
            <a href='#about' className='text-darkred text-xl uppercase'>
              ABOUT
            </a>
            <a href='#skills' className='text-darkred text-xl uppercase'>
              SKILLS
            </a>
            <a href='#contact' className='text-darkred text-xl uppercase'>
              CONTACT
            </a>
          </nav>
        </div>
      </div>
      {/* 
  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
      {isMobileDropdownOpen && (
        <div
          ref={node}
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg bg-white'>
            <div className='pt-3 pb-6 px-5'>
              <div className='absolute right-2 top-2'>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                >
                  <span className='sr-only'>Close menu</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              {/* <nav className='grid gap-y-4'>
                <a
                  href='#about'
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className='text-darkred text-lg uppercase cursor-pointer'
                >
                  ABOUT
                </a>
                <a
                  href='#skills'
                  onClick={() => {
                    console.log('hello')
                    setIsMobileDropdownOpen(!isMobileDropdownOpen)
                  }}
                  className='text-darkred text-lg uppercase cursor-pointer'
                >
                  SKILLS
                </a>
                <a
                  href='#contact'
                  onClick={() => {
                    console.log('hello')
                    setIsMobileDropdownOpen(!isMobileDropdownOpen)
                  }}
                  className='text-darkred text-lg uppercase cursor-pointer'
                >
                  CONTACT
                </a>
              </nav> */}
              <div className='mt-4'>
                <nav className='grid gap-y-4'>
                  <a
                    href='#about'
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                    className='text-darkred text-lg uppercase cursor-pointer'
                  >
                    ABOUT
                  </a>
                  <a
                    href='#skills'
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                    className='text-darkred text-lg uppercase cursor-pointer'
                  >
                    SKILLS
                  </a>
                  <a
                    href='#contact'
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                    className='text-darkred text-lg uppercase cursor-pointer'
                  >
                    CONTACT
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
