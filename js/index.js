const landingPageP = document.querySelectorAll(".landing-hook p");
const landingPageH2 = document.querySelector(".index-landing h2");
const landingBtn = document.querySelector(".index-landing .primary-btn");

// Animation timeline for Landing Page
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });

// Landing Page Animations
tl.fromTo(
  landingPageP[0],
  { y: -20, opacity: 0 },
  { y: 0, opacity: 1, ease: "elastic.out(1, 0.3)" }
);
tl.fromTo(
  landingPageP[1],
  { y: -20, opacity: 0 },
  { y: 0, opacity: 1, ease: "elastic.out(1, 0.3)" }
);
tl.fromTo(
  landingPageP[2],
  { y: -20, opacity: 0 },
  { y: 0, opacity: 1, ease: "elastic.out(1, 0.3)" }
);
tl.fromTo(
  landingPageH2,
  { opacity: 0 },
  { opacity: 1, duration: 2, delay: 0.25 }
);
tl.fromTo(landingBtn, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "<50%");

// Landing page button
landingBtn.addEventListener("click", () => {
  window.location = "portfolio.html";
});
