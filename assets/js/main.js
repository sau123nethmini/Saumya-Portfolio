/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Web Designer","Web Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

function scrollLeft() {
  const container = document.querySelector('.project-container');
  if (container) {
      const currentScroll = container.scrollLeft;
      if (currentScroll > 0) { // Check if not at the start
          container.scrollBy({ left: -300, behavior: 'smooth' });
      }
  }
}

function scrollRight() {
  const container = document.querySelector('.project-container');
  if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth; // Calculate maximum scrollable width
      if (container.scrollLeft < maxScrollLeft) { // Check if not at the end
          container.scrollBy({ left: 300, behavior: 'smooth' });
      }
  }
}

// Show or hide the "Up Arrow" button based on scroll position
window.addEventListener('scroll', () => {
  const scrollToTopButton = document.getElementById('scrollToTop');
  if (window.scrollY > 300) { // Show button after scrolling down 300px
      scrollToTopButton.classList.add('show');
  } else {
      scrollToTopButton.classList.remove('show');
  }
});

// Scroll to the top of the page when the button is clicked
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
  });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate form fields
  if (!name || !email || !message) {
      alert('Please fill out all fields before sending.');
      return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Send the email using mailto
  const mailtoLink = `mailto:saumya123na@gmail.com?subject=Message from ${name}&body=Email: ${email}%0A%0A${message}`;
  window.location.href = mailtoLink;

  // Show custom popup
  document.getElementById('popupMessage').style.display = 'block';
});

function closePopup() {
  document.getElementById('popupMessage').style.display = 'none';
}

function navigateToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}



const skillsList = document.getElementById('skillsList');
const skillsDots = document.getElementById('skillsDots');
const skillBoxes = document.querySelectorAll('.skills-box');

// Generate dots based on the number of skill boxes
skillBoxes.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active'); // Set the first dot as active
    dot.addEventListener('click', () => {
        skillsList.scrollTo({
            left: index * skillsList.offsetWidth,
            behavior: 'smooth',
        });
        updateDots(index);
    });
    skillsDots.appendChild(dot);
});

// Update active dot
function updateDots(activeIndex) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Add scroll event listener to update dots
skillsList.addEventListener('scroll', () => {
    const activeIndex = Math.round(skillsList.scrollLeft / skillsList.offsetWidth);
    updateDots(activeIndex);
});