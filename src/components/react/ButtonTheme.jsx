import { useEffect, useState } from 'react'
import { IconDark, IconLight } from './Icons.jsx'

const ButtonTheme = () => {
  const [iconTheme, setIconTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'left-2' : 'right-2')
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null
  )

  useEffect(() => {
    if (theme) {
      (window.localStorage.getItem('theme') === 'null')
        ? document.documentElement.classList.remove('dark')
        : document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const getTheme = (window.localStorage.getItem('theme') === 'null')

  const handleChangeTheme = () => {
    if (theme) {
      setIconTheme('right-2')
      window.localStorage.setItem('theme', null)
      setTheme(null)
    } else {
      setIconTheme('left-2')
      window.localStorage.setItem('theme', 'dark')
      setTheme(window.localStorage.getItem('theme'))
    }
  }

  return (
    <div className='absolute z-[2] w-full h-full flex items-center justify-around'>
      <span onClick={handleChangeTheme} className={`absolute ${getTheme ? 'right-2' : iconTheme} w-[26px] h-[26px] bg-gradient-to-r from-[#232123]  to-[#BEBEBE] dark:bg-gradient-to-r dark:from-[#4E0601] dark:via-[#C9040C] dark:to-[#F95E04] rounded-full transition-colors duration-300 cursor-pointer`}></span>
      <IconDark handleChangeTheme={handleChangeTheme} />
      <IconLight handleChangeTheme={handleChangeTheme} />
    </div>
  )
}

export default ButtonTheme
