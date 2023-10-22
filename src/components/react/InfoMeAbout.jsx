const InfoMeAbout = ({ title, description, colorTitle, colorDescription, animateTitle, animateDescription, focus, darkTitle, darkDescription }) => {
  return (
    <article className='[&>p]:max-w-lg'>
      <h3 className={`font-Hind_Vadodara text-2xl font-bold ${colorTitle} uppercase opacity-0
           ${focus && `${animateTitle}`} ${darkTitle}`}
      >{title}
      </h3>
      <p className={`${colorDescription} font-Crimson_Pro text-base opacity-0
           ${focus && `${animateDescription}`} ${darkDescription}`}
      >{description}
      </p>
    </article>
  )
}

export default InfoMeAbout
