import ButtonNavigateProjects from './ButtonNavigateProjects'
import { IconHtml, IconCss, IconGitHub, IconWorldSite } from './Icons'

const FooterProjects = ({ urlGithub }) => {
  return (
    <footer className='absolute flex justify-between bottom-0 w-full h-24 z-[3] rounded-b-lg'>
      <div className='flex justify-evenly items-center gap-1 px-1'>
        <IconHtml />
        <IconCss />
      </div>
      <div data-atropos-offset='5' className='flex justify-between items-center gap-2 px-2 [&>a]:flex [&>a]:justify-evenly [&>a]:items-center'>
        <ButtonNavigateProjects url={urlGithub} bgColor='#0F0E0F' title='GitHub' icon={<IconGitHub />} />
        <ButtonNavigateProjects url={urlGithub} bgColor='#FF030B' title='Site' icon={<IconWorldSite />} />
      </div>
    </footer>
  )
}

export default FooterProjects
