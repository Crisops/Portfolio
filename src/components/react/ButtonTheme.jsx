import { useContext } from 'react'
import { IconDark, IconLight } from './Icons.jsx'
import ThemeContext from '../../context/ThemeContext.jsx'

const ButtonTheme = () => {
  const { iconTheme, handleChangeTheme } = useContext(ThemeContext)

  return (
    <div className='relative z-[2] w-full h-full flex items-center justify-around'>
      {iconTheme !== 'dark' ? <IconDark handleChangeTheme={handleChangeTheme} /> : <IconLight handleChangeTheme={handleChangeTheme} />}
    </div>
  )
}

export default ButtonTheme
