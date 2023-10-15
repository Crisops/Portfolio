const ButtonNavigateProjects = ({ url, bgColor, title, icon }) => {
  return (
    <a href={url} className={`w-24 h-10 rounded ${bgColor} transition-colors pointer-events-auto hover:bg-opacity-90 dark:first:bg-zinc-700 dark:last:bg-[#FA4003]`} target='_blank' rel='noreferrer'>
      <span className='font-Hind_Vadodara text-xs font-bold text-white uppercase'>{title}</span>
      {icon}
    </a>
  )
}

export default ButtonNavigateProjects
