d3.json("artists.json").then(parseLOG);

function parseLOG(d) {

    console.log(d);
    
 }



d3.csv("artworks.csv").then(parseLOG);

function parseLOG(d) {

    console.log(d);
    
}