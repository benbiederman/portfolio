const header = document.querySelector(".header");
const logo = document.querySelector(".branding h1");
const menuBtn = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

// Logo click => index.html
logo.addEventListener("click", () => {
  window.location = "index.html";
});

// Nav Menu Links
const navigationLinks = [
  { li: "Home", link: "index.html", focus: false },
  { li: "Portfolio", link: "portfolio.html", focus: false },
  { li: "Contact", link: "contact.html", focus: false },
  { li: "Github", link: "https://github.com/benbiederman", focus: true },
];

// For each item in NavigationLinks, create li
navigationLinks.forEach((li) => {
  createLink(li);
});

// Create li, add to ul
function createLink(link) {
  const ul = document.querySelector(".nav-list ul");
  const li = document.createElement("li");
  li.tabIndex = 0;
  if (link.focus) {
    li.classList.add("focus");
  }
  li.textContent = link.li;

  //  On link click, go to link location
  li.addEventListener("click", () => {
    window.location = link.link;
  });

  //  On link click, go to link location
  li.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      window.location = link.link;
    }
  });

  ul.appendChild(li);
}

// Toggle Nav on Click
menuBtn.addEventListener("click", () => {
  toggleNav();
});

// Toggle Nav on Enter Key
menuBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleNav();
  }
});

// Toggle Nav Function
function toggleNav() {
  const navListLinks = document.querySelectorAll(".nav-list li");
  navList.classList.toggle("nav-list-active");

  if (navList.classList.contains("nav-list-active")) {
    //Add active status for menu and header
    header.classList.add("header-active");
    menuBtn.classList.add("menu-active");
  } else {
    // Remove active status for menu and header
    menuBtn.classList.remove("menu-active");
    if (window.scrollY == 0) {
      header.classList.remove("header-active");
    }
  }

  // Adds animation if none exists, removes if does.
  navListLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linkSlide 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
}

// Checks window position, adds color to background on scroll, removes at Y 0
function navScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
}

navScroll();
