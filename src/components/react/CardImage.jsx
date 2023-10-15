const CardImage = ({ urlImg }) => {
  return (

    <img className='absolute w-full h-full rounded-lg object-cover border border-black dark:grayscale hover:dark:grayscale-0' src={urlImg} alt='Clone Instagram' loading='lazy' />

  )
}

export default CardImage
