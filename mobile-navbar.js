class MobileNavbar {
  constructor() {
    this.mobileMenu = document.querySelector(".menu-icon");
    this.navList = document.querySelector(".navbar");
    this.navLinks = document.querySelectorAll(".nav-menu li");
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", () => {
      this.handleClick();
      this.animateLinks(); 
    });
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.animateLinks(); 
    });

    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
      this.mobileMenu.classList.toggle('open');
      navbar.classList.toggle('menu-open');
      this.animateLinks(); 
    });

    document.addEventListener('click', (event) => {
      if (!this.mobileMenu.contains(event.target) && !navbar.contains(event.target)) {
        this.animateLinks(); 
      }
    });

    this.addClickEvent();
  }
}

const mobileNavbar = new MobileNavbar();
mobileNavbar.init();
