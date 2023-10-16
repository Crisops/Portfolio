import anime from '../../node_modules/animejs/lib/anime.es.js'

export const animeGridHome = (id, column, row) => {
  anime({
    targets: '#item',
    backgroundColor: '#F7EBEB',
    easing: 'linear',
    duration: 300,
    delay: anime.stagger(50, { grid: [column, row], from: id }),
    changeComplete: function () {
      anime({
        targets: '#item',
        backgroundColor: '#FFFFFF',
        easing: 'linear',
        duration: 300,
        delay: anime.stagger(50, { grid: [column, row], from: id })
      })
    }
  })
}

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
    // loop: true, // Se comenta por el consumo masivo de recursos de la computadora
    delay: (el, i) => 100 * i
  })
  timeLine.add({
    opacity: 0
  })
    .add({
      opacity: 1
    })
}
