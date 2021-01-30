var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var year = txtInput.value;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    outputDiv.innerText = year + " year is leap year";
  } else {
    outputDiv.innerText = year + " year is not a leap year";
  }
}

btnTranslate.addEventListener("click", clickHandler);
