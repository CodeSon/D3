/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/
/*
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height",400)
	.style("background", "#f4f4f4");
  
  // Adding some shapes to the screen 
var circle= svg.append("circle")
	.attr("cx",350)
	.attr("cy",300)
	.attr("r",50)
	.attr("fill", "blue")

	d3.select("svg")
		.append("ellipse")
		.attr("cx",200)
		.attr("cy",200)
		.attr("rx",15)
		.attr("ry",35)
		.attr("fill", "red");


	d3.select("svg")
		.append("line")
		.attr("x1",120)
		.attr("y1",75)
		.attr("x2",200)
		.attr("y2",65)
		.attr("stroke", "green");

		d3.select("svg")
		.append("rect")
		.attr("x",250)
		.attr("y",0)
		.attr("width",100)
		.attr("height",65)
		.attr("fill", "black");





// creating a seperate svg



var svg = d3.select("#chart-area2").append("svg")
	.attr("width", 500)
	.attr("height",400)
	.style("background", "#f4f4f4");
  
  // Adding some shapes to the screen 
var circle= svg.append("circle")
	.attr("cx",200)
	.attr("cy",200)
	.attr("r",35)
	.attr("fill", "red");*/


	 //selections and data joins

	
	var data = [25, 20, 10, 12, 15]
	
	var svg= d3.select("#d-join").append("svg")
		.attr("width",400)
		.attr("height",400)
		
	var circles = svg.selectAll("circle") 
		.data(data);

	circles.enter()
		.append("circle")
		.attr("cx", function(d, i){
			return (i * 50) + 25;

		})

		.attr("cy", 25)
		.attr("r", function(d){

			return d;

		})
		.attr("fill", "blue");        
