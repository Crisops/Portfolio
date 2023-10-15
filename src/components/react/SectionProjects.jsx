import { useState } from 'react'
import CardProject from './CardsProject'

const SectionProjects = () => {
  const [viewMore, setViewMore] = useState(false)

  const handleMoreProject = () => {
    setViewMore(!viewMore)
  }

  return (
    <section id='projects' className='relative w-full h-full'>
      <div className={`relative flex flex-wrap w-full
      ${viewMore ? 'h-full' : 'h-[700px]'} justify-center gap-10 px-40 
      ${viewMore ? '' : 'overflow-hidden'} before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-t from-[#0F0101]
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
        <button
          onClick={handleMoreProject} className={`absolute ${viewMore ? 'left-5' : 'left-1/2'} ${viewMore ? 'bottom-0' : 'bottom-20'} px-7 py-3
        ${viewMore ? 'bg-[#770000]' : 'bg-[#210000]'}  rounded-md text-white font-bold font-Hind_Guntur uppercase transition-colors pointer-events-auto z-[11]  hover:bg-[#180000]`}
        >{viewMore ? 'Hidden' : 'Show More...'}
        </button>
      </div>
    </section>

  )
}

export default SectionProjects
