import { useState, useEffect, useRef } from 'react'
import { getStartShoting } from '../../helpers/starAndShoting'
import { animeStarShoting } from '../../helpers/anime'

const ContactShoting = () => {
  const [sizeWindow, setSizeWindow] = useState(null)
  const container = useRef()

  const [quatityStarShoting, setQuatityStarShoting] = useState([])

  const START_SHOTING = 10

  useEffect(() => {
    const getSizeWindow = () => {
      const { width, height } = container.current.getBoundingClientRect()
      const startsShoting = getStartShoting({ START_SHOTING, height, width })
      const nodeStarShoting = document.querySelectorAll('#starShoting')

      setQuatityStarShoting(startsShoting)

      setTimeout(() => {
        animeStarShoting(nodeStarShoting)
      }, 3000)
    }

    setSizeWindow(window.addEventListener('resize', getSizeWindow))

    return () => {
      window.removeEventListener('resize', getSizeWindow)
    }
  }, [sizeWindow])

  return (
    <div ref={container} className='relative w-[100vw] h-[100vh] -rotate-45'>
      {
        quatityStarShoting.length !== 0 &&
        quatityStarShoting.map(el => (el))
      }
    </div>
  )
}

export default ContactShoting
