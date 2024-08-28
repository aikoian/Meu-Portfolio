let aiMenu = document.getElementById('ai-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

aiMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-Menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-Menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-Menu')
})