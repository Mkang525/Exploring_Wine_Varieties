//Build data
var descriptions = wine_descr_data;
console.log(descriptions);

var d_variety = descriptions.Variety;
var type = descriptions.Type;
var descr = descriptions.Descriptions

var wineVariety;

const table_url = "/api/v1.0/wine";

// function for dropdown
const url = "/api/v1.0/map";
d3.json(url).then(function (data) {
  // console.log(data);
  wineVariety = [...new Set(data.map(function (p) { return p.variety }))];
  console.log(wineVariety)
  init();
});

function init() {
  var dropdownMenu = d3.select("#selDataset");
  wineVariety.forEach(function (wineBottle) {
    dropdownMenu.append("option").text(wineBottle).property("value")
  });
  // call on functions to print in dropdown
  tableData(wineVariety[0]);
}

function tableData(selectedWine) {
  d3.json(table_url).then(function (vinData) {
    vinData = vinData.filter(wine => wine.variety == selectedWine);
    var filteredDescr = descriptions.filter(wine => wine.Variety == selectedWine)[0];

    console.log(filteredDescr);
    console.log(vinData);

    //Define Points
    points = [];
    vinData.forEach(d => points.push(d.points));
    // console.log(points);

    //Define Price
    price = [];
    vinData.forEach(d => price.push(d.price));

    var statspoints = vinData.map(obj => obj.points);
    var statsprice = vinData.map(obj => obj.price);

    var max_points = ss.max(statspoints);
    var min_points = ss.min(statspoints);
    var points_avg = ss.mean(statspoints);
    var avg_points = points_avg.toFixed(2);

    var max_price = ss.max(statsprice);
    var min_price = ss.min(statsprice);
    var price_avg = ss.mean(statsprice);
    var avg_price = price_avg.toFixed(2);

    var statsTable = d3.select("#wine-statistics");
    statsTable.html("");

    statsTable.append("h5").text(filteredDescr.Variety);
    statsTable.append("p").text(`Type: ${filteredDescr.Type}`);
    statsTable.append("p").text(filteredDescr.Descriptions);
    statsTable.append("br");
    statsTable.append("li").text(`Average Price: $${avg_price}`);
    statsTable.append("li").text(`Maximum Price: $${max_price}.00`);
    statsTable.append("li").text(`Minimum Price: $${min_price}.00`);
    statsTable.append("li").text(`Average Points: ${avg_points}`);
    statsTable.append("li").text(`Maximum Points: ${max_points}`);
    statsTable.append("li").text(`Minimum Points: ${min_points}`);

  });
}

d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged() {
  var dropdownMenu = d3.select("#selDataset");
  var selectedWine = dropdownMenu.property("value");
  tableData(selectedWine);
}

