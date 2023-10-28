import Atropos from 'atropos/react'
import 'atropos/css'
import CardFooter from './CardFooter'
import CardImage from './CardImage'

const Card = ({ ...c }) => {
  const { handleEnter, handLeave, overlay, tape, urlImg, overlayHover, urlGithub, urlSite } = c

  return (
    <Atropos
      className='relative w-[500px] h-[420px] rounded-lg'
      activeOffset={50}
      shadowScale={0.6}
      duration={100}
      rotateXMax={3}
      rotateYMax={3}
      onEnter={handleEnter}
      onLeave={handLeave}
      rotate
    >
      <div ref={overlay} className='absolute w-full h-full bg-gradient-to-t from-black z-[2] rounded-lg transition-transform duration-300'></div>
      <CardImage urlImg={urlImg} />
      <div ref={tape} className='absolute -top-3 -left-14 flex justify-center items-end w-44 h-20 bg-[#ff0000] px-10 -rotate-45 transition duration-300 dark:bg-[#FA4003]'>
        <span className='text-white font-bold font-Hind_Guntur text-sm text-center'>Landing Page Instagram</span>
      </div>
      <div ref={overlayHover} className='absolute w-full h-full bg-gradient-to-t from-[#ff00009c] from-10% via-transparent to-transparent z-[2] rounded-lg translate-y-full transition-transform duration-300 pointer-events-none dark:from-[#ff66009c]'></div>
      <CardFooter urlGithub={urlGithub} urlSite={urlSite} />
    </Atropos>
  )
}

export default Card
