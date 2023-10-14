import { useEffect, useRef, useState } from 'react'

const LinkMenu = ({ id, title }) => {
  const link = useRef()

  const [entrySection, setEntrySection] = useState('')
  const [color, setColor] = useState('#FF0000')

  useEffect(() => {
    if (entrySection === 'about' && entrySection === id) {
      setColor('#000000')
    } else {
      if (entrySection === id) {
        setColor('#FF0000')
      } else {
        setColor('#BEBEBE')
      }
    }
  }, [entrySection])

  const allSection = document.querySelectorAll('section')

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  }

  const sectionIntersecting = (entries) => {
    entries.forEach(entry => {
      const { isIntersecting, target } = entry
      if (isIntersecting) {
        setEntrySection(target.id)
      }
    })
  }

  const observer = new window.IntersectionObserver(sectionIntersecting, options)

  allSection.forEach(section => {
    observer.observe(section)
  })

  return (

    <a href={`#${id}`} style={{ color }} ref={link} className='relative flex w-full h-full justify-end items-center uppercase pr-2 text-black font-bold text-sm font-Crimson_Pro'>{title}</a>

  )
}

export default LinkMenu
