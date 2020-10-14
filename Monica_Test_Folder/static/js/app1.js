
const url = "/api/v1.0/wine";

d3.json(url).then(function(data)   {
    
    function wineData(data) {
        d3.csv("wine_data_updated.csv").then(function(data) {
            console.log(data);
            console.log(variety);
}