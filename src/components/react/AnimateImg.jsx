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
      <div className='relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[60%] h-[60%] max-[1536px]:w-[60%] max-[1536px]:h-[60%] max-[1450px]:h-[50%] max-[1279px]:w-[40%] max-[1279px]:h-[90%] max-[1024px]:w-[60%] max-[1024px]:h-[75%] max-[768px]:w-[50%] max-sm:w-[75%] max-sm:h-[80%] grid grid-cols-16 auto-rows-[50px]'>
        <div ref={image} id='cub' className='absolute animate-fade animate-once animate-duration-1000 animate-alternate w-full h-full bg-[url("Portfolio/img/me.webp")] bg-cover bg-center bg-no-repeat'></div>
      </div>
    </div>
  )
}

export default AnimateImg
