export const getStart = (num) => {
  const array = []
  for (let i = 0; i < num; i++) {
    // eslint-disable-next-line no-undef
    const vw = innerWidth
    // eslint-disable-next-line no-undef
    const vh = innerHeight
    const pl = `${Math.random() * vw}px`
    const pt = `${Math.random() * vh}px`

    const element = <i key={i} id='star' style={{ top: pt, left: pl }} className='absolute w-[3px] h-[3px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50.67%,_#676767_0%,_#545454_40.63%,_#363636_100%)] drop-shadow-[0_0_20px_#ededed] shadow-[0px_0px_10px_#999999] shadow-zinc-950 opacity-0 dark:bg-[radial-gradient(50%_50%_at_50%_50.67%,_#F95E04_0%,_#FA4003_40.63%,_#FF030B_100%)] dark:drop-shadow-[0_0_20px_#FF1502] dark:shadow-[0px_0px_10px_#FF0000] dark:shadow-red-600 '></i>
    array.push(element)
  }
  return array
}

export const getStartShoting = ({ START_SHOTING, height, width }) => {
  const array = []
  for (let i = 0; i < START_SHOTING; i++) {
    const pl = `${Math.random() * width}px`
    const pb = `${Math.random() * height}px`

    const element = <i key={i} id='starShoting' style={{ left: pl, bottom: pb }} className='absolute right-0 w-[100px] h-[2px] rounded-full bg-gradient-to-br from-zinc-900 opacity-0 translate-x-0 dark:bg-gradient-to-br dark:from-red-600 '></i>
    array.push(element)
  }
  return array
}
