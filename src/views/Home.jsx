import Navbar from "../components/Navbar.jsx"
import img from "../assets/getting-coffee.png"
import ambience1 from "../assets/ambience-1.webp";
import ambience2 from "../assets/ambience-2.webp";
import ambience3 from "../assets/ambience-3.webp";
import ambience4 from "../assets/ambience-4.jpg";
function Home() {
  return (
    <div >
        <Navbar />
        <div className="mb-10">
         <img src={img} className=" object-contain h-[200px] md:h-[400px] text-center block mx-auto"/>

       <h1 className="text-center text-4xl my-6">Brewed with <span className="bg-[#E06B80] px-4 py-1 rounded-md text-white">Love</span> ,  
       <span className="bg-[#E06B80] px-4 py-1 rounded-md text-white inline-block mt-6 md:mt-0">Served</span>  with Soul</h1>
       <p className=" text-center text-xl mb-16 mr-8 ml-8">Step into a warm, welcoming space where every cup of coffee tells a story, we craft  freshly baked delights perfect for slow mornings, catch-ups, or quiet moments.</p>
       </div>
       <div>
          <h1 className="text-3xl font-bold text-center text-[#CD2C58] mb-5">
        About Us
      </h1>
        <p className="text-center mr-8 ml-8 mb-8">Welcome to Yum Yum Café, your cozy corner for coffee, comfort, and community. What started as a simple love for good coffee and fresh, homemade food has grown into a local gathering spot where friends meet, ideas spark, and every bite feels like home.We believe in the power of quality ingredients, friendly faces, and that little “yum” moment with every sip. Whether you’re here for your morning latte, a quiet spot to work, or a weekend brunch with friends, there’s always something delicious waiting.</p>
        <h2 className="text-center text-4xl mb-8">Come for the <span className="bg-[#E06B80] px-4 py-1 rounded-md text-white inline-block mt-6 md:mt-0">coffee.</span> Stay for the  <span className="bg-[#E06B80] px-4 py-1 rounded-md text-white inline-block mt-6 md:mt-0">vibes.</span></h2>
         <div>
           <h1 className="text-3xl font-bold text-center text-[#CD2C58] mb-8">
        The beautiful ambience
      </h1>
         <div className=" flex flex-wrap  ml-30">
         <img src={ambience1} className="h-[400px] w-[500px] mr-10 mb-10 rounded-md"/>
          <img src={ambience2} className="h-[400px] w-[500px]  rounded-md "/>
           <img src={ambience3} className="h-[400px] w-[500px]  mr-10 mb-10  rounded-md"/>
            <img src={ambience4} className="h-[400px] w-[500px]  rounded-md "/>
          </div>
         </div>
       </div>


</div>
  )
}

export default Home