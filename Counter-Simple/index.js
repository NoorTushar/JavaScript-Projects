const counterValueElement = document.querySelector("#counterValue");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");

let counterValue = 0;
function increment() {
  counterValue++;
  counterValueElement.textContent = counterValue;
}
function decrement() {
  counterValue--;
  counterValueElement.textContent = counterValue;
}

incrementButton.addEventListener("click", () => {
  increment();
});
decrementButton.addEventListener("click", () => {
  decrement();
});
