function getData() {
	let data = [];
	let numItems = Math.ceil(Math.random() * 5);

	for(let i=0; i<numItems; i++) {
		data.push(40);
	}

	return data;
}

function update(data) {
	d3.select('.chart')
		.selectAll('circle')
		.data(data)
		.join(
			function(enter) {
				return enter.append('circle')
					.style('opacity', 0.25);
			},
			function(update) {
				return update.style('opacity', 1);
			},
      function(exit) {
      return exit.remove();
    })
  
		.attr('cx', function(d, i) {
			return i * 100;
		})
		.attr('cy', 50)
		.attr('r', function(d) {
			return 0.5 * d;
		})
		.style('fill', 'orange');
}

function updateAll() {
	let myData = getData();
	console.log("myData", myData);
	update(myData);
}

updateAll();

d3.select("button")
	.on("click", updateAll);