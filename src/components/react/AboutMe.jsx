import { useEffect, useRef, useState } from 'react'
import { IconBookReader, IconGraduation, IconSurprise } from './Icons'
import InfoMeAbout from './InfoMeAbout'
import Line from './Line'

const AboutMe = () => {
  const section = useRef(null)

  const [focusAbout, setFocusAbout] = useState(false)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  useEffect(() => {
    const sectionAbout = (entries) => {
      entries.forEach(entry => {
        setFocusAbout(entry.isIntersecting)
      })
    }

    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(sectionAbout, options)

    observer.observe(section.current)
  }, [])

  return (
    <div ref={section} className='absolute top-0 left-0 flex w-[50vw] h-[100vh] px-20 z-[2] max-[1536px]:px-10 max-[1280px]:px-10 max-[1024px]:px-10 max-[768px]:px-10 max-[1024px]:w-[100vw] max-sm:px-5'>
      <div className='flex justify-evenly flex-col'>
        <div className='relative flex flex-grow items-center justify-center'>
          <Line
            align='top-0'
            bgGradient='bg-gradient-to-t'
            fromGradient='from-red-600'
            rounded='rounded-s'
            animate='h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-ease-in opacity-100'
            focus={focusAbout}
            dark='dark:bg-gradient-to-t dark:from-[#FF030B]'
            darkDropShadow='dark:drop-shadow-[0px_0px_5px_#FF030B]'
          />
          <IconGraduation
            focus={focusAbout}
            animate='animate-fade-right animate-once animate-duration-300 animate-delay-[300ms] animate-ease-in opacity-100'
            fill='fill-red-600'
            darkFill='dark:fill-[#FF030B]'
            darkDropShadow='dark:drop-shadow-[0px_0px_15px_#FF030B]'
          />
          <Line
            align='bottom-0'
            bgGradient='bg-gradient-to-b'
            fromGradient='from-red-600'
            toGradient='to-[#FFFC00]'
            rounded='rounded-ss'
            animate='h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[300ms] animate-ease-in opacity-100'
            focus={focusAbout}
            dark='bg-gradient-to-b dark:from-[#FF030B] dark:to-[#FA4003]'
            darkDropShadow='dark:drop-shadow-[0px_0px_5px_#FF030B]'
          />
        </div>
        <div className='relative flex flex-grow items-center justify-center'>
          <Line
            align='top-0'
            bgGradient='bg-gradient-to-t'
            fromGradient='from-[#FFFC00]'
            toGradient='to-[#FFFC00]'
            rounded='rounded-es'
            animate='h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[600ms] animate-ease-in opacity-100'
            focus={focusAbout}
            dark='dark:bg-gradient-to-b dark:from-[#FA4003] dark:to-[#FA4003]'
            darkDropShadow='dark:drop-shadow-[0px_0px_5px_#FA4003]'
          />
          <IconBookReader
            focus={focusAbout}
            animate='animate-fade-right animate-once animate-duration-300 animate-delay-[600ms] animate-ease-in opacity-100'
            fill='fill-yellow-500'
            darkFill='dark:fill-[#FA4003]'
            darkDropShadow='dark:drop-shadow-[0px_0px_15px_#FA4003]'
          />
          <Line
            align='bottom-0'
            bgGradient='bg-gradient-to-b'
            fromGradient='from-[#FFFC00]'
            toGradient='to-[#FFFC00]'
            rounded='rounded-ss'
            animate='h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[900ms] animate-ease-in opacity-100'
            focus={focusAbout}
            dark='dark:bg-gradient-to-b dark:from-[#FA4003] dark:to-[#F98804]'
            darkDropShadow='dark:drop-shadow-[0px_0px_5px_#FA4003]'
          />
        </div>
        <div className='relative flex flex-grow items-center justify-center'>
          <Line
            align='top-0'
            bgGradient='bg-gradient-to-b'
            fromGradient='from-[#FFFC00]'
            toGradient='to-[#009DFF]'
            rounded='rounded-es'
            animate='h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[1200ms] animate-ease-in opacity-100'
            focus={focusAbout}
            dark='dark:bg-gradient-to-b dark:from-[#F98804] dark:to-[#F98804]'
            darkDropShadow='dark:drop-shadow-[0px_0px_5px_#F98804]'
          />
          <IconSurprise
            focus={focusAbout}
            animate='animate-fade-right animate-once animate-duration-300 animate-delay-[1200ms] animate-ease-in opacity-100'
            fill='fill-sky-500'
            darkFill='dark:fill-[#F98804]'
            darkDropShadow='dark:drop-shadow-[0px_0px_15px_#F98804]'
          />
          <Line
            align='bottom-0'
            bgGradient='bg-gradient-to-b'
            fromGradient='from-[#009DFF]'
            rounded='rounded-e'
            animate='h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[1500ms] animate-ease-in opacity-100'
            focus={focusAbout}
            dark='dark:bg-gradient-to-b dark:from-[#F98804]'
            darkDropShadow='dark:drop-shadow-[0px_0px_5px_#F98804]'
          />
        </div>
      </div>
      <div className='flex-grow flex flex-col [&>article]:flex-grow [&>article]:flex [&>article]:flex-col [&>article]:justify-center [&>article]:pl-4 max-sm:[&>article]:px-4'>
        <InfoMeAbout
          title='Educación'
          description='Tecnólogo en Análisis y Desarrollo de Sistemas de Información realizado en el (SENA) "Servicio Nacional de Aprendizaje" '
          colorTitle='text-red-600'
          colorDescription='text-zinc-600'
          animateTitle='animate-fade animate-once animate-duration-300 animate-delay-[400ms] animate-ease-in opacity-100'
          animateDescription='animate-fade animate-once animate-duration-300 animate-delay-[410ms] animate-ease-in opacity-100'
          focus={focusAbout}
          darkTitle='dark:text-[#FF030B]'
          darkDescription='dark:text-zinc-200'
        />
        <InfoMeAbout
          title='Un poco sobre mí'
          description='Soy un aprendiz de la tecnología. Las cosas que he aprendido en estos 2 años han sido fabulosas, mi auto dedicación y esfuerzo me han llevado a lo que soy hoy en día. En general me gusta compartir con la gente y sobre todo compartir ideas porque siento y pienso que es la base para seguir aprendiendo y creciendo laboralmente.'
          colorTitle='text-yellow-500'
          colorDescription='text-zinc-600'
          animateTitle='animate-fade animate-once animate-duration-300 animate-delay-[700ms] animate-ease-in opacity-100'
          animateDescription='animate-fade animate-once animate-duration-300 animate-delay-[710ms] animate-ease-in opacity-100'
          focus={focusAbout}
          darkTitle='dark:text-[#FA4003]'
          darkDescription='dark:text-zinc-200'
        />
        <InfoMeAbout
          title='Objetivos y Metas'
          description='Finalmente soy una persona apasionada por lo que hace y que quiere convertirse en un gran desarrollador FROND-END.'
          colorTitle='text-sky-500'
          colorDescription='text-zinc-600'
          animateTitle='animate-fade animate-once animate-duration-300 animate-delay-[1300ms] animate-ease-in opacity-100'
          animateDescription='animate-fade animate-once animate-duration-300 animate-delay-[1310ms] animate-ease-in opacity-100'
          focus={focusAbout}
          darkTitle='dark:text-[#F98804]'
          darkDescription='dark:text-zinc-200'
        />
      </div>
    </div>
  )
}

export default AboutMe
