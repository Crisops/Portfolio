const ButtonShowProjects = ({ handleMoreProject, viewMore }) => {
  return (
    <a
      href='#projects'
      onClick={handleMoreProject} className={`absolute left-1/2 -translate-x-1/2 ${viewMore ? 'bottom-4' : 'bottom-20'} px-7 py-3
   ${viewMore ? 'bg-zinc-950 dark:bg-[#770000]' : 'bg-[#FF0000] dark:bg-[#210000]'}  rounded-md text-white font-bold font-Hind_Guntur uppercase transition-colors duration-300 pointer-events-auto z-[11] ${viewMore ? 'hover:bg-opacity-95 dark:hover:bg-opacity-75' : 'hover:bg-opacity-75 dark:hover:bg-opacity-75'} `}
    >{viewMore ? 'Ocultar' : 'Ver más'}
    </a>
  )
}

export default ButtonShowProjects
