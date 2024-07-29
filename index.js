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
const cardHaley = document.getElementById("cardHaley");
const gitHaley = document.getElementById("gitHaley");
const cardBidazzle = document.getElementById("cardBidazzle");
const gitBidazzle = document.getElementById("gitBidazzle");
const gitTeetalk = document.getElementById("gitTeetalk");
const gitJsFramework = document.getElementById("gitJsFramework");
const cardJsFramework = document.getElementById("cardJsFramework");
const gitProjectExam2 = document.getElementById("gitProjectExam2");
const cardProjectExam2 = document.getElementById("cardProjectExam2");
const gitArenaMat = document.getElementById("gitArenaMat");
const cardArenaMat = document.getElementById("cardArenaMat");
const cardArrangementService = document.getElementById(
  "cardArrangementService"
);
const gitArrangementService = document.getElementById("gitArrangementService");
const cardQrArrangement = document.getElementById("cardQrArrangement");
const gitQrArrangement = document.getElementById("gitQrArrangement");
const cardEventArrangement = document.getElementById("cardEventArrangement");
const gitEventArrangement = document.getElementById("gitEventArrangement");
const cardRsvpArrangement = document.getElementById("cardRsvpArrangement");
const gitRsvpArrangement = document.getElementById("gitRsvpArrangement");

// Redirect function for git
const redirectToGit = (event, link) => {
  event.stopPropagation(); // Prevent click event from bubbling up to cardExam
  window.open(link, "_blank");
};

// Add click event listener to git
gitRsvpArrangement.addEventListener("click", (event) =>
  redirectToGit(
    event,
    "https://github.com/Korny94/private-repository/blob/main/README.md"
  )
);

gitEventArrangement.addEventListener("click", (event) =>
  redirectToGit(
    event,
    "https://github.com/Korny94/private-repository/blob/main/README.md"
  )
);

gitQrArrangement.addEventListener("click", (event) =>
  redirectToGit(
    event,
    "https://github.com/Korny94/private-repository/blob/main/README.md"
  )
);

gitArrangementService.addEventListener("click", (event) =>
  redirectToGit(
    event,
    "https://github.com/Korny94/private-repository/blob/main/README.md"
  )
);

gitArenaMat.addEventListener("click", (event) =>
  redirectToGit(
    event,
    "https://github.com/Korny94/private-repository/blob/main/README.md"
  )
);

gitProjectExam2.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/project-exam-2")
);

gitJsFramework.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/javascript-frameworks-CA")
);

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

gitHaley.addEventListener("click", (event) =>
  redirectToGit(
    event,
    "https://github.com/Korny94/private-repository/blob/main/README.md"
  )
);

gitBidazzle.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/semester-project-2")
);

gitTeetalk.addEventListener("click", (event) =>
  redirectToGit(event, "https://github.com/Korny94/javascript2-ca")
);

// Redirect function for card
const redirectToWebsite = (event, link) => {
  window.open(link, "_blank");
};

// Add click event listener to card
cardRsvpArrangement.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://rsvp-arrangement.netlify.app")
);

cardEventArrangement.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://bryllupsnettside.netlify.app/")
);

cardQrArrangement.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://qr-arrangement.netlify.app/")
);

cardArrangementService.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://arrangement-service.netlify.app")
);

cardArenaMat.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://arenamat.netlify.app/")
);

cardProjectExam2.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://project-exam-2-korny94.netlify.app/")
);

cardJsFramework.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://js-frameworks-ca.netlify.app/")
);

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

// cardHaley.addEventListener("click", (event) =>
// redirectToWebsite(event, "https://haley.no")
// );

cardBidazzle.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://my-semester-project-2.netlify.app/")
);

cardTeetalk.addEventListener("click", (event) =>
  redirectToWebsite(event, "https://teetalk.netlify.app/")
);
