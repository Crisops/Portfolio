import AnimateImg from './AnimateImg'
import HomeHeader from './HomeHeader'
import SectionAbout from './SectionAbout'

const InfoMe = ({ buttons }) => {
  return (
    <>
      <section id='home' className='relative w-screen h-screen bg-white grid grid-cols-2 dark:bg-[#0F0101]'>
        <HomeHeader />
        <div className='flex gap-9 flex-col justify-center pl-20'>
          <h1 className='animate-jump-in animate-duration-1000 animate-delay-1000 text-9xl font-Crimson_Pro font-extrabold uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#FFB0B1] via-[#FF6567] to-[#FF0006] transition-colors duration-300 dark:bg-gradient-to-br dark:from-[#290102]  dark:via-[#A50002 ] dark:to-[#FF030B]'>Cristian Alejandro</h1>
          <p className='animate-fade animate-once animate-duration-[2000ms] animate-normal animate-delay-1000 text-xl text-gray-800 font-Hind_Guntur font-light max-w-lg transition-colors duration-300 dark:text-gray-200'>Why leave your ideas up in the air when you can make them come true?</p>
          {buttons}
        </div>
        <AnimateImg />
      </section>
      <SectionAbout />
    </>
  )
}

export default InfoMe
