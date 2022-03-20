const burger = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')
const menuLinks = menu.querySelectorAll('.menu-list__item')
// menu-active

// Показываем мобильное меню при клике на кнопку меню-бургер
burger.addEventListener('click', () => {
  menu.classList.add('menu-active')
})

// скрываем мобильное меню при клике на ссылку внутри самого меню
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-active')
  })
})

// Не закрываем мобильное меню, если клик совершен по кнопке меню-бургер или по самому меню. При клике на другое свободное место или по ссылке в меню, мобильное меню закроется
document.addEventListener('click', (event) => {
  if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
    menu.classList.remove('menu-active')
  }
})
