const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const isValid = () => {
  const regex = /^1?[ -]?(?:\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
  return regex.test(input.value);
};

const handleInput = () => {
  if (input.value == "") {
    alert("Please provide a phone number");
    return false;
  }
  return true;
};

const handleOutput = () => {
  if (handleInput()) {
    if (isValid()) {
      results.className = "";
      results.classList.add("green-background");
      results.innerText = `Valid US number: ${input.value}`;
      input.value = "";
    } else {
      results.className = "";
      results.classList.add("red-background");
      results.innerText = `Invalid US number: ${input.value}`;
      input.value = "";
    }
  }
};

checkBtn.addEventListener("click", handleOutput);
clearBtn.addEventListener("click", () => {
  input.value = "";
  results.className = "";
  results.innerText = "";
  results.classList.add("hide");
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleOutput();
  }
});