// function for dropdown
const url = "/api/v1.0/wine";
function init() {
    var dropdownMenu = d3.select("#selDataset");
    d3.json(url).then(function(data)   {
        console.log(data);
        var wineVariety = [...new Set(data.map(function(p){ return p.variety}))]; 
        wineVariety.forEach(function(wineBottle) {
            dropdownMenu.append("option").text(wineBottle).property("value")
        });
        // call on functions to print in dropdown
        wineData(data[0].variety);
    });
}

init();