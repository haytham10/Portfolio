import React from 'react'
import HeroUtils from './HeroUtils';

const Hero = () => {
	return (
		<div className="relative flex flex-col h-full w-full" id="about-me">
		  <video
			autoPlay
			muted
			loop
			className="rotate-180 absolute top-[-210px] h-full w-full left-0 z-[1] scale-150"
		  >
			<source src="/blackhole.webm" type="video/webm" />
		  </video>
		  <HeroUtils/>
		</div>
	  );
};

export default Hero;