import { useForm } from '../../hooks/useForm'
import ContactInput from './ContactInput'
import ContactInputTextArea from './ContactInputTextArea'
import { IconLoader } from './Icons'

const ContactForm = () => {
  const validateForm = (formData) => {
    const errors = {}

    const regexxEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    const regexSubject = /^.{1,150}$/

    const regexMessage = /^.{1,255}$/

    if (!regexxEmail.test(formData.email)) errors.email = 'Email no valido'

    if (!formData.subject.trim()) {
      errors.subject = 'El asunto no puede estar vacio'
    } else if (!regexSubject.test(formData.subject)) {
      errors.subject = 'El asunto no puede tener más de 150 caracteres'
    }

    if (!formData.message.trim()) {
      errors.message = 'Este campo no puede estar vacío'
    } else if (!regexMessage.test(formData.message)) {
      errors.message = 'Se ha sobrepasado el límite de caracteres'
    }

    return errors
  }

  const { handleChange, handleChangeKeyUp, handleSubmit, form, error, loading, response } = useForm(validateForm)

  return (
    <form onSubmit={handleSubmit} className='absolute w-full h-full flex justify-center items-center flex-col gap-7'>
      <div className='flex flex-col justify-center items-center'>
        <span className='font-Hind_Guntur text-6xl text-zinc-950 font-bold uppercase dark:text-white'>¡Contactame!</span>
        <span className='font-Hind_Guntur text-sm text-zinc-400 font-semibold dark:text-zinc-200'>¡¡ No lo dudes !!</span>
      </div>
      <ContactInput
        className='relative w-full py-3 px-5 bg-transparent border border-solid border-neutral-300 rounded-[40px] text-sm font-Hind_Guntur text-neutral-900 outline-none dark:border-zinc-800/80 dark:text-white' type='text'
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
        limitChar={150}
        value={form.subject}
      />
      <ContactInputTextArea
        handleChange={handleChange}
        handleChangeKeyUp={handleChangeKeyUp}
        error={error.message}
        value={form.message}
      />
      <ContactInput
        className={`relative w-[150px] ${Object.keys(error).length > 0 ? 'bg-red-600 cursor-not-allowed dark:bg-gradient-to-r dark:bg-[#1E0102]' : 'bg-zinc-800 cursor-pointer hover:-translate-y-1 hover:bg-zinc-950 dark:bg-[#290102] dark:hover:bg-[#3E0102]'} py-3 px-5 rounded-[40px] font-Hind_Guntur text-sm text-white font-bold uppercase outline-none transition duration-300  dark:text-white `}
        type='submit'
        value='Enviar'
      />
      {response && <div className='absolute left-1/2 -translate-x-1/2 bottom-20 text-zinc-950 dark:text-white font-Hind_Vadodara'>{response}</div>}
      {loading && <IconLoader />}
    </form>
  )
}

export default ContactForm
