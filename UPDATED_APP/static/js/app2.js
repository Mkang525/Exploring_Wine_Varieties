
const url1 = "/api/v1.0/wine";

function createBarChart(variety) {
    d3.json(url1).then(function (data) {
        console.log(data);
        console.log(variety);

        var filteredWines = data.filter(dataSet => dataSet.variety === variety);
        var varietyCount = filteredWines.map(dataSet => dataSet.counts)
        var sumCounts = varietyCount.reduce(function (a, b) {
            return a + b;
        }, 0);

        console.log("sum counts", sumCounts);
        console.log("variety count", varietyCount);

        var country = filteredWines.map(dataSet => dataSet.country);


        console.log("country", country);

        var trace1 = {
            x: varietyCount,
            y: country,
            // text: labels,
            // mode = 'markers',
            marker: {
                color: "red"
            },
            type: "bar",
            orientation: "h"
        };

        //Create data/trace
        var data = [trace1];

        // //Define the Layout 
        var layout1 = {
            title: "Count of Wine Varietal by Country",
            // xaxis: { title: "Title"},
            yaxis: {
                tickmode: "linear",
                tickangle: 1,
                xaxis:
                    tickmode = "linear",
            },
            width: 600,
            height: 400,
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
        // // Plot the bar chart
        Plotly.newPlot("bar", data, layout1);
    });



}

// function for dropdown 
function init() {
    var dropdownMenu = d3.select("#selDataset");
    d3.json(url1).then(function (data) {
        console.log(data);
        var wineVariety = [...new Set(data.map(function (p) { return p.variety }))];
        wineVariety.forEach(function (wineBottle) {
            dropdownMenu.append("option").text(wineBottle).property("value")
        });

        // call on functions to print in dropdown
        createBarChart(data[0].variety);
    });
}
init();


//d3.selectAll("#selDataset").on("change", optionChanged2);

function optionChanged2() {
    var dropdownMenu = d3.select("#selDataset");
    var selectedWine = dropdownMenu.property("value");
    createBarChart(selectedWine);
}