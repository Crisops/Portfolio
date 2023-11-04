const ContactInputTextArea = ({ handleChange, handleChangeKeyUp, error, value, limitCharStart, limitCharEnd }) => {
  return (
    <div className='relative w-[400px]'>
      <label htmlFor='message' className='absolute left-5 top-8 bg-white -translate-y-1/2 text-sm font-Hind_Guntur text-neutral-400 dark:text-neutral-500 transition-all duration-100 ease-in dark:bg-[#0F0101]'>Mensaje</label>
      <textarea onChange={handleChange} onKeyUp={handleChangeKeyUp} className='relative w-full max-h-20 font-Hind_Guntur text-sm bg-transparent border border-solid border-neutral-300 px-5 py-5 rounded-[40px] resize-none outline-none dark:border-zinc-800/80 dark:text-white' name='message' id='message' value={value}></textarea>
      {error && <div className='absolute w-full left-0 -bottom-4 text-red-600 font-semibold font-Hind_Vadodara text-xs'>{error}</div>}
      <div className='absolute right-3 bottom-[1px] pointer-events-none'>
        <span className={`text-[10px] ${parseInt(limitCharStart) > limitCharEnd ? 'text-red-600' : 'text-neutral-500 '} font-semibold font-Crimson_Pro`}>{limitCharEnd && `${limitCharStart}${limitCharEnd}`}</span>
      </div>
    </div>
  )
}

export default ContactInputTextArea
