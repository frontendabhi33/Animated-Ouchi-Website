import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 gap-10 px-20 flex items-center'>
     <div className="cardContainer h-[50vh] w-1/2">
        <div className="relative card w-full h-full bg-[#004D43] flex justify-center items-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute left-10 bottom-10 border-[1px] px-7 rounded-full py-2 text-white'>&copy; 2019-2025</button>
        </div>
     </div>
     <div className="cardContainer h-[50vh] w-1/2 flex gap-5">
       <div className="relative card w-full h-full bg-[#212121] flex justify-center items-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-10 bottom-10 border-[1px] px-7 rounded-full py-2 text-white uppercase'>Rating 5.0 on clutch</button>
        </div>
          <div className="relative card w-full h-full bg-[#212121] flex justify-center items-center">
            <img className='w-18 h-18' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute left-10 bottom-10 border-[1px] px-7 rounded-full py-2 text-white uppercase'>Business Board</button>

        </div>
        </div>
    </div>
  )
}

export default Cards