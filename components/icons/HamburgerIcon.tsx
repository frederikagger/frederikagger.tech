const HamburgerIcon: React.FC<{ color?: string }> = ({ color = '#db2777' }) => {
  return (
    <svg
      className='h-6 w-6'
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      viewBox='0 0 24 24'
      stroke={color}
      aria-hidden='true'
    >
      <path
        strokeLinecap='square'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}

export default HamburgerIcon
