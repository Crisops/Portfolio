import { IconCloseHero, IconMenuHero } from './Icons'

const MenuButtonLinks = ({ handleHeroMenu, heroState }) => {
  return (
    <button onClick={handleHeroMenu} className='hidden max-lg:flex flex-col justify-center items-center fixed top-5 max-sm:right-20 max-[1024px]:right-24 w-10 h-10 rounded-full z-[9999] dark:bg-none [&>span]:w-full [&>span]:h-[4px] [&>span]:bg-[#4E0601]  cursor-pointer [&>span]:transition [&>span]:duration-500 [&>span]:ease-in [&>span]:hover:bg-[#C70A01]'>
      {heroState ? <IconCloseHero /> : <IconMenuHero />}
    </button>
  )
}

export default MenuButtonLinks
