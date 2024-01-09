import React from 'react';

const Footer = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Connect With Me Section */}
        <div className="mb-4 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Connect With Me</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1 123-456-7890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Replace the links and icons with your actual social links */}
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="md:w-1/2">
          <form className="flex flex-col space-y-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="p-2 border border-gray-400 rounded"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="p-2 border border-gray-400 rounded"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
			  rows={4}
			  className="p-2 border border-gray-400 rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
