import React from 'react'
import { Link } from 'react-scroll'
const Navmenu = () => {
  return (
    <div className="desktopMenu flex gap-6 text-white">
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>Home</Link>
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>About</Link>
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>Portfolio</Link>
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>Clients</Link>
      </div>
  )
}

export default Navmenu
