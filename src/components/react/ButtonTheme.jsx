import { useEffect, useState } from 'react'
import { IconDark, IconLight } from './Icons.jsx'

const ButtonTheme = () => {
  const [iconTheme, setIconTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'null')
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setIconTheme(window.localStorage.getItem('theme'))
    setTheme(window.localStorage.getItem('theme'));
    (theme === 'null')
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark')
  }, [theme])

  const handleChangeTheme = (e) => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', null)
      setTheme(e)
    } else {
      window.localStorage.setItem('theme', 'dark')
      setTheme(e)
    }
  }

  return (
    <div className='relative w-[86px] h-8 rounded-3xl bg-gradient-to-r from-[#232123]  to-[#BEBEBE] transition-colors duration-300 before:absolute before:inset-[1px] before:bg-white before:rounded-3xl before:transition-colors before:duration-300 dark:bg-gradient-to-r dark:from-[#190101] dark:via-[#A50002] dark:to-[#FF030B] dark:before:bg-[#0F0101]'>
      <div className='absolute z-[2] w-full h-full flex items-center justify-around'>
        <div className={`absolute ${iconTheme === 'dark' ? 'left-2' : 'right-2'} w-[26px] h-[26px] bg-gradient-to-r from-[#232123]  to-[#BEBEBE] dark:bg-gradient-to-r dark:from-[#4E0601] dark:via-[#C9040C] dark:to-[#F95E04] rounded-full transition-colors duration-300`}></div>
        <IconDark handleChangeTheme={handleChangeTheme} />
        <IconLight handleChangeTheme={handleChangeTheme} />
      </div>
    </div>
  )
}

export default ButtonTheme
