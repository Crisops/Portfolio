import { useEffect, useRef, useState } from 'react'
import { BgAboutLava } from './Icons'

const SectionAbout = () => {
  const [lava, setLava] = useState(false)
  const [size, setSize] = useState(null)
  const [changeSize, setChangeSize] = useState({})

  const container = useRef(null)

  useEffect(() => {
    const { width, height } = container.current.getBoundingClientRect()
    const theme = window.localStorage.getItem('theme')

    setChangeSize({ ...changeSize, width, height, theme })

    setLava(true)

    window.addEventListener('resize', setSize)
    return () => {
      window.removeEventListener('resize', setSize)
      setLava(false)
    }
  }, [size])

  return (
    <section ref={container} id='about' className='relative w-full h-screen'>
      <div className='absolute w-full h-full'>
        {lava && <BgAboutLava props={changeSize} />}
      </div>
    </section>
  )
}

export default SectionAbout
