import { useRef } from 'react'
import Card from './Card'

const CardProject = ({ urlImg, urlGithub }) => {
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
      <div ref={tapeHover} className='absolute -top-0 left-0 flex justify-center items-start w-44 h-20 bg-[#FA3538] rounded-tl-lg rounded-tr-lg py-2 transition duration-1000'>
        <span className='text-white font-bold font-Hind_Guntur text-base text-center uppercase'>Layout Instagram</span>
      </div>
      <Card
        handleEnter={handleEnter}
        handLeave={handLeave}
        overlay={overlay}
        tape={tape}
        urlImg={urlImg}
        overlayHover={overlayHover}
        urlGithub={urlGithub}
      />
    </article>
  )
}

export default CardProject
