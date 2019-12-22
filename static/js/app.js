// from data.js
var tableData = data;

var filter = '';
var dateFilter; 

var submit = d3.select('#filter-btn')

var res = [];

var tbody = d3.select('tbody')

function clearTable(){
  var toRemove = tbody.selectAll('tr')
  toRemove.remove()
}

// init 

data.forEach((siting) => {
  var row = tbody.append("tr");
  Object.entries(siting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

console.log(data)

submit.on("click", function() {

  filter = d3.select('#datetime').node()
  dateFilter = filter.value

  // if (dateFilter !==  '') {

    clearTable();
  // }

  // else {
  //   return
  // }
  // data.forEach((siting) => { //   if() { //   } //  console.log(siting.datetime) //   }) // })

  data.forEach((siting) => {
    var check = siting.datetime
    console.log('check   ', check)
    console.log('~~~~', dateFilter, '~~~~')

  //  var row = tbody.append("tr");
    if (dateFilter == check){

      var row = tbody.append("tr")
                Object.entries(siting).forEach(([key, value]) => {

                  var cell = row.append("td");
                  cell.text(value);
                })
    }
    else {
      return
    }

    // else {
    //   console.log("return in else is next");
    //   return
    // }
  // var row = tbody.append("tr");
  // Object.entries(siting).forEach(([key, value]) => {
  //   var cell = row.append("td");
  //   cell.text(value);
  })
  });
//});

//   var filter = d3.select('#datetime').node()
//   console.log('function ran - var filter ', filter)
//   var dateFilter = filter.value
// })
//   function queryInput(input) {

//     if (true) {

//     }
//   }

// }
  // console.log("event")
  // var filter = d3.select('#datetime').node()
  // console.log('function ran - var filter ', filter)
  // var dateFilter = filter.value
  // console.log(dateFilter)
//   console.log('function ran - var dateFilter (value of filter)  ', dateFilter )
// });

          //   var filteredResults = data.filter(function(data) {
            	
          //   	data.forEach((siting) => {

          //   		if(siting.datetime = dateFilter) {
          //   		res.append(siting) }
          //   		})
          //   })
          //   // Set the counter h1 text to the new count
          // });


// var filtered = roster.filter(function(

// 	));
