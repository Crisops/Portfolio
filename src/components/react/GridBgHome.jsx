import { useEffect, useState, useRef } from 'react'
import { animeGridHome } from '../../helpers/anime'

const GridBgHome = ({ children }) => {
  const [column, setColumn] = useState(Math.floor(document.body.clientWidth / 50))
  const [row, setRow] = useState(Math.floor(document.body.clientHeight / 50))
  const [total, setTotal] = useState(0)
  const [sizeWindow, setSizeWindow] = useState(null)

  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null
  )

  const item = useRef(null)

  useEffect(() => {
    handleSize()
    if (window.localStorage.getItem('theme')) {
      setTheme(window.localStorage.getItem('theme'))
    } else {
      window.localStorage.setItem('theme', theme)
    }

    window.addEventListener('resize', (e) => setSizeWindow(e.target.innerWidth))

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [sizeWindow])

  const handleSize = () => {
    setColumn(Math.floor(document.body.clientWidth / 50))
    setRow(Math.floor(document.body.clientHeight / 50))
    setTotal(column * row)
  }

  const handleClick = (id) => {
    animeGridHome(id, column, row)
    setTimeout(() => {
      const rect = document.querySelectorAll(`#${item.current.id}`)
      const array = Array.from(rect)
      array.forEach(el => el.style.removeProperty('background-color'))
    }, 4000)
  }

  return (
    <div className='absolute w-full h-full grid grid-cols-16 auto-rows-[50px] dark:bg-[#0F0101]'>
      {children}
      {

        [...Array(total)].map((rect, index) => (
          <div key={index} ref={item} id='item' className='bg-white dark:bg-[#0F0101] hover:bg-gray-100 dark:hover:bg-[#0C0101]' onClick={() => handleClick(index)}></div>
        ))

      }
    </div>
  )
}

export default GridBgHome
