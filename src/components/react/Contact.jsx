import ContactForm from './ContactForm'

const Contact = ({ children }) => {
  return (
    <div className='absolute w-[50vw] h-screen max-[1279px]:w-[100vw] flex items-center max-[1024px]:items-center justify-center group'>
      <ContactForm>
        {children}
      </ContactForm>
    </div>
  )
}

export default Contact
