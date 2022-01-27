const ben = document.querySelector("img");
const contactBtn = document.querySelector(".contact-info .secondary-btn");

// Animations
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } });

tl.fromTo(ben, { opacity: 0 }, { opacity: 1, delay: 0.25, duration: 1.5 });
tl.fromTo(
  ".contact-info h3",
  { y: -150, opacity: 0 },
  { duration: 2, ease: "elastic.out(1, 0.4)", y: 0, opacity: 1 },
  "<50%"
);
tl.fromTo(
  ".contact-info p",
  { y: -200, opacity: 0 },
  { duration: 2, ease: "elastic.out(1, 0.35)", y: 0, opacity: 1 },
  "<5%"
);

tl.fromTo(
  contactBtn,
  { y: -225, opacity: 0 },
  { duration: 2, ease: "elastic.out(1, 0.3)", y: 0, opacity: 1 },
  "<5%"
);

// Event Listeners
contactBtn.addEventListener("click", () => {
  window.location.href = "mailto:benbiederman@gmail.com";
});

contactBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    window.location.href = "mailto:benbiederman@gmail.com";
  }
});
