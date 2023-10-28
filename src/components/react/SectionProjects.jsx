import { useState } from 'react'
import CardsProject from './CardsProject'
import ButtonShowProjects from './ButtonShowProjects'

const SectionProjects = () => {
  const [viewMore, setViewMore] = useState(false)

  const handleMoreProject = () => {
    setViewMore(!viewMore)
  }

  return (
    <section id='projects' className='relative w-full h-full'>
      <div className={`relative flex flex-wrap w-full bg-white dark:bg-[#0F0101]
      h-full justify-center gap-10 px-40 
      ${viewMore ? '' : 'overflow-hidden'} before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-t from-white dark:before:bg-gradient-to-t dark:from-[#0F0101] dark:via-[#0F0101] dark:via-20% 
       ${viewMore ? '' : 'before:z-[10]'}`}
      >
        <CardsProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub='https://github.com/Crisops/Clone-Instagram'
          urlSite='https://www.instagram.com/cris.alejo13/'
        />
        <CardsProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        <CardsProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        {/* <CardsProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        <CardsProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        <CardsProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        /> */}
      </div>
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <ButtonShowProjects handleMoreProject={handleMoreProject} viewMore={viewMore} />
      </div>
    </section>

  )
}

export default SectionProjects
