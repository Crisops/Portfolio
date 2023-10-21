import { useContext, useEffect, useRef, useState } from 'react'
import { BgAboutLava } from './Icons'
import AboutMe from './AboutMe'
import ThemeContext from '../../context/ThemeContext'

const SectionAbout = () => {
  const [lava, setLava] = useState(false)
  const [size, setSize] = useState(null)
  const [changeSize, setChangeSize] = useState({})

  const container = useRef(null)

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const { width, height } = container.current.getBoundingClientRect()

    setChangeSize({ ...changeSize, width, height, theme })

    setLava(true)

    window.addEventListener('resize', setSize)
    return () => {
      window.removeEventListener('resize', setSize)
      setLava(false)
    }
  }, [size, theme])

  return (
    <section ref={container} id='about' className='relative w-full h-screen bg-white dark:bg-[#0F0101]'>
      <AboutMe />
      <div className='absolute w-full h-full'>
        {lava && <BgAboutLava props={changeSize} />}
      </div>
    </section>
  )
}

export default SectionAbout
