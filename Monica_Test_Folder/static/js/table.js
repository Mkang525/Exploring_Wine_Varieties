// const descr_url = "/api/v1.0/wine"
// d3.json(descr_url).then(function(description){
//   console.log(descriptions);
// });

//Build data
var vinData;
const table_url = "/api/v1.0/wine";
//function tableData(variety){
 //d3.csv("wine_data_updated.csv").then(function(vinData){
   d3.json(table_url).then(function(vinData){
 
   //Print the data
   
 
   //Define Points
   points=[];
   vinData.forEach(d=> points.push(d.points));
   // console.log(points);
   //Define Price
   price=[];
   vinData.forEach(d=> price.push(d.price));
   // console.log(price);
 
   //Define variety
     // variety=[];
     // vinData.forEach(d=> variety.push(d.variety));
     // // console.log(variety);
    
   //Make points and prices integers
    vinData.forEach(function(data) {
      if (data.price==null){
        data.price = 0
      }
      else{data.price = Number(data.price.replace(/[^0-9.-]+/g,""));}
       data.points = +data.points;
       });
      
  // console.log(vinData);
      var statspoints = vinData.map(obj => obj.points);
      var statsprice = vinData.map(obj => obj.price);

      var max_points = ss.max(statspoints);
      var min_points = ss.min(statspoints);
      var points_avg = ss.mean(statspoints);
      var avg_points = points_avg.toFixed(2);
    //  console.log(avg_points);
      
      var max_price = ss.max(statsprice);
      var min_price = ss.min(statsprice);
      var price_avg = ss.mean(statsprice);
      var avg_price = price_avg.toFixed(2);

     var statsTable = d3.select("#wine-statistics");
     statsTable.html("");
     statsTable.append("li").text(`Average Price: $${avg_price}`);
     statsTable.append("li").text(`Maximum Price: $${max_price}.00`);
     statsTable.append("li").text(`Minimum Price: $${min_price}.00`);
     statsTable.append("li").text(`Average Points: ${avg_points}`);
     statsTable.append("li").text(`Maximum Points: ${max_points}`);
     statsTable.append("li").text(`Minimum Points: ${min_points}`);
    
    //  console.log(statsTable);
   });
 
  
// function for dropdown
// function optionChanged(variety){
//   tableData();
//}
 
// function init() {
//     var dropdownMenu = d3.select("#selDataset").on("change", optionChanged);
//     d3.json("/api/v1.0/wine").then(function(data)   {
//         console.log(data);
//         var wineVariety = [...new Set(data.map(function(p){ return p.variety}))];
//         wineVariety.forEach(function(vinData
//           ) {
//             dropdownMenu.append("option").text(vinData
//               ).property("value")
//         });
//         // call on functions to print in dropdown
//         tableData(data[0].variety);
//     });
// }
//  init(variety);



