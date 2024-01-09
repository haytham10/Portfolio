import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] m-auto fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="flex flex-row items-center"
        >
		<h1 className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
			HAYTHAM
		</h1>
        </Link>

        <div className="flex-row items-center justify-center mr-16 gap-x-20 text-gray-50 font-medium hidden md:flex">
            <Link href="#about-me" className="nav-link shadow-lg shadow-[#2A0E61]/50 bg-black/20 bg-opacity-50 hover:bg-opacity-75">
              About me
            </Link>
            <Link href="#skills" className="nav-link shadow-lg shadow-[#2A0E61]/50 bg-black/20 bg-opacity-50 hover:bg-opacity-75">
              Skills
            </Link>
            <Link href="#projects" className="nav-link shadow-lg shadow-[#2A0E61]/50 bg-black/20 bg-opacity-50 hover:bg-opacity-75">
              Projects
            </Link>
        </div>

        <Link href="#contact" className="flex">
			<button className="contactButton p-2 bg-gradient-to-r from-cyan-500 to-purple-500"> Contact
				<div className="iconButton shadow-sm shadow-purple-400">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
				</div>
			</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar