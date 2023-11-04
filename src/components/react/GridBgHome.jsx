import { useEffect, useState } from 'react'

const GridBgHome = () => {
  const [column, setColumn] = useState(Math.floor(document.body.clientWidth / 50))
  const [row, setRow] = useState(Math.floor(document.body.clientHeight / 50))
  const [total, setTotal] = useState(0)
  const [sizeWindow, setSizeWindow] = useState(null)

  useEffect(() => {
    handleSize()

    window.addEventListener('resize', (e) => setSizeWindow(e))
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [sizeWindow])

  const handleSize = () => {
    setColumn(Math.floor(document.body.clientWidth / 50))
    setRow(Math.floor(document.body.clientHeight / 50))
    setTotal(column * row)
  }

  return (
    <div className='absolute w-full h-full grid grid-cols-16 auto-rows-[50px] before:content-[""] before:absolute before:w-1/2 before:h-1/2 before:bg-gradient-to-r before:from-[#ffffff] after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-20 after:bg-gradient-to-t after:from-[#ffffff] dark:before:from-[#0F0101] dark:after:from-[#0F0101]'>
      {
        [...Array(total)].map((rect, index) => (
          <div key={index} id='item' className='border border-solid border-slate-100 dark:border-[#120001]'></div>
        ))
        }
    </div>
  )
}

export default GridBgHome
