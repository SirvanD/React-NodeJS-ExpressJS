// const movies = [
//   {
//     Title: "jaws",
//   },
//   {
//     Title: "jaws 2",
//   },
//   {
//     Title: "jaws 3d",
//   },
// ];

// ajax
// a = asynchronous (buzz word)
// ja = javascript
// x = xml (data in the format of xml) /json is the more appropriate format

//multi page
//single page app architecture(spa)

const list = document.querySelector("ul");

//we need axios cdn to read json files (like httparty for ruby)
// we add it to out html file right above our script file

//ruby version of making the api request
// synchronous- 'hello' print after fetching the api
// httparty is not making ajax request - normal http requests
// data = HTTParty.get('https://www.omdbapi.com/?s=jaws&apikey=6139fe0d')
// puts "hello"

function handleResponse(res) {
  console.log(res.data);
  //we need .Search because of the way omdb returns the json file
  let movies = res.data.Search;
  movies.forEach((movie) => {
    //create a new list item
    //append it to the end
    let li = document.createElement("li");
    li.textContent = movie.Title;
    list.appendChild(li);
  });
}

axios
  .get("https://www.omdbapi.com/?s=jaws&apikey=6139fe0d")
  .then(handleResponse);

console.log("hello me first");

// js & ruby - employee - do one thing at a time

//synchronous - one at a time - have to finish the previous task before moving on to the next
// also knows as serial/order

//asynchronous - move on to another task before the first one finishes- context switching

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
    let img = document.createElement("img");
    img.src = res.data.message;
    list.appendChild(img);
    // body.document(img);
  });
});
