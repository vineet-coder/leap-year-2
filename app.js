var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var num = txtInput.value;

  var result = math.pow(num, 3);
  outputDiv.innerText = result;
}

btnTranslate.addEventListener("click", clickHandler);
