const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(
//   (company) => company.category == "Retail"
// );

// const companies1980 = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );

// companies that lasted more or 10 years

// const companies10years = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(retailCompanies);
// console.log(companies1980);
// console.log(companies10years);

// map
// create array of company names

const agesSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

console.log(agesSquare);
