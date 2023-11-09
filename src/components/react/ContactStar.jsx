import { useEffect, useState } from 'react'
import { animeStar } from '../../helpers/anime'
import { getStart } from '../../helpers/starAndShoting'

const ContactStar = () => {
  const [quatityStar, setQuatityStar] = useState([])

  const STARS = 30

  useEffect(() => {
    const getSizeWindow = () => {
      const starts = getStart(STARS)
      const nodeStar = document.querySelectorAll('#star')

      setQuatityStar(starts)
      animeStar(nodeStar)
    }

    getSizeWindow()

    window.addEventListener('resize', getSizeWindow)

    return () => {
      window.removeEventListener('resize', getSizeWindow)
    }
  }, [quatityStar])

  return (
    <div className='absolute w-full h-full'>
      {
        quatityStar !== 0 &&
        quatityStar.map(el => (el))
      }
    </div>
  )
}

export default ContactStar
