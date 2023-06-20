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

// for scroll to top button

const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active')
  } else {
    toTop.classList.remove('active')
  }
})
