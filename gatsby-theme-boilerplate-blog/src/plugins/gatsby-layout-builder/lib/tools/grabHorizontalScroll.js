const grabHorizontalScroll = ( qSel ) => {
  
  const sliderClass = (qSel==='Artist') ? '.artist-profiles-list' : '.collector-profiles-list'
  const slider = document.querySelector( sliderClass )
  
  let isDown = false
  let startX
  let scrollLeft
  slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  })
  slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 3 //scroll-fast
    slider.scrollLeft = scrollLeft - walk
  })
}

export default grabHorizontalScroll