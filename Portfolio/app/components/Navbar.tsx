import Link from 'next/link'
import React from 'react'
import { Socials } from "../constants";
import Image from 'next/image';


function Logo() {
	return (
		<g id="tight-bounds" transform="matrix(1,0,0,1,122.24000000000001,130.8994317978802)">
			<svg viewBox="0 0 395.52 138.20113640423958" height="80" width="130">
				<g>
					<svg 
						viewBox="0 0 395.52 138.20113640423958"
						height="138.20113640423958"
						width="395.52">
						<g>
							<svg viewBox="0 0 395.52 138.20113640423958"
								height="138.20113640423958"
								width="395.52">
									<g id="textblocktransform">
										<svg viewBox="0 0 395.52 138.20113640423958"
											height="138.20113640423958"
											width="395.52"
											id="textblock">
												<g>
													<rect width="395.52"
														height="103.44878245008627"
														fill="none"
														strokeWidth="9.018103199999999"
														stroke="#855ff7"
														data-fill-palette-color="none"
														data-stroke-palette-color="tertiary">
													</rect>
													<rect width="395.52"
														height="34.752353954153314"
														y="103.44878245008627"
														fill="#855ff7"
														data-fill-palette-color="tertiary">
													</rect>
												</g>
												<g>
													<svg viewBox="0 0 395.52 103.44878245008627"
														height="103.44878245008627"
														width="395.52">
														<g transform="matrix(1,0,0,1,23.607599999999998,23.607599999999998)">
															<svg width="348.3048"
																viewBox="3.75 -32.75 202.83999633789062 32.75"
																height="56.233582450086274"
																data-palette-color="#7042f88b">
																	<path d="M8.8 0L3.75 0 3.75-32.75 8.8-32.75 8.8-19.3 21.2-19.3 21.2-32.75 26.25-32.75 26.25 0 21.2 0 21.2-14.95 8.8-14.95 8.8 0ZM41.75-17.85L41.75-17.85 40.4-13.35 49.45-13.35 48.1-17.85Q47.3-20.55 46.5-23.25 45.7-25.95 45-28.75L45-28.75 44.8-28.75Q44.1-25.95 43.32-23.25 42.55-20.55 41.75-17.85ZM36.4 0L31.3 0 42.1-32.75 47.9-32.75 58.7 0 53.4 0 50.6-9.4 39.2-9.4 36.4 0ZM77.5 0L72.5 0 72.5-11.5 61.65-32.75 66.95-32.75 71.45-23.5Q72.34-21.6 73.2-19.73 74.05-17.85 75-15.9L75-15.9 75.2-15.9Q76.15-17.85 77.05-19.73 77.95-21.6 78.84-23.5L78.84-23.5 83.2-32.75 88.34-32.75 77.5-11.5 77.5 0ZM107.49 0L102.49 0 102.49-28.55 91.94-28.55 91.94-32.75 118.04-32.75 118.04-28.55 107.49-28.55 107.49 0ZM128.79 0L123.74 0 123.74-32.75 128.79-32.75 128.79-19.3 141.19-19.3 141.19-32.75 146.24-32.75 146.24 0 141.19 0 141.19-14.95 128.79-14.95 128.79 0ZM161.74-17.85L161.74-17.85 160.39-13.35 169.44-13.35 168.09-17.85Q167.29-20.55 166.49-23.25 165.69-25.95 164.99-28.75L164.99-28.75 164.79-28.75Q164.09-25.95 163.31-23.25 162.54-20.55 161.74-17.85ZM156.39 0L151.29 0 162.09-32.75 167.89-32.75 178.69 0 173.39 0 170.59-9.4 159.19-9.4 156.39 0ZM187.89 0L183.39 0 183.39-32.75 189.19-32.75 193.44-19.4 194.89-14.3 195.09-14.3 196.54-19.4 200.79-32.75 206.59-32.75 206.59 0 201.99 0 201.99-14.75Q201.99-16 202.09-17.7 202.19-19.4 202.31-21.15 202.44-22.9 202.56-24.53 202.69-26.15 202.79-27.3L202.79-27.3 202.64-27.3 200.59-20.25 196.44-8.7 193.34-8.7 189.24-20.25 187.24-27.3 187.09-27.3Q187.24-26.15 187.36-24.53 187.49-22.9 187.61-21.15 187.74-19.4 187.81-17.7 187.89-16 187.89-14.75L187.89-14.75 187.89 0Z"
																		opacity="1"
																		transform="matrix(1,0,0,1,0,0)"
																		fill="#f9fafb"
																		className="wordmark-text-0"
																		data-fill-palette-color="primary"
																		id="text-0">
																	</path>
															</svg>
														</g>
													</svg>
												</g>
										</svg>
									</g>
							</svg>
						</g>
					</svg>
				</g>
			</svg>
			<rect width="395.52"
				height="138.20113640423958"
				fill="none"
				stroke="none"
				visibility="hidden">
			</rect>
		</g>
	)
}

const Navbar = () => {
  return (
    <div className="w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="flex flex-row items-center"
        >
		<h1 className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
			HAYTHAM
		</h1>
        </Link>

        <div className="flex-row items-center justify-center mr-[40px] gap-x-20 text-gray-50 font-medium hidden md:flex">
            <Link href="#about-me" className="nav-link">
              About me
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
        </div>

        <div className="flex">
			<button className="contactButton p-2"> Contact
				<div className="iconButton">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
				</div>
			</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar