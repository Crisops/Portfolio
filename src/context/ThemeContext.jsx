import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [iconTheme, setIconTheme] = useState(() =>
    // eslint-disable-next-line no-undef
    matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'null')
  const [theme, setTheme] = useState('')

  useEffect(() => {
    // eslint-disable-next-line no-undef
    setIconTheme(localStorage.getItem('theme'))
    // eslint-disable-next-line no-undef
    setTheme(localStorage.getItem('theme'));
    (theme === 'null')
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark')
  }, [theme])

  const handleChangeTheme = (e) => {
    if (theme === 'dark') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('theme', null)
      setTheme(e)
    } else {
      // eslint-disable-next-line no-undef
      localStorage.setItem('theme', 'dark')
      setTheme(e)
    }
  }

  const data = { theme, iconTheme, handleChangeTheme }

  return (
    <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContext
