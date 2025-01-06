const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const output = document.getElementById("output");
const input = document.getElementById("input");
const inputUp = document.getElementById("inputUp");
const inputDown = document.getElementById("inputDown");
const reset = document.getElementById("reset");
const error = document.getElementById("error");

let count = 0;
error.innerHTML = "";

// ========================plus=========
plus.addEventListener("click", () => {
  let value = input.value;
  if (isNaN(value)) {
    error.innerHTML = "Give a valid number";
  } else if (value === "") {
    output.innerHTML = ++count;
    error.innerHTML = "";
    output.style.color = count < 0 ? "red" : "#CBD5E1";
  } else if (!isNaN(value)) {
    value = parseInt(input.value);
    count += value;
    output.innerHTML = count;
    error.innerHTML = "";
    output.style.color = count < 0 ? "red" : "#CBD5E1";
  }
});
// ========================plus=========

// ========================minus=========
minus.addEventListener("click", () => {
  let value = input.value;
  if (isNaN(value)) {
    error.innerHTML = "Give a valid number";
  } else if (value === "") {
    output.innerHTML = --count;
    output.style.color = count < 0 ? "red" : "#CBD5E1";
  } else if (!isNaN(value)) {
    value = parseInt(input.value);
    count -= value;
    output.innerHTML = count;
    output.style.color = count < 0 ? "red" : "#CBD5E1";
  }
});
// ========================minus=========

// ========================inputUp=========
inputUp.addEventListener("click", () => {
  let value = parseInt(input.value) || 0;
  input.value = ++value;
});
inputDown.addEventListener("click", () => {
  let value = parseInt(input.value) || 0;
  if (value > 1) {
    input.value = --value;
  }
});
// ========================inputUp=========

// ========================reset=========
reset.addEventListener("click", () => {
  count = 0;
  input.value = "";
  output.innerHTML = 0;
  error.innerHTML = "";
});
// ========================reset=========
