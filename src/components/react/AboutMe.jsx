import { IconBookReader, IconGraduation, IconSurprise } from './Icons'

const AboutMe = () => {
  return (
    <div className='absolute top-0 left-0 flex w-[50vw] h-[100vh] px-20'>
      <div className='flex justify-evenly flex-col'>
        <div className='relative flex flex-grow items-center justify-center'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[calc(50%-20px)] bg-gradient-to-t from-red-600 rounded-s'></div>
          <IconGraduation />
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-[calc(50%-20px)] bg-gradient-to-b from-red-600 to-[#FFFC00] rounded-ss'></div>
        </div>
        <div className='relative flex flex-grow items-center justify-center'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[calc(50%-20px)] bg-gradient-to-t from-[#FFFC00] to-[#FFFC00]'></div>
          <IconBookReader />
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-[calc(50%-20px)] bg-gradient-to-b from-[#FFFC00] to-[#009DFF]'></div>
        </div>
        <div className='relative flex flex-grow items-center justify-center'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[calc(50%-20px)] bg-gradient-to-b from-[#009DFF] to-[#009DFF] rounded-es'></div>
          <IconSurprise />
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-[calc(50%-20px)] bg-gradient-to-b from-[#009DFF] rounded-e'></div>
        </div>
      </div>
      <div>
        Info Me
      </div>
    </div>
  )
}

export default AboutMe
