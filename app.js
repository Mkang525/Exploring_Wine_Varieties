// create a dropdown for varieties
// create a bubble chart for prices for varieties, price is x

// function wineData(id) {
//     d3.csv("practice_dataset.csv").then((data) => {
//         console.log(data);
//     })
// }
function wineData(variety) {
    d3.csv("practice_dataset.csv").then(function(data) {
        console.log(data);

        var wineType = data.map(w => w.variety)
        console.log(wineType)
        // var wineType = data.filter(w => w.variety)
        console.log("Variety Of Wine: ", wineType);
        // var wineSlices = wineType
        
    })
};
wineData();

// bubble chart

function optionChanged(variety) {
    wineData(variety);
}
// need to write a condition to put different wines into groups
function init() {
    var dropdownMenu = d3.select("#selDataset");
    d3.csv("practice_dataset.csv").then(function(data, err) {
        console.log(data);
        if (err) throw err; 
        data.forEach(function(variety) {
            dropdownMenu.append("option").text(variety).property("value")
        });
        // call on functions to print in dropdown
        wineData(data.variety);
    });
}

init();

// d3.csv("practice_dataset.csv").then(function(data) {
//     var js = JSON.parse(json);
//     var select = d3.select("selDataset");
//     var 

// });





