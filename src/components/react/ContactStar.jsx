import { useEffect, useState } from 'react'
import { animeStar } from '../../helpers/anime'

const ContactStar = () => {
  const [sizeWindow, setSizeWindow] = useState(0)

  const [quatityStar, setQuatityStar] = useState([])

  const STARS = 20

  useEffect(() => {
    const getSizeWindow = () => {
      const starts = getStart()
      const nodeStar = document.querySelectorAll('#star')

      setQuatityStar([quatityStar, ...starts])
      animeStar(nodeStar)
    }

    getSizeWindow()

    setSizeWindow(window.addEventListener('resize', getSizeWindow))

    return () => {
      window.removeEventListener('resize', getSizeWindow)
    }
  }, [sizeWindow])

  const getStart = () => {
    const array = []
    for (let i = 0; i <= STARS; i++) {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const pl = `${Math.random() * vw}px`
      const pt = `${Math.random() * vh}px`

      const element = <i key={i} id='star' style={{ top: pt, left: pl }} className='absolute w-1 h-1 rounded-full bg-[radial-gradient(50%_50%_at_50%_50.67%,_#F95E04_0%,_#FA4003_40.63%,_#FF030B_100%)] drop-shadow-[0_0_10px_#FF1502] shadow-xl shadow-red-600 opacity-0'></i>
      array.push(element)
    }
    return array
  }

  return (
    <div className='relative'>
      {
        quatityStar !== 0 &&
        quatityStar.map(el => (el))
      }
    </div>
  )
}

export default ContactStar
