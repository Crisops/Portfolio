import { useState } from 'react'
import { FlagEs, FlagUs } from './Icons.jsx'

const ButtonLanguage = () => {
  const [flagBtn, setFlagBtn] = useState('right-2')

  const handleChangeLanguage = () => {
    if (flagBtn === 'right-2') {
      setFlagBtn('left-2')
      document.documentElement.setAttribute('lang', 'es')
    } else {
      setFlagBtn('right-2')
      document.documentElement.setAttribute('lang', 'en')
    }
  }

  return (
    <div className='relative w-[86px] h-8 rounded-3xl bg-gradient-to-r from-[#232123]  to-[#BEBEBE] before:absolute before:inset-[1px] before:bg-white before:rounded-3xl dark:before:bg-[#0F0101]'>
      <div className='absolute z-[2] w-full h-full flex items-center justify-around'>
        <span onClick={handleChangeLanguage} className={`absolute ${flagBtn} w-[26px] h-[26px] bg-gradient-to-r from-[#232123]  to-[#BEBEBE] rounded-full transition duration-500 hover:cursor-pointer`}></span>
        <FlagEs />
        <FlagUs />
      </div>
    </div>
  )
}

export default ButtonLanguage
