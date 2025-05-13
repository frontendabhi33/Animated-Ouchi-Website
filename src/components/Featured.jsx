import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-20'>
      <div className="px-20 w-full border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl text-white'>Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 w-full mt-10">
            <div className="cardContainer w-1/2 h-[75vh]">
             <div className="card w-full h-full rounded-xl overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" className='w-full h-full bg-cover' alt="" />
             </div>
            </div>
            <div className="cardContainer w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" className='w-full h-full bg-cover' alt="" />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured