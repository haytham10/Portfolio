import React from 'react'
import HeroUtils from './HeroUtils';

const Hero = () => {
	return (
		<div className="relative h-[650px] flex flex-col w-full" id="about-me">
		  <video
			autoPlay
			muted
			loop
			className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
		  >
			<source src="/blackhole.webm" type="video/webm" />
		  </video>
		  <HeroUtils/>
		</div>
	  );
};

export default Hero;