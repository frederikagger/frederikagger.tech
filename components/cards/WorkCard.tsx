import Image from 'next/image'

import { Project } from '../sections/Work'

const WorkCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className='shadow-2xl transform-gpu transition-transform hover:scale-105'>
      <a href={project.url}>
        <h3>{project.name}</h3>
        <Image
          className='rounded-md '
          height={470}
          width={960}
          src={'/images/' + project.img}
          alt={project.alt}
        />
      </a>
    </div>
  )
}

export default WorkCard
