const Line = ({ focus, animate, dark, darkDropShadow, ...c }) => {
  const values = Object.values(c)
  return (
    <div className={`absolute w-1 ${values.join(' ')} ${focus && `${animate}`} ${dark} ${darkDropShadow}`}></div>
  )
}

export default Line
