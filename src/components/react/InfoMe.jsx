import AnimateImg from './AnimateImg'
import HomeHeader from './HomeHeader'
import SectionAbout from './SectionAbout'
import GridBgHome from './GridBgHome'
import TypeIt from 'typeit-react'

const InfoMe = ({ buttons }) => {
  const handleTypeIt = (instancie) => {
    instancie
      .type('¿Porque', { delay: 500 })
      .move(-3)
      .type(' ')
      .move(null, { to: 'END' })
      .pause(500)
      .delete(1)
      .type('é')
      .type(' dejar ideas en el aire')
      .pause(500)
      .move(-17)
      .type(' tus')
      .move(null, { to: 'END', instant: true })
      .type(' cuando puedes hacerlas realidad?')
    return instancie
  }

  return (
    <>
      <section id='home' className='relative w-screen h-screen grid grid-cols-2 max-2xl:grid-cols-none max-2xl:grid-rows-2 bg-white dark:bg-[#0F0101]'>
        <HomeHeader />
        <GridBgHome />
        <div className='flex gap-9 flex-col justify-center max-2xl:justify-end max-[1024px]:justify-center max-2xl:items-center 2xl pl-20 max-2xl:pr-20 max-md:px-0'>
          <h1 className='max-[1850px]:text-[7.5rem] max-[1750px]:text-[7rem] max-[1652px]:text-[6.5rem] max-[1652px]:text-8xl max-2xl:text-center max-2xl:mb-0 max-2xl:text-[7rem] max-[1280px]:text-[5.6rem] max-xl:max-w-2xl max-lg:text-8xl max-md:text-[5rem] max-[574px]:text-[4.5rem] max-[510px]:text-6xl max-[430px]:text-[3.5rem] animate-fade-right animate-duration-500 animate-ease-in text-9xl font-Crimson_Pro font-extrabold uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#FFB0B1] via-[#FF6567] to-[#FF0006] dark:bg-gradient-to-br dark:from-[#290102]  dark:via-[#A50002 ] dark:to-[#FF030B]'>Cristian Alejandro</h1>
          <div className='relative z-50'>
            <TypeIt
              options={{
                speed: 30,
                startDelay: 600,
                waitUntilVisible: true
              }}
              className='text-xl max-[1536px]:text-2xl max-[1281px]:text-xl  max-lg:text-2xl max-md:text-xl max-[574px]:text-lg max-[450px]:text-base max-[450px]:max-w-sm text-zinc-700 font-Hind_Guntur font-light max-w-lg max-[1536px]:max-w-2xl max-[1536px]:text-center max-md:max-w-lg transition-colors duration-300 dark:text-zinc-200 z-50'
              as='p'
              getBeforeInit={handleTypeIt}
            />
            {buttons}
          </div>
        </div>
        <AnimateImg />
      </section>
      <SectionAbout />
    </>
  )
}

export default InfoMe
