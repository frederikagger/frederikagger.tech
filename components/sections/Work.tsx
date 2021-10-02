import WorkCard from '../cards/WorkCard'
import { projects } from './../../data/WorkData'

export type Project = {
  name: string
  tags: string[]
  url: string
  img: string
  alt: string
}

const Work = () => {
  return (
    <section id='work' className='text-darkred mx-auto px-4 pt-6 sm:px-6'>
      <h1 className='mb-3 pt-20'>WORK</h1>
      <p className='text-white opacity-75 '>
        Below is a showcase of some of my work
      </p>
      <div className='mt-4 sm:mt-16 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mx-auto'>
        {projects.map(project => (
          <WorkCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}

export default Work
