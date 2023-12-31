const ContactInput = ({ className, type, name, id, placeholder, value, handleChange, handleChangeKeyUp, error, limitCharStart, limitCharEnd }) => {
  return (
    <div className='relative w-[400px] max-[1536px]:w-[350px] max-[1024px]:w-[400px] max-[640px]:w-[320px] flex justify-center'>
      <label className='absolute left-5 top-1/2 bg-white -translate-y-1/2 text-sm font-Hind_Guntur text-neutral-400 dark:text-neutral-500 transition-all duration-100 ease-in dark:bg-[#0F0101]' htmlFor={id}>{placeholder}</label>
      <input
        id={id}
        type={type}
        onChange={handleChange}
        onKeyUp={handleChangeKeyUp}
        className={className}
        name={name}
        value={value}
        autoComplete='off'
      />
      {error && <div className='absolute w-full left-0 -bottom-4 text-red-600 font-semibold font-Hind_Vadodara text-xs'>{error}</div>}
      <div className='absolute right-3 bottom-[1px] pointer-events-none'>
        <span className={`text-[10px] ${parseInt(limitCharStart) > limitCharEnd ? 'text-red-600' : 'text-neutral-500 '} font-semibold font-Crimson_Pro`}>{limitCharEnd && `${limitCharStart}${limitCharEnd}`}</span>
      </div>
    </div>
  )
}

export default ContactInput
