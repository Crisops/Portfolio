const ButtonNavigateProjects = ({ url, bgColor, title, icon }) => {
  return (
    <a href={url} className={`w-24 h-10 max-sm:w-8 max-sm:h-8 max-sm:rounded-full rounded ${bgColor} transition-colors duration-300 pointer-events-auto hover:bg-opacity-90 dark:hover:bg-opacity-90 dark:first:bg-black dark:last:bg-[#FA4003]`} target='_blank' rel='noreferrer'>
      <span className='font-Hind_Vadodara text-xs font-bold text-white uppercase max-sm:hidden'>{title}</span>
      {icon}
    </a>
  )
}

export default ButtonNavigateProjects
