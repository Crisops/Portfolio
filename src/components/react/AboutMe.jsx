import { useEffect, useRef, useState } from 'react'

import { IconBookReader, IconGraduation, IconSurprise } from './Icons'

const AboutMe = () => {
  const section = useRef(null)

  const [line, setLine] = useState(false)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  // console.log(line)

  useEffect(() => {
    const sectionAbout = (entries) => {
      entries.forEach(entry => {
        // Aquí pasa toda la magia
        setLine(entry.isIntersecting)
      })
    }

    const observer = new window.IntersectionObserver(sectionAbout, options)

    observer.observe(section.current)
  }, [])

  return (
    <div ref={section} className='absolute top-0 left-0 flex w-[50vw] h-[100vh] px-20'>
      <div className='flex justify-evenly flex-col'>
        <div className='relative flex flex-grow items-center justify-center'>
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1  bg-gradient-to-t from-red-600 rounded-s opacity-0
          ${line && 'h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-ease-in opacity-100'}`}
          >
          </div>
          <IconGraduation focus={line} />
          <div className={`absolute bottom-0 w-1 bg-gradient-to-b from-red-600 to-[#FFFC00] opacity-0 
          ${line && 'h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[300ms] animate-ease-in opacity-100'}`}
          >
          </div>
        </div>
        <div className='relative flex flex-grow items-center justify-center'>
          <div className={`absolute top-0 w-1 h-[calc(50%-20px)] bg-gradient-to-t from-[#FFFC00] to-[#FFFC00] 
          ${line && 'h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[600ms] animate-ease-in opacity-100'}`}
          >
          </div>
          <IconBookReader focus={line} />
          <div className={`absolute bottom-0 w-1 h-[calc(50%-20px)] bg-gradient-to-b from-[#FFFC00] to-[#009DFF]
           ${line && 'h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[900ms] animate-ease-in opacity-100'}`}
          >
          </div>
        </div>
        <div className='relative flex flex-grow items-center justify-center'>
          <div className={`absolute top-0 w-1 h-[calc(50%-20px)] bg-gradient-to-b from-[#009DFF] to-[#009DFF] rounded-es
          ${line && 'h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[1200ms] animate-ease-in opacity-100'}`}
          >
          </div>
          <IconSurprise focus={line} />
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-[calc(50%-20px)] bg-gradient-to-b from-[#009DFF] rounded-e
           ${line && 'h-[calc(50%-20px)] animate-flip-down animate-once animate-duration-300 animate-delay-[1500ms] animate-ease-in opacity-100'}`}
          >
          </div>
        </div>
      </div>
      <div className='flex-grow flex flex-col [&>article]:flex-grow [&>article]:flex [&>article]:flex-col [&>article]:justify-center [&>article]:pl-4'>
        <article className='[&>p]:max-w-lg pt-7'>
          <h3 className={`font-Hind_Vadodara text-2xl font-bold text-red-600 uppercase opacity-0
           ${line && 'animate-fade animate-once animate-duration-300 animate-delay-[400ms] animate-ease-in opacity-100'}`}
          >Educación
          </h3>
          <p className={`text-zinc-600 font-Crimson_Pro text-base opacity-0
           ${line && 'animate-fade animate-once animate-duration-300 animate-delay-[410ms] animate-ease-in opacity-100'}`}
          >Tecnólogo en Análisis y Desarrollo de Sistemas de Información que estudié en el SENA y me gradué en 2021.
          </p>
        </article>
        <article className='[&>div>p]:max-w-lg'>
          <div className='flex-grow flex items-end basis-0'>
            <h3 className={`font-Hind_Vadodara text-2xl font-bold text-yellow-500 uppercase 
             ${line && 'animate-fade animate-once animate-duration-300 animate-delay-[700ms] animate-ease-in opacity-100'}`}
            >Un poco sobre mí
            </h3>
          </div>
          <div className='flex-grow flex items-start basis-0'>
            <p className={`text-zinc-600 font-Crimson_Pro text-base
            ${line && 'animate-fade animate-once animate-duration-300 animate-delay-[710ms] animate-ease-in opacity-100'}`}
            >Soy un aprendiz de la tecnología. Las cosas que he aprendido en estos 2 años han sido fabulosas, mi auto dedicación y esfuerzo me han llevado a lo que soy hoy. En general me gusta compartir con la gente, me gusta compartir ideas porque siento y pienso que es la base para seguir aprendiendo y creciendo laboralmente.
            </p>
          </div>
        </article>
        <article className='[&>p]:max-w-lg'>
          <h3 className={`font-Hind_Vadodara text-2xl font-bold text-sky-500 uppercase
          ${line && 'animate-fade animate-once animate-duration-300 animate-delay-[1300ms] animate-ease-in opacity-100'}`}
          >Objetivos y Metas
          </h3>
          <p className={`text-zinc-600 font-Crimson_Pro text-base
           ${line && 'animate-fade animate-once animate-duration-300 animate-delay-[1310ms] animate-ease-in opacity-100'}`}
          >Finalmente soy una persona apasionada por lo que hace y que quiere convertirse en un gran desarrollador FROND-END.
          </p>
        </article>
      </div>
    </div>
  )
}

export default AboutMe
