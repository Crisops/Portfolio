import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
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

  const data = { theme, iconTheme, handleChangeTheme }

  return (
    <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContext
