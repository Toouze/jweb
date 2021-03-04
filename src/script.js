// прелоадер

const preloader = document.querySelector('#preloader'),
    container = document.querySelector('#container')

window.onload = () => {
    preloader.style.display = 'none'
    container.classList.add('opacityToOne')
    container.classList.remove('opacityZero')
}




//






// заставка


const backPic = document.querySelector('.header__image')

window.addEventListener('scroll', () => {
   backPic.style.top = window.pageYOffset / 1.2 + 'px';

})



// прокрутки


const headerBtn = document.querySelector('.header-down-btn'),
  contactBtn = document.querySelector('.ready__btn')


headerBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  });
})



contactBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 3420,
    behavior: "smooth"
  });
})





// кнопка вверх

const btnUp = document.querySelector('.btn-up')

window.addEventListener('scroll', () => {

  if (window.pageYOffset > 50) {
    btnUp.style.opacity = 0.5
  } else if (window.pageYOffset < 50){
    btnUp.style.opacity = 0
  }
})

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})







// NAVBAR



const services = document.querySelector('.nav__services'),
      main = document.querySelector('.nav__main'),
      works = document.querySelector('.nav__works'),
      abilities = document.querySelector('.nav__abilities'),
      contacts = document.querySelector('.nav__contacts'),
      headerBlock = document.querySelector('#header'),
      navbarBlock = document.querySelector('#body__nav'),
      jobBlock = document.querySelector('#job'),
      worksBlock = document.querySelector('#works'),
      abilBlock = document.querySelector('#abilities'),
      readyBlock = document.querySelector('#ready'),
      contactBlock = document.querySelector('#contact'),
      footerBlock = document.querySelector('#footer')

      
      
window.addEventListener('scroll', () => {
  if(pageYOffset >= 0 && pageYOffset < headerBlock.offsetHeight + navbarBlock.offsetHeight) {
    main.classList.add('orange')
  } else {
    main.classList.remove('orange')
  }
})

window.addEventListener('scroll', () => {
  if(pageYOffset >= headerBlock.offsetHeight + navbarBlock.offsetHeight && pageYOffset < headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight) {
    services.classList.add('orange')
  } else {
    services.classList.remove('orange')
  }
})

window.addEventListener('scroll', () => {
  if(pageYOffset >= headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight && pageYOffset < headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight + worksBlock.offsetHeight) {
    works.classList.add('orange')
  } else {
    works.classList.remove('orange')
  }
})


window.addEventListener('scroll', () => {
  if(pageYOffset >= headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight + worksBlock.offsetHeight && pageYOffset < headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight + worksBlock.offsetHeight + abilBlock.offsetHeight) {
    abilities.classList.add('orange')
  } else {
    abilities.classList.remove('orange')
  }
})

window.addEventListener('scroll', () => {
  if(pageYOffset >= headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight + worksBlock.offsetHeight + abilBlock.offsetHeight) {
    contacts.classList.add('orange')
  } else {
    contacts.classList.remove('orange')
  }
})


// navbar scrollto





main.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

services.addEventListener('click', () => {
  window.scrollTo({
    top: headerBlock.offsetHeight + navbarBlock.offsetHeight,
    behavior: "smooth"
  });
})

works.addEventListener('click', () => {
  window.scrollTo({
    top: headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight,
    behavior: "smooth"
  });
})

abilities.addEventListener('click', () => {
  window.scrollTo({
    top: headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight + abilBlock.offsetHeight,
    behavior: "smooth"
  });
})

contacts.addEventListener('click', () => {
  window.scrollTo({
    top: headerBlock.offsetHeight + navbarBlock.offsetHeight + jobBlock.offsetHeight + abilBlock.offsetHeight + contactBlock.offsetHeight,
    behavior: "smooth"
  });
})
























// progress bar






const ProgressBar = require('progressbar.js')


let bar = new ProgressBar.Circle('.bar-container1', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 003,
    color: '#FF5252',
    trailColor: '#F5F5F5',
    trailWidth: 1,
    svgStyle: null
  });
  
  bar.animate(.9);

  let bar2 = new ProgressBar.Circle('.bar-container2', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 003,
    color: '#FF5252',
    trailColor: '#F5F5F5',
    trailWidth: 1,
    svgStyle: null
  });
  
  bar2.animate(.8);


  let bar3 = new ProgressBar.Circle('.bar-container3', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 003,
    color: '#FF5252',
    trailColor: '#F5F5F5',
    trailWidth: 1,
    svgStyle: null
  });
  
  bar3.animate(.75);


  let bar4 = new ProgressBar.Circle('.bar-container4', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 003,
    color: '#FF5252',
    trailColor: '#F5F5F5',
    trailWidth: 1,
    svgStyle: null
  });
  
  bar4.animate(.95);






// изменение #contact при расширении textarea



const textarea = document.querySelector('.contact__textarea')

if (textarea.offsetHeight > 100) {
  contact.style.height = contact.offsetHeight + textarea.offsetHeight + 'px'
}
