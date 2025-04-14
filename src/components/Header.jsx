import Link from 'next/link'
import React from 'react'

const Header = () => {
  // Lista com path e nome de cada item do menu (navegação)
  const menuItems = [
    {"id": 0, "path": "/sobre", "name": "Sobre"},
    {"id": 1, "path": "/habilidades", "name": "Habilidades"},
    {"id": 2, "path": "/projetos", "name": "Projetos"},
    {"id": 3, "path": "/contato", "name": "Contato"},
  ]

  return (
    <header className='flex justify-between items-center px-8 py-6 text-light bg-black-500'>
      <Link href={"/"} className='text-blue-500 text-xl'>
        Matheus Costa
      </Link>
      <nav>
        <ul className='flex gap-8'>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={`${item.path}`} className='hover:text-blue-500'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header