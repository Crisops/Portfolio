import Atropos from 'atropos/react'
import 'atropos/css'
import CardFooter from './CardFooter'
import CardImage from './CardImage'

const Card = ({ ...c }) => {
  const { handleEnter, handLeave, overlay, tape, urlImg, overlayHover, urlGithub, urlSite } = c

  return (
    <Atropos
      className='relative w-[500px] h-[420px] max-[1536px]:w-[450px] max-[1536px]:h-[370px] max-[1280px]:w-[450px] max-[1280px]:h-[370px] max-[1050px]:w-[580px] max-[1050px]:h-[420px] max-[768px]:w-[530px] max-[768px]:h-[450px] max-[640px]:w-[330px] max-[640px]:h-[250px] rounded-lg'
      activeOffset={50}
      shadowScale={0.6}
      duration={100}
      rotateXMax={3}
      rotateYMax={3}
      onEnter={handleEnter}
      onLeave={handLeave}
      rotate
      highlight
    >
      <div ref={overlay} className='absolute w-full h-full bg-gradient-to-t from-black z-[2] rounded-lg transition-transform duration-300'></div>
      <CardImage urlImg={urlImg} />
      <div ref={tape} className='absolute -top-3 -left-14 flex justify-center items-end w-44 h-20 bg-[#ff0000] px-10 -rotate-45 transition duration-300 dark:bg-[#FA4003] max-sm:w-40 max-sm:h-[68px]'>
        <span className='text-white font-bold font-Hind_Guntur text-sm text-center max-sm:text-xs'>Landing Page Instagram</span>
      </div>
      <div ref={overlayHover} className='absolute w-full h-full bg-gradient-to-t from-[#ff00009c] from-10% via-transparent to-transparent z-[2]  translate-y-full transition-transform duration-300 pointer-events-none dark:from-[#ff66009c] rounded-lg'></div>
      <CardFooter urlGithub={urlGithub} urlSite={urlSite} />
    </Atropos>
  )
}

export default Card
