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
let filtered_data = data.filter(function(d) {
    return d.country === 'United States';
});


// 3. standard syntax to determine min and max values of variables; '+' converts a string to a number; '{}' indicates javascript object/fn

d3.min(filtered_data, function(d) { return +d.lifeExp; })
d3.max(filtered_data, function(d) { return +d.lifeExp; })

const lifeExp = {
    min: d3.min(filtered_data, function(d) { return +d.lifeExp; }),
    max: d3.max(filtered_data, function(d) { return +d.lifeExp; })
}

console.log(lifeExp.min, lifeExp.max);

// 4. create scales

const margin = {top: 50, left: 100, right: 50, bottom: 100};

const xScale = d3.scaleBand()
    .domain(["1952", "1957", "1962", "1967", "1972", "1977", "1982", "1987", "1992", "1997", "2002", "2007"])
    .range([margin.left, width - margin.right])
    .padding(0.5);

d3.scaleLinear()
    .doman([50, lifeExp.max])
    .range([height-margin.bottom, margin.top]);

// 5. draw axes

// 6. draw bars

// 7. 