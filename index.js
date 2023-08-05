const characters = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z",  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z",  "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "~",  "`",  "!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "(",  ")",  "_",  "-",  "+",  "=",  "{",  "[",  "}",  "]",  ",",  "|",  ":",  ";",  "<",  ">",  ".",  "?",  "/"];

const genPass1El = document.getElementById("gen-pass-1");
const genPass2El = document.getElementById("gen-pass-2");
const copiedEl = document.getElementById("copied-msg");
const passwordLengthEl = document.getElementById("length-input");

if (genPass1El.textContent === "" && genPass2El.textContent === "") {
  styleEmptyStateButtons();
}


genPass1El.addEventListener("click",  async function(){
  if(this.textContent){
     await navigator.clipboard.writeText(genPass1El.textContent);
    copiedEl.textContent = "Copied to Clipboard!";
  }
})

genPass2El.addEventListener("click", async function(){
  if(this.textContent){
     await navigator.clipboard.writeText(genPass1El.textContent);
    copiedEl.textContent = "Copied to Clipboard!";
  }
})


async function getPassword() {
  copiedEl.textContent = "";
  if(passwordLengthEl.value >= 1 && passwordLengthEl.value <=60){
    genPass1El.textContent = generatePassword(passwordLengthEl.value);
    genPass2El.textContent = generatePassword(passwordLengthEl.value);
  }
}

function randomIndex() {
  return Math.floor(Math.random() * characters.length) + 1;
}

function generatePassword(length) {
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
