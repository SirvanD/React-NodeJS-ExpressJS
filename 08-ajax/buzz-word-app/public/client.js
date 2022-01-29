console.log("client side js");

//find elements thats already gard coded in html
var ul = document.querySelector(".words");
const newWordForm = document.querySelector(".new-word-form");
const newWordInput = document.querySelector(".new-word-input");

function renderWords() {
  let url = "http://localhost:8080/api/words";
  axios.get(url).then((res) => {
    ul.innerHTML = "";
    let words = res.data;

    words.forEach((word) => {
      let li = document.createElement("li");
      li.textContent = word.content;
      ul.appendChild(li);
    });
  });
  ul.innerHTML = "loading...";
}

//event handler
function handleSubmit(event) {
  event.preventDefault();
  let newWord = newWordInput.value;

  //send data in body as json
  axios
    .post("/api/words", {
      content: newWord,
      category: "css",
    })
    .then((res) => {
      renderWords();
    });

  //make our own request to another endpoint
  console.log("send request to another endpoint");
}

renderWords();

newWordForm.addEventListener("submit", handleSubmit);
