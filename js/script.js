const inputbox = document.getElementById("inputbox");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const range = document.getElementById("range");
const valueDisplay = document.querySelector(".value");
const upperbtn = document.getElementById("uppercase");
const lowerbtn = document.getElementById("Lowercase");
const digitbtn = document.getElementById("Digits");
const symbol = document.getElementById("Symbols");
const histul = document.querySelector(".historyul");

range.addEventListener("input", function () {
  valueDisplay.textContent = range.value;
});

function generatePassword(length) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const symbols = "= ~!@#$%^&*()_+[]{}|;:,./<i>?";
  let characters = "";
  characters += upperbtn.checked ? uppercase : "";
  characters += lowerbtn.checked ? lowercase : "";
  characters += digitbtn.checked ? digits : "";
  characters += symbol.checked ? symbols : "";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

generateBtn.addEventListener("click", function () {
  const length = range.value;
  inputbox.value = generatePassword(length);
  const generatedPassword = generatePassword(length);
  if (generatedPassword !== "") {
    const li = document.createElement("li");
    li.textContent = inputbox.value;
    histul.appendChild(li);
  }
});
copyBtn.addEventListener("click", function () {
  navigator.clipboard
    .writeText(inputbox.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Error copying password to clipboard:", err);
    });
});

document.getElementsByClassName("clear-hist-btn")[0].addEventListener("click",()=>{
histul.innerHTML="";
})
