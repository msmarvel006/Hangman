let words = ["pickle", "pizza", "tacos", "fries", "cheese"];

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let counter = 1;

let hangmanWord = words[Math.floor(Math.random() * words.length)];
console.log(hangmanWord);
//create a innerHTML to put the hangmanWord on the page
let wordDisplay = document.querySelector(".game-box");
for (let i = 0; i < hangmanWord.length; i++) {
  wordDisplay.innerHTML += "<ul class='word-display" + i + "'> <li class='letter' style='display: block; height: 30px;width: 30px;border-bottom: 3px solid black;' id='blank-" + hangmanWord.substring(i, i + 1) + "'></li><li class='letter' style='display: none; width: 30px;border-bottom: 3px solid black;' id='letter-" + hangmanWord.substring(i, i + 1) + "'>" + hangmanWord.substring(i, i + 1) + "</li></ul>";

};


//https://www.w3schools.com/jsref/event_onclick.asp

let numWrong = 1;
let numRight = 0;

//Checks letters to see if they match a letter in the word
function checkLetter(element, letter) {
  if (hangmanWord.indexOf(letter) == -1) {
    console.log(letter);
    element.style.background = "red";
    let idName = "hc-" + numWrong;
    console.log(idName);
    var element = document.getElementById(idName);
    if (element != null) {
      element.style.background = "white";
    }
    numWrong++;
  }
  else {
    element.style.background = "green";

    let blanksToHide = document.querySelectorAll("#blank-" + letter);
    for(let i=0; i<blanksToHide.length; i++){
      blanksToHide[i].style.display = "none";
    }

    let lettersToDisplay = document.querySelectorAll("#letter-" + letter);
    for(let i=0; i<lettersToDisplay.length; i++){
      lettersToDisplay[i].style.display = "block";
      numRight++;
    }
  }

  if (numWrong > 7) {
    document.querySelector('.header').innerHTML='GAME OVER';
  }
   console.log("numRight"+numRight);
  if (hangmanWord.length == numRight) {
    document.querySelector('.header').innerHTML='CORRECT!';
  }
}




