var btnTranslate = document.querySelector("#btntranslate");
var textInput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var year = textInput.value;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    outputDiv.innerText = year + " is a leap year!!";
  } else {
    outputDiv.innerText = year + " is not a leap year!!";
  }
}

btnTranslate.addEventListener("click", clickHandler);
