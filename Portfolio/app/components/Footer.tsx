"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';


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
    <footer id='contact' className="bg-[#212121]/85 text-white py-4 z-[25]">
      <div className=" flex flex-col md:flex-row items-center md:mx-10 justify-evenly">
        {/* Get in Touch Section */}
		<div className="w-1/2">
			<form onSubmit={handleSubmit} className="flex flex-col md:ml-[6rem] md:w-1/2 space-y-4 text-white">
				<h2 className='text-[24px] text-center md:text-start font-bold'>Contact Me:</h2>
				<div className="flex flex-row space-x-4">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Your Email"
					className="bg-black p-2 rounded-lg w-1/2 outline-none focus:outline-purple-700/50 focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all"
					required
				/>
				<ValidationError 
					prefix="Email" 
					field="email"
					errors={state.errors}
				/>

				<input
					type="text"
					id="subject"
					name="subject"
					placeholder="Your Subject"
					className="bg-black p-2 rounded-lg w-1/2 outline-none focus:outline-purple-700/50 focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all"
					required
				/>
				<ValidationError 
					prefix="Subject" 
					field="subject"
					errors={state.errors}
				/>
				</div>

				<textarea
				id="message"
				name="message"
				placeholder="Your Message"
				rows={4}
				className="bg-black p-2 rounded-lg min-h-[100px] max-h-[500px] mt-4 outline-none focus:outline-purple-700/50 focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all"
				required
				></textarea>
				<ValidationError 
				prefix="message" 
				field="message"
				errors={state.errors}
				/>

				<div className="flex flex-row justify-center md:justify-start mt-4">
				<button
					type="submit"
					disabled={state.submitting}
					className="text-white text-lg bg-purple-700 bg-opacity-75 px-3 py-2 rounded-[15px] transition-all hover:bg-opacity-100 hover:scale-105"
				>
					Submit
					<PaperAirplaneIcon className="w-6 h-6 inline-block mx-2" />
				</button>
				</div>
			</form>
			</div>
        {/* Connect With Me Section */}
        <div className="mb-4 mt-6 mx-auto md:ml-[6rem] md:mb-0 w-full md:w-1/2 md:text-justify text-center flex-col">
          <h2 className="font-bold text-gray-300 text-3xl mb-2 uppercase">Get in Touch</h2>
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
