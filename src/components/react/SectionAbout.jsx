import { useContext, useEffect, useRef, useState } from 'react'
import { BgAboutLava } from './Icons'
import AboutMe from './AboutMe'
import ThemeContext from '../../context/ThemeContext'
import GridBgHome from './GridBgHome'

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
      <div className='hidden max-[1024px]:block absolute w-full h-full'>
        <GridBgHome />
      </div>
      <div className='absolute block max-[1024px]:hidden w-full h-full'>
        {lava && <BgAboutLava props={changeSize} />}
      </div>
      <div className='hidden max-[1024px]:block absolute top-1/2 -right-36 w-[584px] h-96 max-[850px]:w-96 max-[850px]:h-60 bg-gradient-to-r from-[#FFFC59] via-[#59AFFF] to-[#FF5959] rounded-full rotate-45 blur-[20px] dark:from-[#C9040C] dark:to-[#FA4003] dark:blur-[100px]'>
      </div>
      <div className='hidden max-[1024px]:block absolute top-1/4 -left-36 w-72 h-48 max-[850px]:w-60 max-[850px]:h-40 bg-gradient-to-r from-[#FF5959] to-[#FFFC59] rounded-full -rotate-45 blur-[40px] dark:from-transparent dark:to-transparent'>
      </div>
    </section>
  )
}

export default SectionAbout
