//Build data

//const url = "/api/v1.0/wine";
// function buildWineTable(wineData) {
  d3.json(url).then(function(wineData){
   //d3 talk to flask route, containing data
   //separate d3.json calls
    
      // Print the data
      console.log(wineData);

      //Define Points
      points=[];
      wineData.forEach(d=> points.push(d.points)); 
      //console.log(points);
      //Define Price
      price=[];
      wineData.forEach(d=> price.push(d.price));
      //console.log(price);

    ////Make points and prices integers
      wineData.forEach(function(data) {
        data.points = +data.points;
        data.price = Number(data.price.replace(/[^0-9.-]+/g,""));
      });

  
  

  /////Create descriptive statistics 
    //function createDescrStats(variety) {
      //var filterVariety = wineData.filter(variety  === "Sparkling Blend");

      var max_points = ss.max(wineData.map(obj => obj.points))
      var min_points = ss.min(wineData.map(obj => obj.points))
      var avg_points = ss.mean(wineData.map(obj => obj.points))
      //console.log(avg_points);

      var max_price = ss.max(wineData.map(obj => obj.price))
      var min_price = ss.min(wineData.map(obj => obj.price))
      var avg_price = ss.mean(wineData.map(obj => obj.price))
      //console.log(avg_points);
    

    //  var descrStats = [
    // //   {"Description": ""},
    //   {"Average Price": avg_price},
    //   {"Max Price": max_price},
    //   {"Min Price": min_price},
    //   {"Average Points": avg_points},
    //   {"Max Points": max_points},
    //   {"Min Points": min_points},
    // //   {"Description": avg_price},
    // //   {"Average Price": avg_price},
    //  ]

    //console.log(descrStats);

    var statsTable = d3.select("#wine-statistics");
    statsTable.html("");
      statsTable.append("li").text(`Average Price: $${avg_price}.00`);
      statsTable.append("li").text(`Maximum Price: $${max_price}.00`);
      statsTable.append("li").text(`Minimum Price: $${min_price}.00`);
      statsTable.append("li").text(`Average Points: ${avg_points}`);
      statsTable.append("li").text(`Maximum Points: ${max_points}`);
      statsTable.append("li").text(`Minimum Points: ${min_points}`);

      // for (const [key, value] of Object.entries(descrStats)) {
      //   //console.log(`${key}: ${value}`);
      //   statsTable
      //       .append("p")
      //       .text(`${key}: ${value}`)
      // };


  //}
});


// }

