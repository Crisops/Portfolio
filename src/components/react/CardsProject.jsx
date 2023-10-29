import { useRef } from 'react'
import Card from './Card'

const CardProject = ({ urlImg, urlGithub, urlSite }) => {
  const overlay = useRef(null)
  const tapeHover = useRef(null)
  const tape = useRef(null)
  const overlayHover = useRef(null)

  const handleEnter = () => {
    overlay.current.style.transform = 'translateY(100%)'
    tape.current.style.transform = 'translateY(-100%)'
    tapeHover.current.style.transform = 'translateY(-60%)'
    overlayHover.current.style.transform = 'translateY(0%)'
  }

  const handLeave = () => {
    overlay.current.style.transform = 'translateY(0%)'
    tape.current.style.transform = 'translateY(0%)'
    tape.current.style.transform = 'rotate(-45deg)'
    tapeHover.current.style.transform = 'translateY(0%)'
    overlayHover.current.style.transform = 'translateY(100%)'
  }

  return (
    <article className='relative'>
      <div ref={tapeHover} className='absolute -top-0 left-0 flex justify-center items-start w-44 h-24 bg-[#FA3538] rounded-tl-lg rounded-tr-lg py-2 transition duration-1000 dark:bg-[#FA4003]'>
        <span className='text-white font-bold font-Hind_Guntur text-sm text-center uppercase'>Landing Page Instagram</span>
      </div>
      <Card
        handleEnter={handleEnter}
        handLeave={handLeave}
        overlay={overlay}
        tape={tape}
        urlImg={urlImg}
        overlayHover={overlayHover}
        urlGithub={urlGithub}
        urlSite={urlSite}
      />
    </article>
  )
}

export default CardProject
