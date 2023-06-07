const cardExam = document.getElementById("cardExam");
const gitExam = document.getElementById("gitExam");
const cardSquareEyes = document.getElementById("cardSquareEyes");
const gitSquareEyes = document.getElementById("gitSquareEyes");
const cardMuseum = document.getElementById("cardMuseum");
const gitMuseum = document.getElementById("gitMuseum");
const cardChat = document.getElementById("cardChat");
const gitChat = document.getElementById("gitChat");
const cardKeyGame = document.getElementById("cardKeyGame");
const gitKeyGame = document.getElementById("gitKeyGame");
const cardBionicReading = document.getElementById("cardBionicReading");
const gitBionicReading = document.getElementById("gitBionicReading");

// Redirect function for git
const redirectToGit = (event, link) => {
  event.stopPropagation(); // Prevent click event from bubbling up to cardExam
  window.open(link, "_blank");
};

// Add click event listener to git
gitExam.addEventListener("click", (event) =>
  redirectToGit(
    event,
    "https://github.com/Noroff-FEU-Assignments/project-exam-1-Korny94"
  )
);

gitSquareEyes.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/square_eyes")
);

gitMuseum.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/semester-project-1")
);

gitChat.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/chatGPT-hee")
);

gitKeyGame.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/riddleGame")
);

gitBionicReading.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/bionicReading")
);

// Redirect function for card
const redirectToWebsite = (event, link) => {
  window.open(link, "_blank");
};

// Add click event listener to card
cardExam.addEventListener("click", (event) =>
  redirectToWebsite(
    event,
    "https://project-exam-1-korny94.netlify.app/index.html"
  )
);

cardSquareEyes.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://my-first-website-square-eyes.netlify.app")
);

cardMuseum.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://semester-project-1-leonardo.netlify.app/")
);

cardChat.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://chatgpt-hee.netlify.app/")
);

cardKeyGame.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://findkeygame.netlify.app/index.html")
);

cardBionicReading.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://bionicreading.netlify.app/")
);
