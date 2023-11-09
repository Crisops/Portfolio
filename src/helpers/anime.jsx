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

export const animeStar = (target) => {
  const timeLine = anime.timeline({
    targets: target,
    duration: 500,
    easing: 'linear',
    loop: true, // Se coloca 2 por temas de rendimiento al desarrollar, su valor es --> true
    delay: (el, i) => 100 * i
  })
  timeLine.add({
    opacity: 0
  })
    .add({
      opacity: 1
    })
    .add({
      opacity: 0
    })
}

export const animeStarShoting = (starShoting) => {
  anime({
    targets: starShoting,
    easing: 'linear',
    loop: false, // Se coloca 2 por temas de rendimiento al desarrollar, su valor es --> true
    delay: (el, i) => 700 * i,
    opacity: [
      {
        value: '0'
      },
      {
        duration: 700,
        value: '1'
      }
    ],
    width: [
      {
        value: '150px'
      },
      {
        value: '0px'
      }
    ],
    translateX: -350
  })
}
