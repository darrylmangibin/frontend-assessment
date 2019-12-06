const features__container = document.querySelector('.features__container');
console.dir(features__container)

window.addEventListener('scroll', (e) => {
  var scrollPosY = window.pageYOffset
  // console.log(features__container.scrollHeight)
  // console.log(scrollPosY)
  if ((features__container.scrollHeight / 4) <= scrollPosY) {
    document.querySelectorAll('.card').forEach((c) => {
      c.classList.add('moveInBottom')
    })
  } else {
    document.querySelectorAll('.card').forEach((c) => {
      c.classList.remove('moveInBottom')
    })
  }
})