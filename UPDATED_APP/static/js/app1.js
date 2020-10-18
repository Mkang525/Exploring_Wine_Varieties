// create json for a function
const url = "/api/v1.0/wine";
// function to create x and y axis for the bubble charts
function wineData(variety) {
    d3.json(url).then(function(data)   {
        console.log(data);
        console.log(variety);
        // create filter for w function for the variety of the wines
        var wines = data.filter(function(w){ 
            console.log(w);
            return w.variety == variety});  // filter only wine varieties
        console.log(wines);
        var x_price = [...new Set(wines.map(function(p){ return p.price}))]; //[13, 20, 45, 200]
        // sort in descending order and slice x_price
        console.log(x_price);
        var x_priceSlice = x_price.slice(0, 25);
        console.log(x_priceSlice);

        // create open array for y to count the wines at prices
        var y_numWines = [];
        // create a x axis for the pricing. 
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
var trace = {
    x: x_priceSlice.reverse(),
    y: y_numWines,
    text: labelsSlices,
    mode: 'markers',
    marker: {
        size: 50,
        sizeref: 1000,
        opacity: [0.5],
        color: 'red',
        colorscale: 'rainbow',
    }
};

var data = [trace];

var layout = {
    xaxis: {title: "Wine Prices"},
    title: "Find The Perfectly Priced Wine In Your Range",
    // label the Y, space out the bubbles more
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

// link to HTML optionChanged
function optionChanged1() {
    console.log("inside bubbble");
    var dropdownMenu = d3.select("#selDataset");
    var selectedWine = dropdownMenu.property("value");
    wineData(selectedWine);
}
//d3.selectAll("#selDataset").on("change", optionChanged1);
// function for dropdown
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


