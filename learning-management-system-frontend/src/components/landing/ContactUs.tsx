const ContactUs = () => {
    return (
      <section
        id="contact"
        className="px-4 md:px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl"
      >
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-8">
              Get in Touch with Us
            </h2>
            <p className="text-gray-600">
              We are here to help you with any questions or support you may need.
              <br />
              Reach out to us, and let’s embark on this learning journey together!
            </p>
          </div>
          <div className="md:w-1/2">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full !bg-indigo-950 !text-white p-3 rounded hover:!bg-indigo-800 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;