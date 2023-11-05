import { useRef, useState } from 'react'
import HeroMenuLinks from './HeroMenuLinks'
import LinkMenu from './LinkMenu'
import MenuButtonLinks from './MenuButtonLinks'

const MenuNavbar = () => {
  const [hero, setHero] = useState(false)

  const heroMenu = useRef(null)
  const heroMenuLinks = useRef(null)

  const handleHeroMenu = () => {
    if (hero) {
      heroMenu.current.style.transform = 'translateX(-100%)'
      heroMenuLinks.current.style.transform = 'translateX(-100%)'
      setHero(!hero)
      return
    }
    heroMenu.current.style.transform = 'translateX(0%)'
    heroMenuLinks.current.style.transform = 'translateX(0%)'
    setHero(!hero)
  }

  const handleLinkHero = () => {
    if (hero) {
      heroMenu.current.style.transform = 'translateX(-100%)'
      heroMenuLinks.current.style.transform = 'translateX(-100%)'
      setHero(!hero)
    }
  }

  const links = [
    {
      id: 'home',
      title: 'Inicio'
    },
    {
      id: 'about',
      title: 'Acerca'
    },
    {
      id: 'skills',
      title: 'Habilidades'
    },
    {
      id: 'projects',
      title: 'Proyectos'
    },
    {
      id: 'contact',
      title: 'Contacto'
    }
  ]

  return (
    <>
      <MenuButtonLinks handleHeroMenu={handleHeroMenu} heroState={hero} />
      <HeroMenuLinks links={links} refHero={heroMenu} refHeroLinks={heroMenuLinks} handleLinkHero={handleLinkHero} heroState={hero} />
      <div className='max-lg:hidden fixed z-[51] right-0 bottom-0 w-40 h-48 pr-8 max-xl:top-8 max-xl:right-14 max-xl:w-1/2 max-xl:h-5'>
        <nav className='relative w-full h-full border-r-4 border-black flex pb-1 dark:border-[#4E0601] max-xl:border-none max-xl:dark:border-none'>
          <ul className='relative right-8 flex flex-grow flex-col max-xl:flex-row justify-between gap-1'>
            {
            links.map((el, index) => (
              <li key={index} className='relative flex-grow text-right before:content-[""] before:absolute before:w-8 before:h-[3px] before:bg-black before:top-1/2 dark:before:bg-[#4E0601]  max-xl:before:h-0 max-xl:dark:before:h-0'><LinkMenu id={el.id} title={el.title} /></li>
            ))
          }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MenuNavbar
