'use strict'

const tabButtonItems = document.querySelectorAll('.tabs__btn-item')
const tabContentItems = document.querySelectorAll('.tabs__content-item')

tabButtonItems.forEach(function (el) {
  el.addEventListener('click', open)
})

function open(e) {
  const buttonTarget = e.currentTarget
  const dataButton = buttonTarget.dataset.button

  tabButtonItems.forEach(function (i) {
    i.classList.remove('tabs__btn-item--active')
  })

  tabContentItems.forEach(function (i) {
    i.classList.remove('tabs__content-item--active')
  })

  buttonTarget.classList.add('tabs__btn-item--active')
  document.querySelector(`#${dataButton}`).classList.add('tabs__content-item--active')
}

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu--active')
  menu.classList.toggle('menu--active')
})
