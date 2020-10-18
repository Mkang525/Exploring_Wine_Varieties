const url = "/api/v1.0/map"

// d3.json(url).then(function(data) {
//   console.log(data);
// });


var myMap = L.map("map", {
    center: [28.114718, -25.043680],
    zoom: 3,
  });

  var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-v9",
    accessToken: API_KEY
  }).addTo(myMap);

  var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var street = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "streets-v11",
  accessToken: API_KEY
});

var baseMaps = {
    Satellite: satellite,
    Street: street,
    Light: light,
  };
  
L.control.layers(baseMaps).addTo(myMap);


// Create a function to initiate default map 

function init() {
  var dropdownMenu=d3.select("#varietydropdown");
  d3.json(url, function(data) {

      var uniqueVarietyChoice = [...new Set(data.map(function(p){ return p.variety}))]; 
      console.log(uniqueVarietyChoice);

      uniqueVarietyChoice.forEach(function(choice) {
        dropdownMenu.append("option").text(choice).property("value", choice);
      });
      
      var defaultVariety = uniqueVarietyChoice[0];
      createMarker(defaultVariety);
  });
}
init();

//Create a function to create markers for top ten wine by variety

function createMarker(sample) {
  // **
    d3.json(url, function(data)  {
        var resultArray = data.filter(data => data.variety == sample);
        var result = resultArray;
        console.log(result);
       
            // var lat = result.map(data => data.lat);
            // console.log(lat);
            // var lng = result.map(data => data.lng);
            // console.log(lng);

        for (var i = 0; i < result.length; i++) {
            var winery = data[i];

            var lat = result.map(data => data.lat);   
            var lng = result.map(data => data.lng); 
     
            var varTitle = result.map(data => data.title);          
            var varVariety = result.map(data => data.variety);          
            var varProvince = result.map(data => data.province);           
            var varPrice= result.map(data => data.price);
            var varPoints= result.map(data => data.points);
                          
            //  L.marker([
            //     parseFloat(lat[i]), 
            //     parseFloat(lng[i]) 
            // ])   //.addTo(myMap)
            //   .bindPopup("<h4>" + varTitle[i] + "</h4><hr> <h6> Variety : " + varVariety[i] + "<br>Province: " + varProvince[i] + "<br>Price : " + varPrice[i] + "<br>GWS (Global Wine Score): " + varPoints[i] +"</h6> ").addTo(myMap);
            // };

          var markerLayer = L.marker([
              parseFloat(lat[i]),
              parseFloat(lng[i])
          ]).bindPopup("<h4>" + varTitle[i] + "</h4><hr> <h6> Variety : " + varVariety[i] + "<br>Province: " + varProvince[i] + "<br>Price : " + varPrice[i] + "<br>GWS (Global Wine Score): " + varPoints[i] +"</h6> ")

          markerLayer.addTo(myMap);

};
});
};

// Create a function to update map when dropdown selection is made

d3.selectAll("#varietydropdown").on("change", optionChanged);

function optionChanged() {
    var dropdownMenu = d3.select("#varietydropdown");
    var selectedWine = dropdownMenu.property("value");
    // markerLayer.remove();
    createMarker(selectedWine);   
 }


  
