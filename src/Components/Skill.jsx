import React from 'react'

const Skilled = () => {
  return (
      <section className="skillse max-sm:w-[100vw] sm:w-full text-center flex flex-col items-center text-white mt-20">
        <div className='text-5xl text-white my-5 font-semibold'>What I do</div>
        <p className='text-base text-white text-center my-5 w-2/3'>Hi I am a skilled and passionate web develoeper. Developers are all about useful, problem-solving content. Focus on creating resources like tutorials, detailed documentation, and case studies that directly solve their challenges.</p>
        <div className="skillbars mt-10 flex flex-col gap-5 max-sm:w-[100vw] max-sm:items-center">
            <div className="rect flex bg-[#3a3a3a] p-5 gap-4 rounded-lg sm:w-[60vw] max-sm:flex-col max-sm:justify-center max-sm:w-[60vw]">
                <img src="https://media.istockphoto.com/id/1428698181/vector/play-triangle-symbol-inside-3d-cube-elements-isometric-block-shapes-make-unity.jpg?s=612x612&w=0&k=20&c=-OlfdB7h2hNxWAT_COAExvkFeMcr4bm1Ix9WNRx4WBQ=" className='sm:w-[30%] md:w-14 max-sm:w-fit rouned-md' alt="" />
                <div className='flex sm:items-start justify-start flex-col max-sm:items-center '>
                    <h2 className='max-sm:text-xl sm:text-xl md:text-2xl'>UX/UI Design</h2>
                    <p className='text-sm sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum eaque magnam libero</p>
                </div>
            </div>
            <div className="rect flex bg-[#3a3a3a] p-5 gap-4 rounded-lg sm:w-[60vw] max-sm:flex-col max-sm:justify-center max-sm:w-[60vw] max-sm:text-center">
                <img src="https://cdn.svgator.com/images/2023/05/sales-animation-on-landing-page.svg" className='sm:w-[30%] md:w-14 max-sm:w-fit rouned-md' alt="" />
                <div className='flex sm:items-start justify-start flex-col max-sm:items-center '>
                    <h2 className='max-sm:text-xl sm:text-xl md:text-2xl'>Website Design</h2>
                    <p className='text-sm sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum eaque magnam libero</p>
                </div>
            </div>
            <div className="rect flex bg-[#3a3a3a] p-5 gap-4 rounded-lg sm:w-[60vw] max-sm:flex-col max-sm:justify-center max-sm:w-[60vw]">
                <img src="https://www.shutterstock.com/image-vector/mobile-application-development-abstract-concept-260nw-1918219973.jpg" className='sm:w-[30%] md:w-14 max-sm:w-fit rouned-md' alt="" />
                <div className='flex sm:items-start justify-start flex-col max-sm:items-center '>
                    <h2 className='max-sm:text-xl sm:text-xl md:text-2xl'>App Design</h2>
                    <p className='text-sm sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rerum eaque magnam libero</p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Skilled
