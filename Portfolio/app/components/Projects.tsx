import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:m-0 m-auto pb-40 z-[20]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pong.jpg"
          title="Transcendence"
          description="Thanks to this website, users are able to play Pong with others. Providing a nice user interface, a chat, and real-time multiplayer online games."
		  link='https://github.com/funke09/Ft_Trancendence_42'
		/>
        <ProjectCard
          src="/IRC.jpg"
          title="IRC"
          description="IRC (Internet Relay Chat) server implemented in C++. It allows users to connect, communicate, and interact in real-time chat channels."
		  link='https://github.com/haytham10/ft_IRC'
        />
        <ProjectCard
          src="/minishell.jpg"
          title="Minishell"
          description="This project is all about recreating our very own shell, taking bash (Bourne Again Shell) as a reference, using C language to achieve that"
		  link='https://github.com/haytham10/minishell'
		/>
		<ProjectCard
          src="/cub3d.jpg"
          title="Cub3D"
          description="This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever. Using C language and Ray-Casting."
		  link='https://github.com/haytham10/Cub3D'
		/>
		<ProjectCard
          src="/inception.jpg"
          title="Inception"
          description="This project aims to provide a complete Docker-based environment for setting up a WordPress website with Nginx, MariaDB, Redis... etc"
		  link='https://github.com/haytham10/inception'
		/>
      </div>
    </div>
  )
}

export default Projects