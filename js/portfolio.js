class Project {
  constructor(name, description, stack, github, link) {
    this.name = name;
    this.description = description;
    this.stack = stack;
    this.github = github;
    this.link = link;
  }
}

const tGBG = new Project(
  `The Green Bay Guy`,
  `This started as a side hustle of mine, which quickly opened up my passion for web development. I built this website to assist others who are coming to Green Bay find the best places to eat, drink, and see while they’re in town.`,
  `HTML, CSS, JS`,
  `https://github.com/benbiederman`,
  `https://thegreenbayguy.com/`
);

const budgetApp = new Project(
  `Budget Application`,
  `Each year I have a spreadsheet for my personal finances, this year I decided to build a desktop application as a way of manage my expenses instead of the spreadsheet. It allowed me to put my React knowledge to work.`,
  `React.js, CSS`,
  `https://github.com/benbiederman/budget-application`,
  `../projects/budget-application/index.html`
);

const findAPhoto = new Project(
  `Find-A-Photo`,
  `I built this project to get some exposure working with APIs. I really enjoy using Pexels to help find photos for websites or other use, seemed only appropriate to make a photo finder using Pexels API.`,
  `HTML, CSS, JS, Pexels API`,
  `https://github.com/benbiederman/find-a-photo`,
  `../projects/find-a-photo/index.html`
);

const PokemonTCG = new Project(
  `Pokemon TCG`,
  `This project was made by the request of a friend. He wanted a way to search for every Pokemon card made of a Pokemon. I was able to use the Pokemon TCG API to help with this project.`,
  `HTML, CSS, JS, Pokemon TCG API`,
  `https://github.com/benbiederman/pokemon-tcg`,
  `../projects/pokemon-tcg/index.html`
);

const personalWebsite = new Project(
  `Personal Website`,
  `This is the website you’re currently browsing. I built this to showcase everything I’ve been working towards during my journey of learning web development.`,
  `HTML, CSS, JS`,
  `https://github.com/benbiederman/portfolio`,
  `index.html`
);

const projects = [tGBG, budgetApp, PokemonTCG, findAPhoto, personalWebsite];

projects.forEach((p) => {
  buildProject(p.name, p.description, p.stack, p.github, p.link);
});

function buildProject(name, description, stack, github, link) {
  const portfolio = document.querySelector(".project-container");
  const project = document.createElement("div");
  project.classList.add("project");
  project.tabIndex = 0;
  portfolio.appendChild(project);

  project.addEventListener("click", () => {
    window.open(link);
  });

  // Icons div
  const projectIcons = document.createElement("div");
  projectIcons.classList.add("project-icons");
  project.appendChild(projectIcons);

  // Github Icon
  const githubIcon = document.createElement("img");
  githubIcon.tabIndex = 0;
  githubIcon.src = `./img/icons/github.svg`;
  projectIcons.appendChild(githubIcon);

  // Github on enter button
  githubIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      window.open(github);
    }
  });

  // Github on click
  githubIcon.addEventListener("click", () => {
    window.open(github);
  });

  const openIcon = document.createElement("img");
  openIcon.tabIndex = 0;
  openIcon.src = "./img/icons/open.svg";
  projectIcons.appendChild(openIcon);

  // Open Icon on Enter
  githubIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      window.open(github);
    }
  });

  // Open Icon on Click
  openIcon.addEventListener("click", () => {
    window.open(link);
  });

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");
  project.appendChild(projectInfo);

  // Project Name
  const projectName = document.createElement("h3");
  projectName.textContent = name;
  projectInfo.appendChild(projectName);

  // Project Description
  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = description;
  projectInfo.appendChild(projectDescription);

  // Project Stack
  const projectStack = document.createElement("p");
  projectStack.textContent = stack;
  projectInfo.appendChild(projectStack);
}

// Portfolio Animations
const headerText = document.querySelector(".portfolio-header h2");
const allProjects = document.querySelectorAll(".project");

const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });
tl.fromTo(
  headerText,
  { y: -20, opacity: 0 },
  { y: 0, opacity: 1, delay: 0.25 }
);

allProjects.forEach((p) => {
  tl.fromTo(p, { opacity: 0 }, { opacity: 1 }, "<75%");
});
