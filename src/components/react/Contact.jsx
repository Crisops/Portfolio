import ContactForm from './ContactForm'

const Contact = ({ children }) => {
  return (
    <div className='absolute w-[50vw] h-screen max-[1279px]:w-[100vw] flex items-center max-[1024px]:items-center justify-center group'>
      <div className='relative flex justify-center items-center w-[650px] h-[650px] z-10 max-[1536px]:w-[530px] max-[1536px]:h-[530px] max-[1024px]:mt-0 max-[1024px]:w-[600px] max-[1024px]:h-[600px] max-[640px]:w-[470px] max-[640px]:h-[470px] max-[500px]:w-[350px] max-[500px]:h-[350px]'>
        {children}
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
