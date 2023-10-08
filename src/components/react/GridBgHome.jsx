import { useEffect, useState } from 'react'
import { animeItem } from '../../helpers/anime'

const GridBgHome = ({ children }) => {
  const [column, setColumn] = useState(Math.floor(document.body.clientWidth / 50))
  const [row, setRow] = useState(Math.floor(document.body.clientHeight / 50))
  const [total, setTotal] = useState(0)
  const [sizeWindow, setSizeWindow] = useState(null)

  useEffect(() => {
    handleSize()

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
    animeItem(id, column, row)
  }

  return (
    <div className='absolute w-full h-full grid grid-cols-16 auto-rows-[50px]'>
      {children}
      {

        [...Array(total)].map((rect, index) => (
          <div key={index} id='item' className='bg-white' onClick={() => handleClick(index)}></div>
        ))

      }
    </div>
  )
}

export default GridBgHome
