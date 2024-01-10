"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';


const Footer = () => {
	const [state, handleSubmit] = useForm("mkndgwga");
	if (state.succeeded) {
		alert("Email sent!")
	}

	const handleClick = (url: string, event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		// Check if the click event originates from an image element
		if (event.target instanceof HTMLImageElement) {
			event.preventDefault();
		  window.open(url, "_blank");
		}
	};

  return (
    <footer id='contact' className="bg-[#212121]/75 text-white py-8 z-[25]">
      <div className=" flex flex-col md:flex-row items-center md:mx-10 md:space-x-[2rem] justify-between">
        {/* Get in Touch Section */}
        <div className="md:w-[40%] w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col m-auto md:mx-[6rem] space-y-4 text-white">
			<h2 className='text-[24px] text-center font-bold'>Contact Me:</h2>
			<input
			  type="email"
			  id="email"
			  name="email"
			  placeholder="Your Email"
			  className="bg-black p-2 rounded-lg "
			  required
			/>
			<ValidationError 
        		prefix="Email" 
        		field="email"
        		errors={state.errors}/>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your Subject"
              className="bg-black p-2 rounded-lg"
              required
            />
			<ValidationError 
        		prefix="Subject" 
        		field="subject"
        		errors={state.errors}/>

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
			  rows={4}
			  className="bg-black p-2 rounded-lg min-h-[100px] max-h-[500px]"
              required
            ></textarea>
			<ValidationError 
        		prefix="message" 
        		field="message"
        		errors={state.errors}/>

            <button
              type="submit"
			  disabled={state.submitting}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Connect With Me Section */}
        <div className="mb-4 mt-6 mx-auto md:mb-0 md:w-1/2 text-balance flex-col">
          <h2 className="font-bold text-4xl mb-2">Get in Touch</h2>
		  <div className='text-gray-400 text-lg'>
			<p>Email: haytham.mkt@gmail.com</p>
			<p>Phone: +212 658-377-929</p>
		  </div>
		  <div className='flex flex-row py-3 items-center justify-center gap-x-3 text-center'>
			<Image
				className='opacity-70 cursor-pointer transition-all hover:opacity-100 hover:scale-110'
				onClick={(e) => handleClick("https://github.com/haytham10", e)}
				src={'/github.svg'} width={30} height={30} alt='github'
				/>
				<Image
				className='opacity-70 cursor-pointer transition-all hover:opacity-100 hover:scale-110'
				onClick={(e) => handleClick("https://www.linkedin.com/in/haytham-mokhtari-2a4867112/", e)}
				src={'/linkedin.svg'} width={30} height={30} alt='linkedin'
				/>
				<Image
				className='opacity-70 cursor-pointer transition-all hover:opacity-100 hover:scale-110'
				onClick={(e) => handleClick("https://twitter.com/Haytham_mkt", e)}
				src={'/x.svg'} width={30} height={30} alt='x'
				/>
		  </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
