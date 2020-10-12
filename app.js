// create a dropdown for varieties
// create a bubble chart for prices for varieties, price is x

// function wineData(id) {
//     d3.csv("practice_dataset.csv").then((data) => {
//         console.log(data);
//     })
// }
function wineData(variety) {
    d3.csv("wine_data_updated.csv").then(function(data) {
        console.log(data);
        console.log(variety);
        // create varieties for y axis
        // var wineType = data.map(w => w.variety)
        // console.log(wineType)
        // var wineType2 = wineType.filter(w => {return w.variety == variety})
        // console.log(wineType2);
        // wineFinal = wineType2;
        // console.log("Variety Of Wine: ", wineFinal);
        // var wineSlices = wineFinal.slice(0, 5);
        // console.log(wineSlices)

        var wines = data.filter(function(w){ 
            console.log(w);
            return w.variety == variety});  // filter only wine varieties
        console.log(wines);
        var x_price = [...new Set(wines.map(function(p){ return p.price}))]; //[13, 20, 45, 200]
        // sort in descending order and slice x_price
        // var x_labels = ["0-15", "15 - 30"]
        console.log(x_price);
        var x_priceSlice = x_price.slice(0, 25);
        console.log(x_priceSlice);

        // qe have unique price values, we need to aggrgate the number of wines for ach price
        var y_numWines = [];

        x_price.map(function(p){
            var tmp = wines.filter(function(w){return w.price == p})
            if(tmp && tmp.length > 0){
                y_numWines.push(tmp.length)
            }
            else {y_numWines.push(0)}
            
        })
            console.log(y_numWines);
        // create varieties for pricing
        var winePrice = data.map(p => p.price)
        console.log(winePrice)
        // var winePrice = data.filter(p => {return p.price == price})
        // console.log(winePrice);
        // winePrice = winePrice;
        // will need to choose the price range, 
        console.log("Wine Prices: ", winePrice);
        var priceSlices = winePrice.slice(0, 5);
        console.log(priceSlices)

        // create labels for hover over function
        var labels = data.map(t => t.title)
        console.log(labels)
        var labelsSlices = labels.slice(0,25);
        console.log(labelsSlices)


// bubble chart
// where to put the conditional to change the sizing of the bubbles 
// amount of wines at that price range for y axis
// based on pricing
// logarithmic for the sizes scale. Use a logarthimic scale to cut down the size, multiple by a standard number to have the varied sizes
var trace = {
    // x: priceSlices,
    x: x_priceSlice.reverse(),
    // do the length of the price
    // y: wineSlices,
    y: y_numWines,
    text: labelsSlices,
    mode: 'markers',
    marker: {
        size: 50,
        // size: {
        //     if: priceSlices <= 50, return: 'green',
        //     else: priceSlices <= 100, return: 'red'},
            // else if: pricesSlices <= 100, return: 'yellow',
            // else: pricesSlices <= 500, return: 'blue'},
        // symbol: 'diamond',
        // sizeref: 2 * Math.max(x_price)/ (x_price[x_price.length-3] ** 2),
        sizeref: 1000,
        opacity: [0.5],
        color: 'red',
        // color: {
        //     if: priceSlices <= 50, return: 'green',
        //     else: priceSlices <= 100, return: 'red'},
        colorscale: 'rainbow',
    }
};

var data = [trace];

// add a conditional here? to change bubble colors
var layout = {
    xaxis: {title: "Wine Prices"},
    title: "Find The Perfectly Priced Wine In Your Range",
    height: 400,
    width: 800,
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100,

    }

};

Plotly.newPlot("bubble", data, layout);
    })
};
//wineData("Sparkling Blend");

// link to HTML optionChanged
function optionChanged(variety) {
    wineData(variety);
}
// function for dropdown
// need to write a condition to put different wines into groups
function init() {
    var dropdownMenu = d3.select("#selDataset");
    d3.csv("wine_data_updated.csv").then(function(data, err) {
        console.log(data);
        if (err) throw err; 
        var wineVariety = [...new Set(data.map(function(p){ return p.variety}))]; 
        wineVariety.forEach(function(wineBottle) {
            //console.log(wineBottle.variety)
            // use filter for a set, when you do the plotting use the variety for the plotting and use aggregation, do an average for the cost
            // or do a box plot and show the port itself that there are price variations or aggregate to an avg or a mean or do a count/length, should be the lesser number and length will give count of items
            // 
            // var filterWine = wineBottle.filter(b => b.variety === variety);
            // console.log(filterWine);
            dropdownMenu.append("option").text(wineBottle).property("value")
        });
        // call on functions to print in dropdown
        wineData(data[0].variety);
    });
}

init();






