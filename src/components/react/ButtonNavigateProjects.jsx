const ButtonNavigateProjects = ({ url, bgColor, title, icon }) => {
  return (
    <a href={url} className={`w-24 h-10 bg-["${bgColor}"] rounded`} target='_blank' rel='noreferrer'>
      <span className='font-Hind_Vadodara text-xs font-bold text-white uppercase'>{title}</span>
      {icon}
    </a>
  )
}

export default ButtonNavigateProjects
