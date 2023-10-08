import anime from 'animejs/lib/anime.es.js'

export const animeItem = (id, column, row) => {
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
