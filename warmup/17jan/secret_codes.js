const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const code = "NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG";
const code2 =
  "FLYLOLCDWLRQ DGYDQFHV EB HAWHQGLQJ WKH QXPEHU RI LPSRUWDQW RSHUDWLRQV ZKLFK ZH FDQ SHUIRUP ZLWKRXW WKLQNLQJ DERXW WKHP";
const code3 = "BRXU OXQFK LV QRZ HAWHQGHG WR WKUHH KRXUV HYHUBGDB";

//map through the secret code
//find the index of each char in alphabet
// decrease it by 3
//return the char with decreased index in alphabet

const decipher = (codeInput) => {
  const deciphered = codeInput
    .toLowerCase()
    .split("")
    .map((char) => {
      if (char == " ") {
        return char;
      } else if (char == ".") {
        return char;
      } else {
        index = alphabet.indexOf(char);
        decipheredIndex = index - 3;
        return alphabet[decipheredIndex];
      }
    });
  return deciphered.join("");
};

console.log(decipher(code));
console.log(decipher(code2));
console.log(decipher(code3));
