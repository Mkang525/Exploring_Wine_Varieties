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

        // create varieties for y axis
        var wineType = data.map(w => w.variety)
        console.log(wineType)
        var wineType2 = wineType.filter(w => {return w.variety == variety})
        console.log(wineType2);
        wineFinal = wineType2;
        console.log("Variety Of Wine: ", wineFinal);
        var wineSlices = wineFinal.slice(0, 5);
        console.log(wineSlices)

        // create varieties for pricing
        var winePrice = data.map(p => p.price)
        console.log(winePrice)
        // var winePrice = data.filter(p => {return p.price == price})
        // console.log(winePrice);
        // winePrice = winePrice;
        console.log("Wine Prices: ", winePrice);
        var priceSlices = winePrice.slice(0, 5);
        console.log(priceSlices)

        // create labels for hover over function
        var labels = data.map(t => t.title)
        console.log(labels)
        var labelsSlices = labels.slice(0,5);
        console.log(labelsSlices)


// bubble chart
// where to put the conditional to change the sizing of the bubbles 
// based on pricing
var trace = {
    x: priceSlices,
    y: wineSlices,
    text: labelsSlices,
    mode: 'markers',
    marker: {
        size: 50,
        symbol: 'diamond',
        sizeref: 1000,
        opacity: [0.5],
        color: 'red',
    }
};

var data = [trace];

var layout = {
    xaxis: {title: "Pricing"},
    title: "Pricing For Wine Varieties",
    height: 400,
    width: 800,
    margin: {
        l: 100
    }
};

Plotly.newPlot("bubble", data, layout);
    })
};
wineData();

// link to HTML optionChanged
function optionChanged(variety) {
    wineData(variety);
}
// function for dropdown
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





