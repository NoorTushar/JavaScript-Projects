const colorCodeDisplay = document.querySelector("#displayColorCode");

const colorGeneratorBtn = document.querySelector("#colorGeneratorBtn");

document.body.style.backgroundColor = colorCodeDisplay.textContent;

colorGeneratorBtn.addEventListener("click", () => {
  const colorCodes = "0123456789ABCDEF";
  let hexCode = "#";
  for (i = 0; i < 6; i++) {
    hexCode = hexCode + colorCodes[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hexCode;
  colorCodeDisplay.textContent = hexCode;
});
