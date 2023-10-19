const ContactInput = ({ className, type, name, id, placeholder, value }) => {
  return (
    <div className='relative w-[400px] flex justify-center'>
      <input className={className} type={type} name={name} id={id} placeholder={placeholder} value={value} />
    </div>
  )
}

export default ContactInput
