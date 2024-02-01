const links = [
  "https://project-exam-1-korny94.netlify.app/index.html",
  "https://my-first-website-square-eyes.netlify.app/",
  "https://semester-project-1-leonardo.netlify.app/",
  "https://chatgpt-hee.netlify.app/",
  "https://findkeygame.netlify.app/index.html",
  "https://bionicreading.netlify.app/",
  "https://haleybear.netlify.app",
  "https://my-semester-project-2.netlify.app/",
  "https://teetalk.netlify.app/",
];

const randomLink = document.getElementById("random");

randomLink.onclick = function () {
  const randomIndex = Math.floor(Math.random() * links.length);
  const selectedLink = links[randomIndex];
  window.open(selectedLink, "_blank");
};
