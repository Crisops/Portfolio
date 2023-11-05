import { animateImg } from '../../helpers/anime'
import { useRef } from 'react'

const AnimateImg = () => {
  const image = useRef()

  setTimeout(() => {
    const value = image.current.id
    animateImg(value)
  }, 500)

  return (
    <div className='relative'>
      <div className='relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[60%] min-[1800px]:w-[60%] min-[1700px]:w-[65%] min-[1600px]:w-[70%] min-[1536px]:w-[75%] max-[1536px]:w-[30%] max-[1536px]:h-[80%] max-[1400px]:w-[30%] max-[1200px]:w-[40%] max-[1100px]:w-[45%] max-[1000px]:w-[50%] max-[900px]:w-[60%] max-[700px]:w-[75%] h-[60%] grid grid-cols-16 auto-rows-[50px]'>
        <div ref={image} id='cub' className='absolute animate-fade animate-once animate-duration-1000 animate-alternate w-full h-full bg-[url("/img/me.webp")] bg-cover bg-center bg-no-repeat'></div>
      </div>
    </div>
  )
}

export default AnimateImg
