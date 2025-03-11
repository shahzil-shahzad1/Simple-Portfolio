import React from 'react'

const myportfolio = () => {
  return (
    <section className="skillse max-sm:w-full sm:w-full text-center flex flex-col items-center text-white mt-20">
    <div className='text-5xl text-white my-5 font-semibold'>My Portfolio</div>
    <p className='text-base text-white text-center my-5 w-2/3'>Hi I am a skilled and passionate web develoeper. Developers are all about useful, problem-solving content. Focus on creating resources like tutorials, detailed documentation, and case studies that directly solve their challenges.</p>
    {/* <div className="mainimages flex justify-center"> */}

    <div className='flex gap-6 my-20 flex-wrap w-full justify-center'>
        <div className="eachitem">
            <img src="https://img.freepik.com/premium-photo/cartoon-character-with-pink-purple-background_1029473-123555.jpg" alt="" className='w-[300px] rounded-xl' />
        </div>
        <div className="eachitem">
            <img src="https://img.freepik.com/premium-photo/cartoon-character-with-pink-purple-background_1029473-66143.jpg" alt="" className='w-[300px] rounded-xl' />
        </div>
        <div className="eachitem">
            <img src="https://img.freepik.com/premium-photo/cartoon-character-with-pink-purple-background_1029473-65840.jpg" alt="" className='w-[300px] rounded-xl' />
        </div>
        <div className="eachitem">
            <img src="https://img.freepik.com/premium-photo/girl-sitting-floor-reading-book_87646-35504.jpg" alt="" className='w-[300px] rounded-xl' />
        </div>
        <div className="eachitem">
            <img src="https://img.freepik.com/premium-photo/shell-with-pearl-it-sits-beach_1257811-8062.jpg" alt="" className='w-[300px] rounded-xl h-[450px]' />
        </div>
        <div className="eachitem">
            <img src="https://img.freepik.com/premium-vector/efficient-business-time-management-concept_1323048-1861.jpg" alt="" className='w-[300px] rounded-xl h-[450px]' />
        </div>
    </div>
    {/* </div> */}
  </section>
  )
}

export default myportfolio
