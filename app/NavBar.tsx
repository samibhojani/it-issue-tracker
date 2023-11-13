import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const NavBAr = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center text-xl'>
      <Link className='text-5xl' href="/"> <AiFillBug /> </Link>
      <ul className='flex space-x-6'>
        {links.map(link => 
        <Link 
        key={link.href}
        className="text-zinc-600 hover:text-zinc-800 transition-colors"
        href={link.href}>
            {link.label} </Link>)}
      </ul>
    </nav>
  )
}

export default NavBAr
