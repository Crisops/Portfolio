import { useState } from 'react'
import CardProject from './CardsProject'
import ButtonShowProjects from './ButtonShowProjects'

const SectionProjects = () => {
  const [viewMore, setViewMore] = useState(false)

  const handleMoreProject = () => {
    setViewMore(!viewMore)
  }

  return (
    <section id='projects' className='relative w-full h-full'>
      <div className={`relative flex flex-wrap w-full bg-white dark:bg-[#0F0101]
      ${viewMore ? 'h-full' : 'h-[700px]'} justify-center gap-10 px-40 
      ${viewMore ? '' : 'overflow-hidden'} before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-t from-white dark:before:bg-gradient-to-t dark:from-[#0F0101]
       ${viewMore ? '' : 'before:z-[10]'}`}
      >
        <CardProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub='https://github.com/Crisops/Clone-Instagram'
          urlSite='https://www.instagram.com/cris.alejo13/'
        />
        <CardProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        <CardProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        <CardProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        <CardProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
        <CardProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub=''
          urlSite=''
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full  pointer-events-none'>
        <ButtonShowProjects handleMoreProject={handleMoreProject} viewMore={viewMore} />
      </div>
    </section>

  )
}

export default SectionProjects
