import { IconGitGubSocial, IconInstagram, IconLinkInd } from './Icons'

const SocialNetworks = () => {
  return (
    <div className='absolute bottom-4 left-20 flex gap-4 [&>a>svg]:transition-colors [&>a>svg]:hover:cursor-pointer dark:[&>a>svg>path]:fill-white dark:[&>a>svg>g]:fill-white'>
      <IconGitGubSocial url='https://github.com/Crisops' />
      <IconInstagram url='https://instagram.com/cris.alejo13' />
      <IconLinkInd url='https://www.linkedin.com/in/cristian-perez-5b306a239/' />
    </div>
  )
}

export default SocialNetworks
