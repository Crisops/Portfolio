import ButtonTheme from './ButtonTheme'

const HomeHeader = () => {
  const logo = '<Cs/>'

  return (
    <header className='fixed top-0 left-0 py-5 px-20 w-full flex justify-between items-center backdrop-blur-sm z-[50] max-2xl:px-10 max-xl:px-8 max-[400px]:px-6 max-[500px]:py-5 max-[500px]:px-8'>
      <span className='animate-fade-right animate-once animate-duration-500 animate-normal text-black font-Crimson_Pro font-bold text-5xl transition-colors duration-300 dark:text-white max-xl:text-4xl max-[500px]:text-3xl'>{logo}</span>
      <div className='animate-fade-left animate-once animate-duration-500 flex flex-col gap-4 justify-center items-center'>
        <ButtonTheme />
      </div>
    </header>
  )
}

export default HomeHeader
