import { useEffect } from 'react'
import { BgAboutLava } from './Icons'
import { animeLava } from '../../helpers/anime'

const SectionAbout = () => {
  useEffect(() => {
    const circleLava = document.querySelectorAll('path[data-circle]')
    animeLava(circleLava)
  }, [])

  return (
    <section id='about' className='relative w-full h-screen'>
      <div className='relative bg-fixed bg-no-repeat w-full h-full'>
        <BgAboutLava />
      </div>
    </section>
  )
}

export default SectionAbout
