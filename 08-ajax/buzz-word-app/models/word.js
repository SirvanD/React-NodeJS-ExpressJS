var words = [
  {
    content: "array",
    category: "javascript",
  },
  {
    content: "text-align",
    category: "css",
  },
  {
    content: "destrcuturing",
    category: "javascript",
  },
];

const word = {
  // findMany: ()=>{}
  findMany() {
    return words;
  },
  create(newWord) {
    words.push(newWord);
  },
  delete() {},
};

module.exports = word;

//word.create()
//word.delete()
