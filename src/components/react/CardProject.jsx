import { useRef } from 'react'

import Atropos from 'atropos/react'
import 'atropos/css'
import FooterProjects from './FooterProjects'

const CardProject = ({ url, urlGithub }) => {
  const overlay = useRef(null)

  const handleEnter = () => {
    overlay.current.style.transform = 'translateY(100%)'
  }

  const handLeave = () => {
    overlay.current.style.transform = 'translateY(0%)'
  }

  return (
    <Atropos
      className='relative w-[500px] h-[450px] rounded-lg cursor-pointer'
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
      <img className='absolute w-full h-full rounded-lg object-cover border border-black ' src={url} alt='Clone Instagram' loading='lazy' />
      <FooterProjects urlGithub={urlGithub} />
    </Atropos>
  )
}

export default CardProject
