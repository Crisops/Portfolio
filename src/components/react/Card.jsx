import Atropos from 'atropos/react'
import 'atropos/css'
import CardFooterProjects from './CardFooterProject'
import CardImage from './CardImage'

const Card = ({ ...c }) => {
  const { handleEnter, handLeave, overlay, tape, urlImg, overlayHover, urlGithub } = c

  return (
    <Atropos
      className='relative w-[500px] h-[420px] rounded-lg'
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
      <CardImage urlImg={urlImg} />
      <div ref={tape} className='absolute -top-3 -left-14 flex justify-center items-end w-44 h-20 bg-[#ff0000] px-10 -rotate-45 transition duration-300'>
        <span className='text-white font-bold font-Hind_Guntur text-base text-center'>Layout Instagram</span>
      </div>
      <div ref={overlayHover} className='absolute w-full h-full bg-gradient-to-t from-[#ff00009c] from-10% via-transparent to-transparent z-[2] rounded-lg translate-y-full transition-transform duration-300'></div>
      <CardFooterProjects urlGithub={urlGithub} />
    </Atropos>
  )
}

export default Card
