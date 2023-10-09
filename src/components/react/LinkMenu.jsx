import { useEffect, useRef, useState } from 'react'

const LinkMenu = ({ id, title }) => {
  const link = useRef()

  const [entrySection, setEntrySection] = useState('')
  const [color, setColor] = useState('#FA3538')

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  }

  const sectionIntersecting = (entries) => {
    entries.forEach(entry => {
      const { isIntersecting, target } = entry
      if (isIntersecting) {
        setEntrySection(target.id)
      }
    })
  }

  useEffect(() => {
    const allSection = document.querySelectorAll('section')

    const observer = new IntersectionObserver(sectionIntersecting, options);

    (entrySection === link.current.getAttribute('href').slice(1))
      ? setColor('#FA3538')
      : setColor('#898989')

    allSection.forEach(section => {
      observer.observe(section)
    })
  }, [entrySection])

  return (

    <a href={`#${id}`} ref={link} className={`relative flex w-full h-full justify-end items-center uppercase pr-2 text-[${color}] font-bold text-sm font-Crimson_Pro`}>{title}</a>

  )
}

export default LinkMenu
