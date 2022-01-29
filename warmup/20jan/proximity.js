// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. But now you want to build an App to help people decide what to find in the city.

// You are given the following set of data (locations in all within the Sydney CBD) as a result from an API request and you want to sort those results in terms of proximity to your starting location (General Assembly Sydney campus).

let startPoint = {
  name: "General Assembly",
  location: { lat: -33.8712, long: 151.2046 },
};

let results = [
  {
    name: "Sydney Harbour Bridge",
    location: { lat: -33.8523, long: 151.2108 },
  },
  {
    name: "Queen Victoria Building",
    location: { lat: -33.8717, long: 151.2067 },
  },
  { name: "Central Station", location: { lat: -33.8832, long: 151.207 } },
  { name: "Chinatown", location: { lat: -33.879, long: 151.2043 } },
  { name: "Sydney Opera House", location: { lat: -33.8568, long: 151.2153 } },
  {
    name: "Sea Life Sydney Aquarium",
    location: { lat: -33.8696, long: 151.2021 },
  },
];
// Write a program in JS to print the names of the results in order of closest to your location to furthest away.

// Also, explain what your assumptions are for the way you are calculating distance between the start point and the results.

const sortedArray = results
  .sort(
    (a, b) =>
      Math.abs(a.location.lat - startPoint.location.lat) -
      (b.location.long - startPoint.location.long)
  )
  .map((result) => result.name);

console.log(sortedArray);

//not correct - refer to notes Day37 for correct one
