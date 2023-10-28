import { useEffect, useRef, useState } from 'react'

const LinkMenu = ({ id, title }) => {
  const link = useRef()

  const [entrySection, setEntrySection] = useState('home')
  const [color, setColor] = useState('text-[#FF0000]')

  const allSection = document.querySelectorAll('section')

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  }

  useEffect(() => {
    if (entrySection === 'about' && entrySection === id) {
      setColor('text-[#000000]')
    } else {
      if (entrySection === id) {
        setColor('text-[#FF0000]')
      } else {
        setColor('text-[#BEBEBE]')
      }
    }
  }, [entrySection])

  const sectionIntersecting = (entries) => {
    entries.forEach(entry => {
      const { isIntersecting, target } = entry
      if (isIntersecting) {
        setEntrySection(target.id)
      }
    })
  }

  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(sectionIntersecting, options)
  allSection.forEach(section => {
    observer.observe(section)
  })

  return (

    <a href={`#${id}`} ref={link} className={`relative flex w-full h-full justify-end items-center uppercase pr-2 ${color} font-bold text-sm font-Crimson_Pro hover:text-red-300`}>{title}</a>

  )
}

export default LinkMenu
