import { useState } from 'react'
import { IconDark, IconLight } from './Icons.jsx'

const ButtonTheme = () => {
  const [iconTheme, setIconTheme] = useState('right-2')

  const handleChangeTheme = () => {
    if (iconTheme === 'right-2') {
      setIconTheme('left-2')
      document.documentElement.classList.add('dark')
    } else {
      setIconTheme('right-2')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className='absolute z-[2] w-full h-full flex items-center justify-around'>
      <span onClick={handleChangeTheme} className={`absolute ${iconTheme} w-[26px] h-[26px] bg-gradient-to-r from-[#4E0601] via-[#C9040C] to-[#F95E04] rounded-full transition duration-500 hover:cursor-pointer`}></span>
      <IconDark />
      <IconLight />
    </div>
  )
}

export default ButtonTheme
