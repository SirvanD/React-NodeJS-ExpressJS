let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5";
const parseQueryString = (url) => {
  let queryStrValuePairs = {};
  let urlQueryStr = url.substring(url.indexOf("?") + 1); // can also use slice
  let queries = urlQueryStr.split("&");

  queries.forEach((query) => {
    let querySplit = query.split("=");
    queryStrValuePairs[querySplit[0]] = querySplit[1];
  });
  return queryStrValuePairs;
};

console.log(parseQueryString(url));
