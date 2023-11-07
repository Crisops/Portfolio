import { IconGitGubSocial, IconInstagram, IconLinkInd } from './Icons'

const SocialNetworks = () => {
  return (
    <div className='absolute bottom-4 left-20 max-[1279px]:left-1/2 max-[1279px]:-translate-x-1/2 flex gap-4 max-[1024px]:gap-7 max-[640px]:gap-5 [&>a>svg]:transition-colors [&>a>svg]:hover:cursor-pointer dark:[&>a>svg>path]:fill-white dark:[&>a>svg>g]:fill-white z-10'>
      <IconGitGubSocial url='https://github.com/Crisops' />
      <IconInstagram url='https://instagram.com/cris.alejo13' />
      <IconLinkInd url='https://www.linkedin.com/in/cristian-perez-5b306a239/' />
    </div>
  )
}

export default SocialNetworks
