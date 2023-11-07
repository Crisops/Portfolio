import LinkMenu from './LinkMenu'

const HeroMenuLinks = ({ links, refHero, refHeroLinks, handleLinkHero, heroState }) => {
  return (
    <div ref={refHero} className='fixed top-0 left-0 w-full h-screen bg-white/40 backdrop-blur-sm z-[9998] -translate-x-full transition duration-500 ease-in dark:bg-[#090101]/80'>
      <div ref={refHeroLinks} className='relative top-0 left-0 w-60 h-screen bg-white border-r border-solid border-gray-300 -translate-x-full transition ease-in delay-700 dark:bg-[#0C0101]/90 dark:border-[#090101]'>
        <div className='absolute top-0 left-0 w-8 h-full bg-gradient-to-l from-gray-300 to-gray-100 dark:from-[#FF030B] dark:to-[#090101] blur-3xl'></div>
        <nav className='relative flex justify-center items-center w-full h-full'>
          <ul className='relative flex flex-col justify-between items-center gap-5'>
            {
            links.map((el, index) => (
              <li key={index} className='relative flex-grow text-center [&>a]:text-xl'>
                <LinkMenu id={el.id} title={el.title} handleLinkHero={handleLinkHero} heroState={heroState} />
              </li>
            ))
          }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeroMenuLinks
