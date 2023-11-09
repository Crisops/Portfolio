import anime from '../../node_modules/animejs/lib/anime.es.js'

export const animateImg = (target) => {
  const timeLine = anime.timeline({
    targets: `#${target}`,
    easing: 'easeInOutExpo',
    loop: false
  })
  timeLine.add({
    rotate: '1turn',
    scale: 0,
    borderRadius: '50%'
  })
    .add({
      scale: 0.3,
      borderRadius: '50%',
      rotate: {
        value: '360'
      }
    })
    .add({
      scale: 0.6,
      borderRadius: '50%'
    })
    .add({
      scale: 1,
      duration: 2500,
      borderRadius: '0%',
      opacity: 1
    })
}
