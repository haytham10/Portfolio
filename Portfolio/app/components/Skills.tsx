import {
	Backend_skill,
	Other_skill,
	Frontend_skills,
  } from "../constants";
  import React from "react";
  import SkillDataProvider from "./SkillDataProvider";
  import SkillText from "./SkillText";
  
  const Skills = () => {
	return (
	  <section
		id="skills"
		className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-40 pb-30"
	  >
		<SkillText />
  
		<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
		  {Frontend_skills.map((image, index) => (
			<SkillDataProvider
			  key={index}
			  src={image.Image}
			  width={image.width}
			  height={image.height}
			  index={index}
			/>
		  ))}
		</div>

		<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
		  {Backend_skill.map((image, index) => (
			<SkillDataProvider
			  key={index}
			  src={image.Image}
			  width={image.width}
			  height={image.height}
			  index={index}
			/>
		  ))}
		</div>
		<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
		  {Other_skill.map((image, index) => (
			<SkillDataProvider
			  key={index}
			  src={image.Image}
			  width={image.width}
			  height={image.height}
			  index={index}
			/>
		  ))}
		</div>
  
		<div className="w-full h-full absolute">
		  <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
			<video
			  className="w-full h-auto"
			  preload="false"
			  playsInline
			  loop
			  muted
			  autoPlay
			  src="/cards-video.webm"
			/>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default Skills;