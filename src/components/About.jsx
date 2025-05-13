

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h2 className='text-[4vw] tracking-tight leading-[4.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h2>
        <div className='w-full flex gap-5 pt-10 mt-20 border-t-[1px] border-[#a1b562]'>
            <div className='w-1/2'>
              <h1 className="text-7xl">Our approach:</h1>
              <button className="mt-10 cursor-pointer bg-black py-3 px-6 rounded-full text-white flex gap-5 items-center">
                Read More 
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl'>
            <img src='./Homepage.jpg' alt="" className="w-full h-full object-cover rounded-3xl" />
            </div>
        </div>
    </div>
  )
}

export default About