const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn"); // button
const color = document.querySelector(".color"); // span
const body = document.getElementsByTagName("body");

function getRandomColor() {
  let newColor = "#";

  for (let i = 0; i < 6; i++) {
    const randomColor = Math.floor(Math.random() * hex.length);
    newColor += hex[randomColor];
  }

  return newColor;
}

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();

  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
