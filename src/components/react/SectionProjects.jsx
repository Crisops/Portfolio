import { useState } from 'react'
import CardProject from './CardsProject'
import ButtonShowProjects from './ButtonShowProjects'

const SectionProjects = () => {
  const [viewMore, setViewMore] = useState(false)

  const handleMoreProject = () => {
    setViewMore(!viewMore)
  }

  return (
    <section id='projects' className='relative w-full h-full flex flex-col justify-center items-center gap-20 bg-white dark:bg-[#0F0101]'>
      <h2 className='uppercase font-Crimson_Pro font-extrabold text-5xl text-zinc-900 dark:text-zinc-100'>Proyectos</h2>
      <div className={`relative flex flex-wrap w-full bg-white dark:bg-[#0F0101]
      h-full justify-center gap-10 px-40 
      ${viewMore ? '' : 'overflow-hidden'} before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-t from-white from-20% dark:before:bg-gradient-to-t dark:from-[#0F0101] dark:from-20%
       ${viewMore ? '' : 'before:z-[10]'}`}
      >
        <CardProject
          urlImg='/img/cloneInstagram.webp'
          urlGithub='https://github.com/Crisops/Clone-Instagram'
          urlSite='https://www.instagram.com/cris.alejo13/'
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
