const url = "https://data.police.uk/api/leicestershire/NC04/priorities";

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
