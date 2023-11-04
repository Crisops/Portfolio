import ContactForm from './ContactForm'

const Contact = ({ children }) => {
  return (
    <div className='absolute w-[50vw] h-screen flex items-center justify-center group'>
      <div className='relative flex justify-center items-center w-[650px] h-[650px] z-10'>
        {children}
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
