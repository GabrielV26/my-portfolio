// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Save user preference on load
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// Smooth scrolling function
function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var headerHeight = document.querySelector('#header').offsetHeight; // Gets the height of the header
  var distance = targetPosition - headerHeight;
  var startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Roll acceleration calculation function
  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Click event on links with class "smooth-scroll"
var smoothLinks = document.querySelectorAll('.smooth-scroll');
smoothLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      var duration = 1000; // Scroll duration time in milliseconds 
      smoothScroll(target, duration);
  });
});

// Function to check if the element is visible on the screen
function isElementVisible(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class when element is visible
function animateOnScroll() {
  var elements = document.querySelectorAll('.hidden');

  elements.forEach(function (element) {
    if (isElementVisible(element)) {
      element.classList.add('sildeUp');
    }
  });

}

// Check element visibility when page loads and when scrolling
document.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  navbar.classList.toggle('menu-open');
});
