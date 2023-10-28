const ContactInputTextArea = () => {
  return (
    <div className='relative w-[400px]'>
      <textarea className='relative w-full max-h-20 font-Hind_Guntur text-sm bg-transparent border border-solid border-neutral-300 px-5 py-5 rounded-[40px] resize-none outline-none dark:border-zinc-800/80 dark:text-white' name='message' id='message' placeholder='Mensaje'></textarea>
    </div>
  )
}

export default ContactInputTextArea
