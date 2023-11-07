import { validateFormData } from '../../helpers/validateFormData'
import { useForm } from '../../hooks/useForm'
import ContactInput from './ContactInput'
import ContactInputTextArea from './ContactInputTextArea'
import { IconLoader } from './Icons'

const ContactForm = () => {
  const validateForm = (formData) => {
    const errors = validateFormData(formData)

    return errors
  }

  const { handleChange, handleChangeKeyUp, handleSubmit, form, error, loading, response, limitSubject, limitTextArea } = useForm(validateForm)

  return (
    <form onSubmit={handleSubmit} className='absolute w-full h-full flex justify-center items-center flex-col gap-7 max-[1536px]:gap-6'>
      <div className='flex flex-col justify-center items-center'>
        <span className='font-Hind_Guntur text-6xl text-zinc-950 font-bold uppercase dark:text-white max-[1536px]:text-5xl max-[1024px]:text-6xl max-[640px]:text-3xl'>¡Contactame!</span>
        <span className='font-Hind_Guntur text-sm text-zinc-400 font-semibold dark:text-zinc-200'>¡¡ No lo dudes !!</span>
      </div>
      <ContactInput
        className='relative w-full py-3 px-5 max-[1536px]:px-4 bg-transparent border border-solid border-neutral-300 rounded-[40px] text-sm font-Hind_Guntur text-neutral-900 outline-none dark:border-zinc-800/80 dark:text-white' type='text'
        name='email'
        id='email'
        placeholder='Correo electrónico'
        handleChange={handleChange}
        handleChangeKeyUp={handleChangeKeyUp}
        error={error.email}
        value={form.email}
      />
      <ContactInput
        className='relative w-full py-3 px-5 bg-transparent border border-solid border-neutral-300 rounded-[40px] text-sm font-Hind_Guntur text-neutral-900 outline-none dark:border-zinc-800/80 dark:text-white'
        type='text'
        name='subject'
        id='subject'
        placeholder='¿Cual es tu asunto?'
        handleChange={handleChange}
        handleChangeKeyUp={handleChangeKeyUp}
        error={error.subject}
        limitCharStart={`${limitSubject.start}/`}
        limitCharEnd={limitSubject.end}
        value={form.subject}
      />
      <ContactInputTextArea
        handleChange={handleChange}
        handleChangeKeyUp={handleChangeKeyUp}
        error={error.message}
        value={form.message}
        limitCharStart={`${limitTextArea.start}/`}
        limitCharEnd={limitTextArea.end}
      />
      <ContactInput
        className={`relative w-[150px] max-[1536px]:w-[120px] max-[640px]:w-[100px] max-[1024px]:w-[150px] ${Object.keys(error).length > 0 ? 'bg-red-600 cursor-not-allowed dark:bg-gradient-to-r dark:bg-[#1E0102]' : 'bg-zinc-800 cursor-pointer hover:-translate-y-1 hover:bg-zinc-950 dark:bg-[#290102] dark:hover:bg-[#3E0102]'} py-3 px-5 rounded-[40px] font-Hind_Guntur text-sm text-white font-bold uppercase outline-none transition duration-300  dark:text-white `}
        type='submit'
        value='Enviar'
      />
      {response && <div className='absolute left-1/2 -translate-x-1/2 bottom-16 text-zinc-950 dark:text-white font-Hind_Vadodara text-center'>{response}</div>}
      {loading && <IconLoader />}
    </form>
  )
}

export default ContactForm
