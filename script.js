// for changing colour of nav bar
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar')
  var scrolled = window.scrollY > 0

  if (scrolled) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})
// for responsive navbar
var navLinks = document.getElementById('navlinks')
function showMenu() {
  navLinks.style.right = '0%'
  // navLinks.style.height= '100vh';
}
function hideMenu() {
  navLinks.style.right = '-100%'
}

//for carousel slider in home page

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 4,
    },
  },
})

//second carousel

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection())
    },
  },
})

function getDirection() {
  var windowWidth = window.innerWidth
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal'

  return direction
}
