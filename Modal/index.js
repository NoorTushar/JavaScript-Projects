const modalOpenBtn = document.querySelector("#openModalBtn");

const modalCloseBtn = document.querySelector("#modalCloseBtn");

const modalBody = document.querySelector("#modalContainer");

modalOpenBtn.addEventListener("click", () => {
  modalBody.style.display = "block";
});

modalCloseBtn.addEventListener("click", () => {
  modalBody.style.display = "none";
});

window.addEventListener("click", (e) => {
  console.log(e);
  if (e.target === document.querySelector("#modal")) {
    modalBody.style.display = "none";
  }
});
