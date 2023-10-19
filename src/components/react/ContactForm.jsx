import ContactInput from './ContactInput'
import ContactInputTextArea from './ContactInputTextArea'

const ContactForm = () => {
  return (
    <form className='absolute w-full h-full flex justify-center items-center flex-col gap-5'>
      <div className='flex flex-col justify-center items-center'>
        <span className='font-Hind_Guntur text-7xl text-zinc-950 font-bold uppercase dark:text-white'>¡Wow!</span>
        <span className='font-Hind_Guntur text-sm text-zinc-400 font-semibold dark:text-zinc-200'>Do you want to contact me ?</span>
      </div>
      <ContactInput
        className='relative w-full py-3 px-5 bg-transparent border border-solid border-neutral-300 rounded-[40px] text-sm font-Hind_Guntur text-neutral-900 outline-none dark:border-zinc-800/80 dark:text-white' type='text'
        name='name'
        id='name'
        placeholder='Write your name'
      />
      <ContactInput
        className='relative w-full py-3 px-5 bg-transparent border border-solid border-neutral-300 rounded-[40px] text-sm font-Hind_Guntur text-neutral-900 outline-none dark:border-zinc-800/80 dark:text-white'
        type='text
    ' name='subject'
        id='subject'
        placeholder='Subject'
      />
      <ContactInputTextArea />
      <ContactInput
        className='relative w-[150px] bg-zinc-800 py-3 px-5 rounded-[40px] font-Hind_Guntur text-sm text-white font-bold uppercase outline-none cursor-pointer transition duration-300 hover:bg-zinc-950 hover:-translate-y-1 dark:bg-[#290102] dark:text-white dark:hover:bg-[#3E0102]'
        type='submit'
        value='Submit'
      />
    </form>
  )
}

export default ContactForm
