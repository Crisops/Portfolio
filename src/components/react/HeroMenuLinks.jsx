import LinkMenu from './LinkMenu'

const HeroMenuLinks = ({ links, refHero, refHeroLinks, handleLinkHero, heroState }) => {
  return (
    <div ref={refHero} className='fixed top-0 left-0 w-full h-screen bg-black/80 z-[9998] -translate-x-full transition duration-500 ease-in'>
      <div ref={refHeroLinks} className='relative top-0 left-0 w-60 h-screen bg-black/90 -translate-x-full transition ease-in delay-700'>
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
