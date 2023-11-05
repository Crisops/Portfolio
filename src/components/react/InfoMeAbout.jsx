const InfoMeAbout = ({ title, description, colorTitle, colorDescription, animateTitle, animateDescription, focus, darkTitle, darkDescription }) => {
  return (
    <article className='[&>p]:max-w-lg'>
      <h3 className={`font-Hind_Vadodara 2xl:text-2xl max-[1024px]:text-3xl max-[768px]:text-2xl max-[648px]:text-xl text-2xl font-bold ${colorTitle} uppercase opacity-0
           ${focus && `${animateTitle}`} ${darkTitle}`}
      >{title}
      </h3>
      <p className={`${colorDescription} font-Crimson_Pro 2xl:text-base text-base opacity-0
           ${focus && `${animateDescription}`} ${darkDescription}`}
      >{description}
      </p>
    </article>
  )
}

export default InfoMeAbout
