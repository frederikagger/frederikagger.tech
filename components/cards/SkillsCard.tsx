import { useState } from 'react'
import { Skill } from '../sections/Skills'

const Card: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [showText, setShowText] = useState(false)
  return (
    <div className=''>
      <a href={skill.link || ''}>
        <h3
          style={{ backgroundColor: skill.color }}
          className='text-center text-xl rounded-lg rounded-b-none border-0 text-white opacity-95  px-1.5 py-2 font-body'
        >
          {skill?.name}
        </h3>
      </a>
      <p
        style={{ borderColor: skill.color }}
        className='border-2 shadow-2xl border-t-0 font-extralight leading-loose text-base rounded-t-none rounded-lg p-3.5'
      >
        {skill.description ||
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque repellat, expedita fuga dicta maiores atque. Officiis aut iure inventore laudantium harum, magni nam corporis quae error ullam quibusdam officia.'}
      </p>
    </div>
  )
}

export default Card
