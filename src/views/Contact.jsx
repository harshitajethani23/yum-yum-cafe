import Navbar from "../components/Navbar.jsx"

function Contact() {
  return (
    <div>
     <Navbar />
    <div className=" p-8">
     
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        Contact Us
      </h1>

      <div className="bg-[#E06B80]  mx-auto p-6 rounded-2xl shadow-lg mr-100 ml-100">
        <p className="text-center text-gray-700 mb-6">
          We'd love to hear from you! Please fill out the form below or reach us directly.
        </p>

        <form className="my-10">
          <div>
            <label className="block  text-[#FFC69D] font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded-lg border mb-1"
            />
          </div>

          <div>
            <label className="block  text-[#FFC69D] font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-lg border mb-1"
            />
          </div>

          <div>
            <label className="block  text-[#FFC69D] font-semibold mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-2 rounded-lg border mb-1"
             ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 text-white py-2 rounded-lg hover:bg-pink-600 "
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="max-w-lg mx-auto text-center mt-10 text-gray-700">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">Visit Us</h2>
        <p>Yum Yum Café, Dharampeth, Nagpur, India</p>
        <p>📞 +91 7020464428</p>
        <p>📧 yumyumcafe@gmail.com</p>
      </div>
    </div>
    </div>
  );
};

  

export default Contact

