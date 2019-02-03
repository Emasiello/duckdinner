var score = 0;
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
  var kid1 = "Fabiana";
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
  var kid2 = "Frankie";
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
onEvent("cheat", "click", function(){
  score= score + 10;
  console.log("cheat");
});
onEvent("buttonStart", "click", function() {
  console.log("buttonStart clicked!");
  setScreen("screenDuck");
  setPosition("imageDuck1", 100, 250, 80, 100);
  setPosition("imageDuck2", 150, 250, 80, 100);
  textLabel("score", score);
  fly();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  flypattern();
  setTimeout(trans, 9900);
  console.log("time");
});
onEvent("imageDuck1", "click", function() {
  console.log("imageDuck1 clicked!");
  setPosition("imageDuck1", 400, 83, 100, 80);
  score = score + 1;
  deleteElement("score");
  textLabel("score", score);
  console.log("score");
});
onEvent("imageDuck2", "click", function() {
  console.log("imageDuck2 clicked!");
  setPosition("imageDuck2", 400, 170, 100, 80);
  score = score + 1;
  deleteElement("score");
  textLabel("score", score);
  console.log("score");
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
function fly() {
  setPosition("imageDuck1", randomNumber(0, 320), randomNumber(0, 449), 80, 100);
  setPosition("imageDuck2", randomNumber(0, 320), randomNumber(0, 449), 80, 100);
}
function flypattern() {
  setTimeout(fly,randomNumber(1999, 19999));
  fly();
  console.log("moved");
  setTimeout(fly,randomNumber(1999, 19999));
  fly();
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
onEvent("buttonRetry", "click", function(){
  setScreen("screenStart");
  deleteElement("score");
});
onEvent("buttonReset", "click", function() {
  console.log("buttonReset clicked!");
  setScreen("screenStart");
  deleteElement("score");
  deleteElement("days");
  deleteElement("finalscore");
  score = 0;
  });
function dogrun() {
  setTimeout(run,randomNumber(2999, 6999));
  console.log("dog move");
}
function run() {
  setPosition("imageDog1", randomNumber(0,320), 350, 100, 100);
  setPosition("imageDog2", randomNumber(0,320), 350, 100, 100);
}
function dogfull() {
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  dogrun();
  setTimeout(gameend, 6500);
  console.log("dog end");
}
function gameend() {
  var days = score * 1.5;
  setScreen("screenWin");
  textLabel("finalscore", score);
  setPosition("finalscore", 160, 100, 300, 300);
  textLabel("days", days);
  setPosition("days", 160, 370, 300, 300);
}
onEvent("screenTitle", "click", function(){
  setScreen("screenIntro");
  hideElement("textIntro");
  setTimeout(showText, 550);
  
});
function showText() {
  showElement("textIntro");
  textLabel("kid1", kid1);
  setPosition("kid1", 85, 170, 100, 100);
  textLabel("kid2", kid2);
  setPosition("kid2", 195, 170, 100, 100);
}
onEvent("buttonEnd", "click", function(){
  gameend();
});
onEvent("screenIntro", "click", function(){
  setScreen("screenStart");
  deleteElement("kid1");
  deleteElement("kid2");
});
function trans() {
  hideElement("textTrans");
  setScreen("screenTrans");
  setTimeout(showTrans, 550);
}
function showTrans() {
  showElement("textTrans");
  setTimeout( delay, 550);
}
function delay() {
  onEvent("screenTrans", "click", function(){
  change(); });
}
