const CardImage = ({ urlImg }) => {
  return (

    <img className='absolute w-full h-full rounded-lg object-cover border border-black ' src={urlImg} alt='Clone Instagram' loading='lazy' />

  )
}

export default CardImage
