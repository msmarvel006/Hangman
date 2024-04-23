 let words = ["pickle", "pizza", "tacos", "fries", "cheese"];

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let counter = 1;

let hangmanWord = words[Math.floor(Math.random()*words.length)];
console.log(hangmanWord);
//create a innerHTML to put the hangmanWord on the page
let wordDisplay = document.querySelector(".word-header");
console.log(wordDisplay);
for(let i = 0; i < hangmanWord.length; i++) {
  wordDisplay.append("<div class='game-box'><ul class='word-display" + i + "'> <li class='letter' style='display:block' id='blank'></li><li class = 'letter' style='display:none' id='"+ hangmanWord.substring(i, i+1) +"'>" + hangmanWord.substring(i, i+1) + "</li></ul></div>");
  
};


//https://www.w3schools.com/jsref/event_onclick.asp

let numWrong = 1;

//Checks letters to see if they match a letter in the word
function checkLetter(element, letter)
{
  if(hangmanWord.indexOf(letter) == -1)
  {
    console.log(letter);
    element.style.background = "red";
    let idName = "hc-" + numWrong;
    document.getElementById(idName).style.display = "none";
    document.getElementById("blank").style.display = "none";
    document.getElementById(letter).style.display = "block";
    console.log(idName);
    
    numWrong++;
  }
  else
  {
    element.style.background = "green";
  }
}

    
  

