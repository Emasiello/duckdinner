var gametime;
var input;
onEvent("inputTime", "input", function() {
  console.log("inputTime current text: " + getText("inputTime"));
  input = getText("inputTime");
  if (input > 10) {
    input = 10;
  }
  console.log(input);
  gametime = input * 60000;
  console.log(gametime);
});
var score = 0;
var repeat = 0;
var screenClick = 0;
var child1 = randomNumber(0, 10);
var child2 = randomNumber(0, 10);
if (child1 < 10) {
  var kid1 = "Addison";
}
if (child1 < 2) {
  var kid1 = "Bailey";
} else if (child1 < 3) {
  console.log("nameSkip");
  var kid1 = "Charlie";
} else if (child1 < 4) {
  var kid1 = "Dianna";
} else if (child1 < 5) {
  var kid1 = "Elly";
} else if (child1 < 6) {
  var kid1 = "Fabian";
} else if (child1 < 7) {
  var kid1 = "Gabriel";
} else if (child1 < 8) {
  var kid1 = "Harley";
} else if (child1 < 9) {
  var kid1 = "Jamie";
} else {
  var kid1 = "Kelly";
}
if (child1 < 1) {
  var kid2 = "Aiden";
} else if (child2 < 2) {
  var kid2 = "Billy";
} else if (child2 < 3) {
  var kid2 = "Carlos";
} else if (child2 < 4) {
  var kid2 = "Dakota";
} else if (child2 < 5) {
  var kid2 = "Eddie";
} else if (child2 < 6) {
  var kid2 = "Frank";
} else if (child2 < 7) {
  var kid2 = "Glenn";
} else if (child2 < 8) {
  var kid2 = "Hayden";
} else if (child2 < 9) {
  var kid2 = "Jules";
} else if (child2 < 9) {
  var kid2 = "Jules";
} else {
  var kid2 = "Karter";
}
onEvent("screenTitle", "click", function(){
  setScreen("screenIntro");
  hideElement("textIntro");
  setTimeout(showText, 550);
});
function delay() {
  onEvent("screenTrans", "click", function(){
  change(); });
}
onEvent("buttonStart", "click", function() {
  console.log("buttonStart clicked!");
  setScreen("screenDuck");
  setPosition("imageDuck1", 100, 250, 80, 100);
  setPosition("imageDuck2", 150, 250, 80, 100);
  textLabel("score", score);
  duckfull();
});
onEvent("cheat", "click", function(){
  score= score + 10;
  deleteElement("score");
  textLabel("score", score);
  console.log("cheat");
});
onEvent("imageDuck1", "click", function() {
  console.log("imageDuck1 clicked!");
  setPosition("imageDuck1", randomNumber(0, 320), randomNumber(0, 449), 80, 100);
  score = score + 1;
  deleteElement("score");
  textLabel("score", score);
  console.log("score");
});
onEvent("imageDuck2", "click", function() {
  console.log("imageDuck2 clicked!");
  setPosition("imageDuck2", randomNumber(0, 320), randomNumber(0, 449), 80, 100);
  score = score + 1;
  deleteElement("score");
  textLabel("score", score);
  console.log("score");
});

onEvent("buttonRetry", "click", function(){
  setScreen("screenIntro");
  screenClick = 1;
  deleteElement("score");
});
onEvent("buttonEnd", "click", function(){
  gameend();
});
onEvent("imageDog1", "click", function() {
  console.log("imageDog1 clicked!");
  setPosition("imageDog1", 400, 350, 100, 100);
  score = score + 2;
  deleteElement("score");
  textLabel("score", score);
  console.log("score");
});
onEvent("imageDog2", "click", function() {
  console.log("imageDog2 clicked!");
  setPosition("imageDog2", 400, 350, 100, 100);
  score = score + 2;
  deleteElement("score");
  textLabel("score", score);
  console.log("score");
});
onEvent("buttonReset", "click", function() {
  console.log("buttonReset clicked!");
  setScreen("screenIntro");
  screenClick = 1;
  deleteElement("score");
  deleteElement("days");
  deleteElement("finalscore");
  score = 0;
  });
function fly() {
  setPosition("imageDuck1", randomNumber(0, 320), randomNumber(0, 449), 80, 100);
  setPosition("imageDuck2", randomNumber(0, 320), randomNumber(0, 449), 80, 100);
}
function flypattern() {
  setTimeout(fly,randomNumber(2999, 6999));
  console.log("moved");
}
function change() {
  console.log("change");
  if (score > 2) {
  console.log("ducks");
  setScreen("screenDog");
  setPosition("imageDog1", 100, 350, 100, 100);
  setPosition("imageDog2", 150, 350, 100, 100);
  deleteElement("score");
  textLabel("score", score);
  dogfull();
} else {
  setScreen("screenloss");
}
}
function dogrun() {
  setTimeout(run,randomNumber(2999, 6999));
  console.log("dog move");
}
function run() {
  setPosition("imageDog1", randomNumber(0,320), 350, 100, 100);
  setPosition("imageDog2", randomNumber(0,320), 350, 100, 100);
}
function dogfull() {
  for (repeat = 0; repeat < 100; repeat++) {
  dogrun();
  }
  setTimeout(gameend, 6500);
  console.log("dog end");
}
function duckfull() {
  for (var i = 0; i < 100; i++) {
  flypattern();
  console.log("duck move");
  }
  setTimeout(trans, 6500);
  console.log("duck end");
}
function gameend() {
  var days = score * 1.5;
  setScreen("screenWin");
  textLabel("finalscore", score);
  setStyle("finalscore", "font-size: 35px; color: rgb(255, 255, 255, 1); text-align: center;");
  setPosition("finalscore", 0, 100, 320, 50);
  textLabel("days", days);
  setStyle("days", "font-size: 35px; color: rgb(255, 255, 255, 1);  text-align: center;");
  setPosition("days", 0, 355, 320, 50);
}
function showText() {
  showElement("textIntro");
  textLabel("intro", "Help! " + kid1 + " and " + kid2 + " are very hungry. We need to go duck hunting to gather more food.");
  setStyle("intro", "font-size: 19px; color: rgb(0, 0, 0, 1);");
  setPosition("intro", 25, 165, 285, 115);
}
onEvent("screenIntro", "click", function(){
  if (screenClick > 1){ 
  setScreen("screenStart");
} else if (screenClick == 1) {
  screenClick ++;
} else {
  deleteElement("intro");
  textLabel("hours", "How many hours should we hunt for");
  setStyle("hours", "font-size: 19px; color: rgb(0, 0, 0, 1);");
  setPosition("hours", 25, 165, 285, 115);
  showElement("inputTime");
  screenClick ++;
}
});
function trans() {
  if (score > 2){
  hideElement("textTrans");
  setScreen("screenTrans");
  setTimeout(showTrans, 550);
  } else {
    setScreen("screenloss");
  }
}
function showTrans() {
  showElement("textTrans");
  setTimeout(delay, 550);
}