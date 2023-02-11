 // set the dimensions and margins of the graph  
 let margin = { top: 10, right: 30, bottom: 50, left: 60 },
 width = 460 - margin.left - margin.right,
 height = 400 - margin.top - margin.bottom;

 // The g element keeps everything to do with the svg together and so it can be moved around as one.
 let svg = d3
   .select("#my_dataviz")
   .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
   .append("g")
   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// function parseLOG(d) {

// console.log(d);
// }

// // load csv dataset 'artworks'

// d3.csv("data/ArtistArtworkCountTop100.csv").then(parseLOG);

// function parseLOG(d) {

// console.log(d);
    
// }

//Read the data
let promises = [d3.csv("data/ArtistArtworkCountTop100.csv")];
let allData = [];

// Promise.all(promises).then(function (data) {
//     data.forEach(function (eachDataset) {
//       eachDataset.forEach(function (d) {
//         d["Poverty Rate (%)"] = +d["Poverty Rate (%)"];
//         d["Year"] = new Date(d["Year"]);
//         if (
//           d.hasOwnProperty(
//             "Adult literacy, 25 or more years old (% of population aged 25 or more)"
//           )
//         ) {
//           d[
//             "Adult literacy, 25 or more years old (% of population aged 25 or more)"
//           ] = +d[
//             "Adult literacy, 25 or more years old (% of population aged 25 or more)"
//           ];
//         }
//       });
//     });
  
//     allData = data;
  
//     updateChart(allData);
//   });

