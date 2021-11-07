import { useForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

interface ContactFormProps {
  name: string
  subject: string
  message: string
}

const schema = yup.object({
  name: yup.string().required('Please enter a name'),
  subject: yup.string().required('Please enter a subject'),
  message: yup.string().required('Please enter a message')
})

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormProps>({
    resolver: yupResolver(schema)
  })
  const [serverState, sendToFormspree] = useFormspree('xyylqoyb')

  return (
    <section id='contact' className='text-darkred mx-auto px-4 pt-6 sm:px-6'>
      <h1 className='pt-20'>CONTACT</h1>

      {serverState.succeeded ? (
        <h1>Thanks for submitting!</h1>
      ) : (
        <form
          className='flex flex-col gap-1 mt-3'
          onSubmit={handleSubmit(sendToFormspree)}
        >
          <div>
            <label htmlFor='name'>Name</label>
            <input
              className={`${errors.name ? 'ring-darkred ring-2' : ''}`}
              id='name'
              {...register('name')}
              placeholder='Name'
            />
            {errors.name && (
              <div className='text-darkred'> {errors.name.message} </div>
            )}
          </div>
          <div>
            <label htmlFor='subject'>Subject</label>
            <input
              className={`${errors.subject ? 'ring-darkred ring-2' : ''}`}
              id='subject'
              {...register('subject')}
              placeholder='Subject'
            />
            {errors.subject && (
              <div className='text-darkred'> {errors.subject.message} </div>
            )}
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea
              className={`${errors.message ? 'ring-darkred ring-2' : ''}`}
              id='message'
              {...register('message')}
              placeholder='Message'
            />
            {errors.message && (
              <div className='text-darkred'> {errors.message.message} </div>
            )}
          </div>

          <button className='button bg-blue text-white' type='submit'>
            {isSubmitting ? 'Submitting' : 'Submit'}
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
