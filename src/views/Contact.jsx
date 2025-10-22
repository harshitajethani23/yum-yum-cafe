

function Contact() {
  return (
    <div>
       <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Get in Touch</h2>
        <p className="text-pink-800 text-center mb-8">We'd love to hear from you! Drop us a message below.</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-pink-700 font-semibold mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-semibold mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-semibold mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  ;
;
    </div>
  )
}

export default Contact