import ButtonTheme from './ButtonTheme'

const HomeHeader = () => {
  const logo = '<Cs/>'

  return (
    <header className='fixed top-0 left-0 py-5 px-20 w-full flex justify-between items-center backdrop-blur-sm z-[50]'>
      <span className='animate-fade-right animate-once animate-duration-500 animate-normal text-black font-Crimson_Pro font-bold text-5xl transition-colors duration-300 dark:text-white'>{logo}</span>
      <div className='animate-fade-left animate-once animate-duration-500 flex flex-col gap-4 justify-center items-center'>
        <ButtonTheme />
      </div>
    </header>
  )
}

export default HomeHeader
