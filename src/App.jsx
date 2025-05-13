import LocomotiveScroll from "locomotive-scroll"
import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Featured from "./components/Featured"
import Layout from "./components/Layout"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <Navbar />
      <Layout />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App