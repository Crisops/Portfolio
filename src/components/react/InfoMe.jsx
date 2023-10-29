import AnimateImg from './AnimateImg'
import HomeHeader from './HomeHeader'
import SectionAbout from './SectionAbout'

const InfoMe = ({ buttons }) => {
  return (
    <>
      <section id='home' className='relative w-screen h-screen bg-white grid grid-cols-2 dark:bg-[#0F0101]'>
        <HomeHeader />
        <div className='flex gap-9 flex-col justify-center pl-20'>
          <h1 className='text-9xl font-Crimson_Pro font-extrabold uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#FFB0B1] via-[#FF6567] to-[#FF0006] transition-colors duration-300 dark:bg-gradient-to-br dark:from-[#290102]  dark:via-[#A50002 ] dark:to-[#FF030B]'>Cristian Alejandro</h1>
          <p className='text-xl text-gray-800 font-Hind_Guntur font-light max-w-lg transition-colors duration-300 dark:text-gray-200'>¿Por qué dejar tus ideas en el aire cuando puedes hacerlas realidad?</p>
          {buttons}
        </div>
        <AnimateImg />
      </section>
      <SectionAbout />
    </>
  )
}

export default InfoMe
