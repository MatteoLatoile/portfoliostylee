document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 500) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

new Swiper('.cardWrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }

});

//dehors

let imgcarddehors = document.querySelector("#imgcarddehors");

imgcarddehors.onmouseover = function () {
  let titlecarddehors = document.querySelector("#titlecarddehors").style.display = "block"
}

imgcarddehors.onmouseleave = function () {
  let titlecarddehors = document.querySelector("#titlecarddehors").style.display = "none"
}

//la ruche

let imgcardruche = document.querySelector("#imgcardruche");

imgcardruche.onmouseover = function () {
  let titlecardruche = document.querySelector("#titlecardruche").style.display = "block"
}

imgcardruche.onmouseleave = function () {
  let titlecardruche = document.querySelector("#titlecardruche").style.display = "none"
}

//todo

let imgcardtodo = document.querySelector("#imgcardtodo");

imgcardtodo.onmouseover = function () {
  let titlecardtodo = document.querySelector("#titlecardtodo").style.display = "block"
}

imgcardtodo.onmouseleave = function () {
  let titlecardtodo = document.querySelector("#titlecardtodo").style.display = "none"
}

//todo

let imgcardtichef = document.querySelector("#imgcardtichef");

imgcardtichef.onmouseover = function () {
  let titlecardtichef = document.querySelector("#titlecardtichef").style.display = "block"
}

imgcardtichef.onmouseleave = function () {
  let titlecardtichef = document.querySelector("#titlecardtichef").style.display = "none"
}

