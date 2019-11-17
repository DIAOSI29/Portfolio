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

for (let skill of skillset) {
  let eachA = $("<a>");
  let eachLi = $("<li>");
  eachA.html(skill);
  eachA.addClass("landing-page-button");
  eachA.attr("href", skill);
  eachLi.addClass("col-3 ol-sm-3 col-md-2 col-lg-1");
  eachLi.append(eachA);
  $("#buttons").append(eachLi);
}

$("#buttons").css("width", 0);

document.alert("hello");
