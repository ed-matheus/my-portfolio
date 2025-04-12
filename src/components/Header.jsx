import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-7'>
      <Link href={"/"}>
        Matheus Costa
      </Link>
    </header>
  )
}

export default Header