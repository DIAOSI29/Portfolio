let skillset = [
  "HTML",
  "CSS",
  "Javascript",
  "Jquery",
  "API",
  "Firebase",
  "MongoDB",
  "Express",
  "React",
  "Node JS",
  "Heroku",
  "SQL",
  "GIT"
];

function generateLandingPageButton() {
  for (let skill of skillset) {
    let eachA = $("<a>");
    let eachLi = $("<li>");
    eachA.text(skill);
    eachA.addClass("landing-page-button");
    eachA.attr("href", skill);
    eachLi.addClass("optionButton col-3 ol-sm-3 col-md-2 col-lg-1");
    eachLi.append(eachA);
    $("#buttons").append(eachLi);
  }
}

generateLandingPageButton();
