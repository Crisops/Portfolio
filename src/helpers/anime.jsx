import anime from 'animejs/lib/anime.es.js'

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
    scale: 0,
    borderRadius: '50%'
  })
    .add({
      scale: 0.3,
      borderRadius: '0%',
      rotate: {
        value: '360'
      }
    })
    .add({
      scale: 0.4,
      borderRadius: '50%'
    })
    .add({
      scale: 0.6,
      borderRadius: '0%'
    })
    .add({
      scale: 0.7,
      borderRadius: '50%',
      opacity: 0
    })
    .add({
      scale: 1,
      duration: 4000,
      borderRadius: '0%',
      opacity: 1
    })
}
