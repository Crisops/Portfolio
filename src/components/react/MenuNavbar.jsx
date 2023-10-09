import LinkMenu from './LinkMenu'

const MenuNavbar = () => {
  const links = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <div className='fixed z-50 right-0 bottom-0 w-40 h-48 pr-8'>
      <nav className='relative w-full h-full border-r-2 border-[#4E0601] flex'>
        <ul className='flex flex-grow flex-col justify-between'>
          {
            links.map((el, index) => (
              <li key={index} className='bg-red-400 flex-grow text-right pr-4'> <LinkMenu title={el} /></li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default MenuNavbar
