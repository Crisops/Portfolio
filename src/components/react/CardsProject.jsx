import { useRef } from 'react'

import Atropos from 'atropos/react'
import 'atropos/css'
import FooterProjects from './FooterProjects'

const CardProject = ({ urlImg, urlGithub }) => {
  const overlay = useRef(null)
  const cardProjectHover = useRef(null)
  const cardProject = useRef(null)
  const overlayHover = useRef(null)

  const handleEnter = () => {
    overlay.current.style.transform = 'translateY(100%)'
    cardProject.current.style.transform = 'translateY(-100%)'
    cardProjectHover.current.style.transform = 'translateY(-60%)'
    overlayHover.current.style.transform = 'translateY(0%)'
  }

  const handLeave = () => {
    overlay.current.style.transform = 'translateY(0%)'
    cardProject.current.style.transform = 'translateY(0%)'
    cardProject.current.style.transform = 'rotate(-45deg)'
    cardProjectHover.current.style.transform = 'translateY(0%)'
    overlayHover.current.style.transform = 'translateY(100%)'
  }

  return (
    <article className='relative'>
      <div ref={cardProjectHover} class='absolute -top-0 left-0 flex justify-center items-start w-44 h-20 bg-[#FA3538] rounded-tl-lg rounded-tr-lg py-2 transition duration-1000'>
        <span class='text-white font-bold font-Hind_Guntur text-base text-center uppercase'>Layout Instagram</span>
      </div>
      <Atropos
        className='relative w-[500px] h-[420px] rounded-lg cursor-pointer'
        activeOffset={50}
        shadowScale={0.6}
        duration={100}
        rotateXMax={5}
        rotateYMax={5}
        onEnter={handleEnter}
        onLeave={handLeave}
        rotate
      >
        <div ref={overlay} className='absolute w-full h-full bg-gradient-to-t from-black z-[2] rounded-lg transition-transform duration-300'></div>
        <img className='absolute w-full h-full rounded-lg object-cover border border-black ' src={urlImg} alt='Clone Instagram' loading='lazy' />
        <div ref={cardProject} className='absolute -top-3 -left-14 flex justify-center items-end w-44 h-20 bg-[#ff0000] px-10 -rotate-45 transition duration-300'>
          <span className='text-white font-bold font-Hind_Guntur text-base text-center'>Layout Instagram</span>
        </div>
        <div ref={overlayHover} className='absolute w-full h-full bg-gradient-to-t from-[#ff00009c] from-10% via-transparent to-transparent z-[2] rounded-lg translate-y-full transition-transform duration-300'></div>
        <FooterProjects urlGithub={urlGithub} />
      </Atropos>
    </article>
  )
}

export default CardProject
