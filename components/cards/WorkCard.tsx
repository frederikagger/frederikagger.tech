import Image from 'next/image'

import { Project } from '../sections/Work'

const WorkCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className='shadow-2xl cursor-pointer'>
      <h3>{project.name}</h3>
      <Image
        height={470}
        width={960}
        src={'/images/' + project.img}
        alt={project.alt}
      />
    </div>
  )
}

export default WorkCard
