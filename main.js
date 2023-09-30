const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(link => 
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden')
    })
)
closeIcon.addEventListener('click', () => {
   navMenu.classList.add('hidden')
    })

hamburger.addEventListener('click', () => {
  navMenu.classList.remove('hidden')
})

// tabs
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all= document.querySelectorAll(".item_wrap");
const food = document.querySelectorAll(".food");
const beverage = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");

tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(item => {
          item.classList.remove("active")
        })
        tab.classList.add("active")

        const tabval = tab.getAttribute("data-tabs")
        

        all.forEach(item => {
          item.style.display = "none"
        });

        if(tabval == "food"){
          food.forEach(item => {
            item.style.display = "block"
          });
        }
          else if(tabval == "snack"){
            snacks.forEach(item => {
              item.style.display = "block"
            });
        }
            else if(tabval == "beverage"){
                beverage.forEach(item => {
                  item.style.display = "block"
                });
            } 
            else{
                all.forEach(item => {
                    item.style.display = "block"
                });
            }
});
});


// show scroll top
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up');
  if(this.scrollY >= 250) {
     scrollUpBtn.classList.remove('-bottom-1/2');
     scrollUpBtn.classList.add('bottom-4');
  }
  else{
    scrollUpBtn.classList.remove('bottom-4');
    scrollUpBtn.classList.add('-bottom-1/2');
  }
}

window.addEventListener('scroll', scrollUp)

// change header background
const scrollHeader = () => {
  const header = document.getElementById('header');
  if(this.scrollY >= 50) {
    header.classList.add('border-b','border-secondarycolor');
  }
  else{
    header.classList.remove('border-b','border-secondarycolor');
    
  }
}

window.addEventListener('scroll',scrollHeader)

// light and dark mode handling
const html = document.querySelector('html');
const themebtn = document.getElementById('theme-toggle');
if(localStorage.getItem('mode') === 'dark') {
  darkmode();
}
else{
  lightmode();
}

themebtn.addEventListener('click', (e) => {
  if(localStorage.getItem('mode') === 'light') {
    darkmode();
  }
  else{
    lightmode();
  }
 
})

function  darkmode() {
  html.classList.add('dark');
  themebtn.classList.replace('ri-moon-line','ri-sun-line');
  localStorage.setItem('mode', 'dark');
}

function lightmode() {
  html.classList.remove('dark');
  themebtn.classList.replace('ri-sun-line','ri-moon-line');
  localStorage.setItem('mode', 'light');
}

// scroll section active link
const activatelink = () => {
  const sections = document.querySelectorAll('section');
  const navLink = document.querySelectorAll('.nav-link');
  let current = 'home';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });
  navLink.forEach(item => {
    item.classList.remove('text-secondarycolor');
    if(item.href.includes(current)) {
      item.classList.add('text-secondarycolor');
    }
  });
};
window.addEventListener('scroll', activatelink);
// scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px', 
  duration: 2500,
  delay: 400,
})
sr.reveal('.home__image');
sr.reveal('.home__title',{origin:'bottom'});

sr.reveal('.category__cart',{interval: 300});

sr.reveal('.promo__card1',{origin:'left'});
sr.reveal('.promo__card2',{origin:'right'});

sr.reveal('.about__img',{origin:'bottom'});
sr.reveal('.about__content',{origin:'top'});

sr.reveal('.menu__items',{origin:'left'});

sr.reveal('.customer__review',{origin:'left'});

sr.reveal('.footer');
