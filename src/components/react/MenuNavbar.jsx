import LinkMenu from './LinkMenu'

const MenuNavbar = () => {
  const links = [
    {
      id: 'home',
      title: 'home'
    },
    {
      id: 'about',
      title: 'about'
    },
    {
      id: 'skills',
      title: 'skills'
    },
    {
      id: 'projects',
      title: 'projects'
    },
    {
      id: 'contact',
      title: 'contact'
    }
  ]

  return (
    <div className='fixed z-50 right-0 bottom-0 w-40 h-48 pr-8'>
      <nav className='relative w-full h-full border-r-4 border-black flex pb-1 dark:border-[#4E0601]'>
        <ul className='relative right-8 flex flex-grow flex-col justify-between gap-1'>
          {
            links.map((el, index) => (
              <li key={index} className='relative flex-grow text-right before:content-[""] before:absolute before:w-8 before:h-[3px] before:bg-black before:top-1/2 dark:before:bg-[#4E0601]'><LinkMenu id={el.id} title={el.title} /></li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default MenuNavbar
