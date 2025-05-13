import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Layout = () => {

   

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1 text-white">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div className="masker">
            <div className="w-fit items-center flex">
                {index === 1 && <motion.div initial={{width: 0}} animate={{width: '9vw'}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className="w-[9vw] h-[6vw] relative top-[.5vw] bg-green-500 rounded-md">
                  <img src="./Homepage.jpg" className="w-full h-full object-cover" alt="" />
                  </motion.div>}
            <h1 className="uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-semibold">
              {item}
            </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 mt-32 border-zinc-800 flex items-center justify-between py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item,index)=> (
            <p className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-lg uppercase rounded-full">Start The Project</div>
            <div className="w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center">
                <span className="rotate-[45deg]">

                <FaArrowUpLong />
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
