const colors = [
  "orange",
  "gold",
  "green",
  "red",
  "blue",
  "olive",
  "beige",
  "grey",
  "rgba(133,122,200)",
  "#f15025",
];

const btn = document.getElementById("btn"); // button
const color = document.querySelector(".color"); // span text

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});
