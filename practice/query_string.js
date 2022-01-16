let url = "https://api.giphy.com/v1/gifs/search?q=cats&limit=10";
let url2 = "http://omdbapi.com/?t=jaws&apikey=123456&page=5";

const queryStringExtract = (url) => {
  let obj = {};
  let urlQueryStr = url.substring(url.indexOf("?") + 1);
  let queries = urlQueryStr.split("&");
  //   console.log(urlQueryStr);
  //   console.log(queries);
  queries.forEach((query) => {
    let querySplit = query.split("=");
    obj[querySplit[0]] = querySplit[1];
    // console.log(querySplit);
  });
  return obj;
};

console.log(queryStringExtract(url));
console.log(queryStringExtract(url2));

const query2 = (url) => {
  return new URLSearchParams(url);
};

console.log(query2(url));
console.log(query2(url2));

// {
//     q: "cats",
//     limit: "10"
//   }

//   {
//     t: "jaws",
//     apikey: "123456",
//     page: "5"
//   }
