//Build data
var vinData;
const table_url = "/api/v1.0/wine";
//function tableData(variety){
 //d3.csv("wine_data_updated.csv").then(function(vinData){
   d3.json(table_url).then(function(vinData){
 
   //Define Points
   points=[];
   vinData.forEach(d=> points.push(d.points));
   // console.log(points);
   //Define Price
   price=[];
   vinData.forEach(d=> price.push(d.price));
   // console.log(price);
    
   //Make points and prices integers
   //  vinData.forEach(function(data) {
   //    if (data.price==null){
   //      data.price = 0
   //    }
   //    else{data.price = Number(data.price.replace(/[^0-9.-]+/g,""));}
   //     data.points = +data.points;
   //     });
      
  // console.log(vinData);

     var statspoints = vinData.map(obj => obj.points);
     var statsprice = vinData.map(obj => obj.price);

     var max_points = ss.max(statspoints);
     var min_points = ss.min(statspoints);
     var points_avg = ss.mean(statspoints);
     var avg_points = points_avg.toFixed(2);
    //  console.log(avg_points);
      
     var max_price = ss.max(statsprice);
     var price_avg = ss.mean(statsprice);
     var avg_price = price_avg.toFixed(2);

     var slope_intercept = ss.linearRegression([statspoints,statsprice]);
     //console.log(slope_intercept);
     var m = slope_intercept.m;
     var slope = m.toFixed(2);
     
     //console.log(slope);

     var b = slope_intercept.b;
     var intercept = b.toFixed(2);
     //console.log(intercept);
        //    console.log(slope_intercept);

           //var corr = ss.sampleCorrelation([statspoints,statsprice]);
        //    console.log(corr);

     var statsTable = d3.select("#wine-statistics");
     statsTable.html("");
     statsTable.append("li").text(`Average Price: $${avg_price}`);
     statsTable.append("li").text(`Maximum Price: $${max_price}.00`);
     statsTable.append("li").text(`Minimum Price: $4.00`);
     statsTable.append("li").text(`Average Points: ${avg_points}`);
     statsTable.append("li").text(`Maximum Points: ${max_points}`);
     statsTable.append("li").text(`Minimum Points: ${min_points}`);
     statsTable.append("br")
     statsTable.append("p").text(`A linear regression model of price and points produces the regression line:`);
     statsTable.append("p").text(`estimated price)=${slope}∙points+${intercept}`);

    
    //  console.log(statsTable);
   });

 