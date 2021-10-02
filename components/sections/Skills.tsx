import SkillsCard from '../cards/SkillsCard'
import { skills } from '../../data/SkillsData'

export type Skill = {
  name: string
  link?: string
  color?: string
  icon?: string
  description?: string
}

export default function Skills() {
  return (
    <section id='skills' className='mx-auto px-4 pt-6 sm:px-6'>
      <h1 className='mb-3 pt-20'>SKILLS</h1>
      <p className='text-white opacity-75 '>
        I have worked with quite a lot of different frameworks, tools and
        libraries. But my favorites and the ones I use the most are the
        following:
      </p>
      <div className='mt-4 sm:mt-16 max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 mx-auto'>
        {skills?.map(skill => (
          <SkillsCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  )
}
