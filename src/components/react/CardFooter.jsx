import ButtonNavigateProjects from './ButtonNavigateProjects'
import CardTechnologies from './CardTechnologies'
import { IconGitHub, IconWorldSite } from './Icons'

const CardFooter = ({ urlGithub, urlSite }) => {
  return (
    <footer className='absolute flex justify-between bottom-0 w-full h-24 max-sm:h-14 z-[3] rounded-b-lg pointer-events-none'>
      <CardTechnologies />
      <div data-atropos-offset='5' className='flex justify-between items-center gap-2 max-sm:gap-3 px-2 [&>a]:flex [&>a]:justify-evenly [&>a]:items-center'>
        <ButtonNavigateProjects url={urlGithub} bgColor='bg-zinc-950' title='GitHub' icon={<IconGitHub />} />
        <ButtonNavigateProjects url={urlSite} bgColor='bg-red-700' title='Sitio' icon={<IconWorldSite />} />
      </div>
    </footer>
  )
}

export default CardFooter
