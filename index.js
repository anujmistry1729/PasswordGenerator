const characters = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z",  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z",  "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "~",  "`",  "!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "(",  ")",  "_",  "-",  "+",  "=",  "{",  "[",  "}",  "]",  ",",  "|",  ":",  ";",  "<",  ">",  ".",  "?",  "/"];

let genPass1El = document.getElementById("gen-pass-1");
let genPass2El = document.getElementById("gen-pass-2");
let copiedEl = document.getElementById("copied-msg");


if (genPass1El.textContent === "" && genPass2El.textContent === "") {
  styleEmptyStateButtons();
}

async function copyText(idName) {
  copiedEl.textContent = "";

  if (idName === "gen-pass-1") {
    try {
      const copy1 = await navigator.clipboard.writeText(genPass1El.textContent);
      copiedEl.textContent = "Copied to Clipboard!";
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const copy2 = await navigator.clipboard.writeText(genPass2El.textContent);
      copiedEl.textContent = "Copied to Clipboard!";
    } catch (error) {
      console.log(error);
    }
  }
}

async function getPassword() {
  copiedEl.textContent = "";

  genPass1El.textContent = generatePassword();
  genPass2El.textContent = generatePassword();
}

function randomIndex() {
  return Math.floor(Math.random() * characters.length) + 1;
}

function generatePassword(length = 15) {
  let randomPassword = "";

  for (let i = 0; i < length; i++) {
    randomPassword += characters[randomIndex()];
  }

  return randomPassword;
}

function styleEmptyStateButtons() {
  let passBtnClassEls = document.querySelectorAll(".password-btn");

  for (let i = 0; i < passBtnClassEls.length; i++) {
    passBtnClassEls[i].style.width = "200px";
    passBtnClassEls[i].style.height = "40px";
  }
}
