d3.csv("data/gapminder.csv").then(function(data) {
});

// 1. define dimensions of SVG & create SVG canvas

const width = document.querySelector("#chart").clientWidth;
const height = document.querySelector("#chart").clientHeight;

console.log(window.innerWidth);
console.log(docuent.querySelector("#chart")).clientWidth;

// initializing the viewport of the SVG canvas
// an SVG canvas viewport has a width and height
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width);
    .attr("height", height);

// 2. filter the data (d3 filter method)

// initialize new variable
let filtered_data =data.filter(function(d)) {
});

// 3. determine min and max values of variables

// 4. 

// 5. draw axes

// 6. draw bars

// 7. 