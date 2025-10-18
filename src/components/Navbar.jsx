import logo from "./../assets/tea-cup.png"

function Navbar() {
  return (
    <div className="static top-0 bg-[#E06B80] py-3 px-4 border-b-2 border-[#CD2C58]">
        <span className="text-xl font-semibold flex items-center">
            <img src={logo} alt="logo" className="h-10 w-10 inline-block mr-2 "/>
            Yum Yum Cafe
            </span>
            </div>
  )
}

export default Navbar