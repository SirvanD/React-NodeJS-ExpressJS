var secret = "mistyrose";

function getFavColor() {
  return secret;
}

function getMehColor() {
  return "red";
}

// module.exports = getFavColor;

module.exports = {
  getFavColor: getFavColor,
  getMehColor: getMehColor,
};
