let userInput = document.querySelector(".farenheit");
let btnConvert = document.querySelector(".btn-convert");
let display = document.querySelector(".display");

btnConvert.addEventListener("click", (event) => {
  event.preventDefault();
  let farenheit = userInput.value;
  let celcius = ((farenheit - 32) * 5) / 9;
  display.textContent = celcius.toFixed(2);
});
