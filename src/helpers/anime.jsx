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
      borderRadius: '0%',
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

// export const animeLava = (target) => {
//   const timeLine = anime.timeline({
//     targets: target,
//     easing: 'linear',
//     loop: 1,
//     duration: 3000,
//     delay: anime.stagger(200)
//   })
//   timeLine.add({
//     translateX: '100%'
//   })
//     .add({
//       opacity: 1,
//       translateX: '-100%'
//     })
//     .add({
//       translateX: '100%'
//     })
// }
