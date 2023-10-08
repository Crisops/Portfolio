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
    <div className='absolute z-[2] w-full h-full flex items-center justify-around'>
      <span onClick={handleChangeLanguage} className={`absolute ${flagBtn} w-[26px] h-[26px] bg-gradient-to-r from-[#232123]  to-[#BEBEBE] rounded-full transition duration-500 hover:cursor-pointer`}></span>
      <FlagEs />
      <FlagUs />
    </div>
  )
}

export default ButtonLanguage
