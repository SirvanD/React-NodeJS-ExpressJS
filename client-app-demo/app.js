console.log("hello client side js");

var btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("clicked");
});

const colors = ["red", "green", "blue"];
var section = document.querySelector("section");

colors.forEach((color) => {
  var h2 = document.createElement("h2");
  h2.textContent = color;
  h2.style.backgroundColor = color;
  section.appendChild(h2);
});
