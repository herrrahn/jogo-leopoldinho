function onOff() {
  let element = document.getElementById('animal')
  element.classList.toggle("jump")
  setTimeout(() => {
    element.classList.toggle("jump")
  }, 1.7)
  let audio = new Audio('leao.mp3')
  audio.play();  
  
}