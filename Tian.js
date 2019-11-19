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
    let eachID = "#" + skill;
    eachA.text(skill);
    eachA.addClass("landing-page-button");
    eachA.attr("href", eachID);
    eachLi.addClass("optionButton col-3 ol-sm-3 col-md-2 col-lg-1");
    eachLi.append(eachA);
    $("#buttons").append(eachLi);
    // eachA.click(() => {});
  }
}

generateLandingPageButton();

$("#contact-button").click(() => {
  $(".landingPage").hide();
  $("#main-page-contact").removeClass("visuallyhidden");
});

$("#portfolio-button").click(() => {
  $(".landingPage").hide();
  $("#main-page-porfolio").removeClass("visuallyhidden");
});

$(".close-button").click(() => {
  $("#landingPage").show();
  $(".main-page").addClass("visuallyhidden");
});

$("#feedback-button").click(() => {
  let feedback = $("#feedback").text();
  console.log(feedback);
});
