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
      <section id='home' className='relative w-screen h-screen bg-white grid grid-cols-2 dark:bg-[#0F0101]'>
        <HomeHeader />
        <GridBgHome />
        <div className='flex gap-9 flex-col justify-center pl-20'>
          <h1 className='animate-fade-right animate-duration-500 animate-ease-in text-9xl font-Crimson_Pro font-extrabold uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#FFB0B1] via-[#FF6567] to-[#FF0006] dark:bg-gradient-to-br dark:from-[#290102]  dark:via-[#A50002 ] dark:to-[#FF030B]'>Cristian Alejandro</h1>
          <TypeIt
            options={{
              speed: 30,
              startDelay: 600,
              waitUntilVisible: true
            }}
            className='text-xl text-zinc-700 font-Hind_Guntur font-light max-w-lg transition-colors duration-300 dark:text-zinc-200 z-50'
            as='p'
            getBeforeInit={handleTypeIt}
          />
          {buttons}
        </div>
        <AnimateImg />
      </section>
      <SectionAbout />
    </>
  )
}

export default InfoMe
