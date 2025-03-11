import './App.css'
import Navbar from './Components/Navbar.jsx'
import { Link } from 'react-scroll'
import Skilled from './Components/skill.jsx'
import Myportfolio from './Components/myportfolio.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <section className='flex justify-between mx-auto lg:w-[80vw] my-[30px] md:w-[90vw] max-sm:flex-col-reverse'>
        <div className="intro1 flex justify-center items-start flex-col gap-3 text-white max-sm:items-center py-10">
        <div className='text-2xl'>Hello</div>
        <div className='font-bold text-5xl max-sm:text2xl'>I'm <span className='font-bold text-yellow-500'>Smith</span> </div>
        <div className='font-bold text-5xl max-sm:text2xl'>Website Designer</div>
        <div className=' text-start font-normal w-4/5'>I am skilled and passionate web designer with experience in creating visually appealing and user friendly websites</div>
        <Link className = "bg-white px-6 py-2 flex justify-center items-center gap-2 rounded-full text-black font-bold" >
        <img src="https://icons.veryicon.com/png/o/internet--web/aeps/mailbox-22.png" className='h-[20px] w-[20px]' alt="" />
        <button className="btn">Hire Me</button>
        </Link>
        </div>
        <div className="intro2">
            <img src="/men.png" alt="" />
        </div>
      </section>

      <Skilled/>
      <Myportfolio/>
    </>
  )
}

export default App
