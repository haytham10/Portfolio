import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
	<main className='h-full w-full'>
		<div className="flex flex-col gap-20">
			<Hero/>
			<Skills/>
			<Projects/>
		</div>
	</main>
  )
}
