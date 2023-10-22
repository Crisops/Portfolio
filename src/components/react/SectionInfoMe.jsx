import { useEffect } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'

import InfoMe from './InfoMe'

const SectionInfoMe = ({ children }) => {
  const theme = (window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : null

  useEffect(() => {
    (!window.localStorage.getItem('theme')) && window.localStorage.setItem('theme', theme)
  }, [])

  return (
    <>
      <ThemeProvider>
        <InfoMe buttons={children} />
      </ThemeProvider>
    </>
  )
}

export default SectionInfoMe
