import React from 'react'
import HeroUtils from './HeroUtils';

const Hero = () => {
	return (
		<div className="relative flex flex-col justify-center items-center h-full w-full" id="about-me">
		  <video
			autoPlay
			muted
			loop
			className="rotate-180 absolute top-[-260px] md:top-[-210px] h-full z-[1] md:scale-150"
		  >
			<source src="/blackhole.webm" type="video/webm" />
		  </video>
		  <HeroUtils/>
		</div>
	  );
};

export default Hero;