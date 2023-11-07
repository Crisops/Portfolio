import { validateFormData } from '../../helpers/validateFormData'
import { useForm } from '../../hooks/useForm'
import ContactInput from './ContactInput'
import ContactInputTextArea from './ContactInputTextArea'
import { IconLoader } from './Icons'

const ContactForm = ({ children }) => {
  const validateForm = (formData) => {
    const errors = validateFormData(formData)

    return errors
  }

  const { handleChange, handleChangeKeyUp, handleSubmit, form, error, loading, response, limitSubject, limitTextArea } = useForm(validateForm)

  return (
    <div className='relative flex justify-center items-center w-full h-full'>
      <div className='relative flex justify-center items-center w-[650px] h-[650px] z-10 max-[1536px]:w-[530px] max-[1536px]:h-[530px] max-[1024px]:mt-0 max-[1024px]:w-[600px] max-[1024px]:h-[600px] max-[640px]:w-[470px] max-[640px]:h-[470px] max-[500px]:w-[350px] max-[500px]:h-[350px]'>
        {children}
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
          {loading && <IconLoader />}
        </form>
      </div>
      <div className={`absolute left-1/2 -translate-x-1/2 transition duration-300 ease-in-out ${response ? 'translate-y-0' : 'translate-y-[200%]'} bottom-16 flex justify-center items-center`}>
        <div className='w-96 max-sm:w-80 h-16 rounded py-2 px-3 bg-zinc-950 dark:bg-[#150101] text-center'>
          <div>
            <span className='text-white dark:text-white font-Hind_Vadodara text-center text-sm'>{response}</span>
          </div>
          <div className={`absolute left-0 bottom-0 ${response && 'animate-[progress_4s_linear]'} h-1 bg-gradient-to-l from-white dark:from-red-700 dark:to-[#0F0101]`}></div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
