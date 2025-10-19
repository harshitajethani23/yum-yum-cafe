import {Link} from "react-router"
import logo from "./../assets/tea-cup.png"

function Navbar() {
  return (
    <div className="static top-0 bg-[#E06B80] py-3 px-4 border-b-2 border-[#CD2C58]">
        <span className="text-xl font-semibold flex items-center">
            <img src={logo} alt="logo" className="h-10 w-10 inline-block mr-2 "/>
            Yum Yum Cafe
            
            <div className="ml-55">
               <Link to="/" className="mr-5 ml-5 hover:bg-[#FFE6D4] hover:text-gray-800 hover:p-1">Home</Link>
      
       <Link to="/menu" className="mr-5 ml-5 hover:bg-[#FFE6D4] hover:text-gray-800 hover:p-1">Menu</Link>
        <Link to="/reviews" className="mr-5 ml-5 hover:bg-[#FFE6D4] hover:text-gray-800 hover:p-1">Reviews</Link>
           <Link to="/contact" className="mr-5 ml-5 hover:bg-[#FFE6D4] hover:text-gray-800 hover:p-1">Contact</Link>
       
            </div>
            </span>
            </div>
  )
}

export default Navbar