import React from 'react'

function Header({children}) {
  return (
    <header className='flex items-center absolute left-[-0.21%] top-[2%] z-[3]   min-w-[100%] justify-between'>
      {children}
    </header>
  )
}

export default Header
