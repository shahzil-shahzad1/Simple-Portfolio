import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-scroll'
import { useState } from 'react'
import Navmenu from './Navmenu'
// import MyComponent from '../assets/chat/page'
const Navbar = () => {
  const [nav, setnav] = useState(false)
  const displaynav = ()=>{
    if(nav){
      setnav(false)
    }
    else{
      setnav(true)
    }
  }
  return (
    <>
    
    <nav className='h-[3rem] w-[100vw] max-w-[75rem] my-0 mx-auto py-[1rem] px-[2rem] flex items-center justify-between sitcky top-0 z-[3]'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiBVg3AU0SPDrj7PwT8bMD4BE450IRm856sGiho5Vq6Y0itrJk5SJu_p1B4p1kuejzzk&usqp=CAU" alt="logo" className='logo'/>
     <div className="max-sm:hidden desktopMenu flex gap-6 text-white">
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>Home</Link>
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>About</Link>
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>Portfolio</Link>
        <Link href='' className='Item cursor-pointer font-bold hover:text-yellow-400 hover:border-b-2 border-yellow-400 pb-2'>Clients</Link>
      </div>
      
      <div className="sm:hidden block mr-20" onClick={displaynav}>
        <div className="bg-white w-8 h-[2px] my-2"></div>
        <div className="bg-white w-8 h-[2px] my-2"></div>
        <div className="bg-white w-8 h-[2px] my-2"></div>
      </div>
      <button className="max-sm:hidden button flex gap-1 bg-white border-none items-center justify-center px-4 py-2 rounded-full">
     <img src="https://static.thenounproject.com/png/739210-200.png" className='w-[30px] h-[30px]' alt="" />
        <img src="" alt="" /> Contact Us
      </button>
    </nav>
      {nav && <div className='transition-transform my-8 w-full flex justify-center'><Navmenu/></div>}
    </>
  )
}

export default Navbar
