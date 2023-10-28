import { useEffect } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'

import InfoMe from './InfoMe'

const SectionInfoMe = ({ children }) => {
  // eslint-disable-next-line no-undef
  const theme = (matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : null

  useEffect(() => {
    // eslint-disable-next-line no-undef
    (!localStorage.getItem('theme')) && window.localStorage.setItem('theme', theme)
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
