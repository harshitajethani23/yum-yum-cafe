import Navbar from "../components/Navbar.jsx"
import img from "../assets/getting-coffee.png"
function Home() {
  return (
    <div >
        <Navbar />
        <div className="mb-10">
         <img src={img} className="h-[400px] text-center block mx-auto"/>

       <h1 className="text-center text-4xl my-6">Brewed with <span className="bg-[#E06B80] px-4 py-1 rounded-md text-white">Love</span> ,  <span className="bg-[#E06B80] px-4 py-1 rounded-md text-white">Served</span>  with Soul</h1>
       <p className=" text-center text-xl mb-16 mr-8 ml-8">Step into a warm, welcoming space where every cup of coffee tells a story, we craft  freshly baked delights perfect for slow mornings, catch-ups, or quiet moments.</p>
       </div>


    </div>
  )
}

export default Home