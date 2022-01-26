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
  `It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with
desktop publishing software like Aldus PageMaker including
versions of Lorem Ipsum.`,
  `HTML, CSS, JS`,
  `https://github.com/benbiederman`,
  `https://thegreenbayguy.com/`
);

const budgetApp = new Project(
  `Budget Application`,
  `It was popularised in the 1960s with the release of Letraset
sheets containing. It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with
desktop publishing software like Aldus PageMaker including
versions of Lorem Ipsum.`,
  `React.js, CSS`,
  `#`,
  `#`
);

const findAPhoto = new Project(
  `Find-A-Photo`,
  `It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with
desktop publishing software like Aldus PageMaker`,
  `HTML, CSS, JS, Pexels API`,
  `#`,
  `#`
);

const PokemonTCG = new Project(
  `Pokemon TCG`,
  `It was popularised in the 1960s with the release of Letraset
  sheets containing. It was popularised in the 1960s with the release of Letraset
  sheets containing`,
  `HTML, CSS, JS, PokeAPI`,
  `#`,
  `#`
);

const personalWebsite = new Project(
  `Personal Website`,
  `It was popularised in the 1960s with the release of Letraset
  sheets containing. It was popularised in the 1960s with the release of Letraset
  sheets containing`,
  `HTML, CSS, JS`,
  `#`,
  `#`
);

const projects = [tGBG, budgetApp, findAPhoto, PokemonTCG, personalWebsite];

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
