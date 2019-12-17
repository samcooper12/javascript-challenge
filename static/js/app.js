// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody')


data.forEach((siting) => {
  var row = tbody.append("tr");
  Object.entries(siting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

console.log(data)


var submit = d3.select('#filter-btn')

res = [];

submit.on("click", function() {
  var filter = d3.select('#datetime').node()
  var dateFilter = filter.value


  var filteredResults = data.filter(function(data) {
  	
  	data.forEach((siting) => {

  		if(siting.datetime = dateFilter) {
  		res.append(siting) }
  		})
  })
  // Set the counter h1 text to the new count
});


// var filtered = roster.filter(function(

// 	));
