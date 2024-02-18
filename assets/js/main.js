/** =======================================================
* GNU GENERAL PUBLIC LICENSE V3.0
* You can: Modify, Use Commercially, Use Privately, Patent
* You cannot: Hold liability, Warranty, Modify License
* You must: License your works with GNU GPL V3.0 if you use any part of this code.
======================================================== **/
// Brindyn Schultz

(function() {
  "use strict";
  
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "maker",
    "machinist",
    "engineer",
    "programmer",
    "chemist",
    "electrician",
    "student"
];

const morphTime = 1;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = "";
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    
    elts.text1.style.opacity = `0`;

    elts.text1.textContent = "";
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Define your job start and end dates
  var jobDates = [
    { start: new Date("May 1, 2021"), end: new Date("September 31, 2021") }, //Amazon
    { start: new Date("May 1, 2022"), end: new Date("August 31, 2022") }, //VR Development Intern
    { start: new Date("November 1, 2021"), end: new Date("January 31, 2023") }, //Engineering Assistant
    { start: new Date("January 1, 2023"), end: new Date("August 31, 2023") }, //CNC Trainee
    { start: new Date("August 1, 2023") }, //CNC Machinist
    { start: new Date("October 1, 2023") } //Chem Research
    // Add more job entries as needed
  ];

  // Calculate total experience
  var totalYears = 0;
  var totalMonths = 0;

  jobDates.forEach(function(job) {
    var startDate = job.start;
    var endDate = job.end || new Date(); // Use current date if end date is not specified

    var diff = Math.abs(endDate - startDate);
    var months = diff / (1000 * 60 * 60 * 24 * 30.44); // Average month length
    var years = Math.floor(months / 12);

    totalMonths += Math.round(months % 12);
    totalYears += years;
  });

  // Adjust total months to fit within 12 months
  totalYears += Math.floor(totalMonths / 12);
  totalMonths %= 12;

  // Display the total experience in the respective spans
  document.getElementById("totalYears").setAttribute("data-purecounter-end", totalYears);
  document.getElementById("totalMonths").setAttribute("data-purecounter-end", totalMonths);

  new PureCounter();

})()