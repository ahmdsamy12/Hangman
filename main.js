const letters = "abcdefghijklmnopqrstuvwxyz";

let arraylet = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

arraylet.forEach((letter)=> {
    let span = document.createElement("span");
    let spantext =document.createTextNode(letter);
    span.appendChild(spantext);
    span.className = "letter-box";
    lettersContainer.appendChild(span);
})

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python"
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up"
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi"
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};

let allKeys = Object.keys(words);

let randompropNumber = Math.floor(Math.random() * allKeys.length);
let randompropName = allKeys[randompropNumber];
let randompropValue = words[randompropName];
let randomvalueNumber = Math.floor(Math.random() * randompropValue.length);
let randomvalueValue = randompropValue[randomvalueNumber];

document.querySelector(".game-info span").innerHTML = randompropName;

let lettersGuess = document.querySelector(".letters-guess");

let letterandSpace = Array.from(randomvalueValue);

letterandSpace.forEach((letter) => {
    let emptySpan = document.createElement("span");

    if (letter === " ") {
        emptySpan.className = "with-space";
    }
    lettersGuess.appendChild(emptySpan);
})

let guessSpan =document.querySelectorAll(".letters-guess span");

let wrongatt = 0;
let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatus = false;
    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");

        let clickedletter = e.target.innerHTML.toLowerCase();
        let thechosenWord = Array.from(randomvalueValue.toLowerCase());

        thechosenWord.forEach((word, wordindex) => {
            if (clickedletter == word) {
              theStatus = true;
                guessSpan.forEach((span, spanindex) => {
                  if (wordindex === spanindex) {
                    span.innerHTML = clickedletter;
                  }
                })
            }
        })
        if (theStatus !== true) {
          wrongatt++;
          theDraw.classList.add(`wrong-${wrongatt}`);
          document.getElementById("fail").play();
          if (wrongatt === 8) {
            endGame();
            lettersContainer.classList.add("finished");
          }
        } else {
          document.getElementById("success").play();
        }
    }
})

function endGame() {
  let div = document.createElement("div");
  div.className = "popup";
  let divText = document.createTextNode(`Game Over word is ${randomvalueValue}`);
  div.appendChild(divText);
  document.body.appendChild(div);
}
