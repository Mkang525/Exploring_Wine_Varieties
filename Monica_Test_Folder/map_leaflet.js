url = "/api/v1.0/wine";

d3.json(url).then(function(data) {
    console.log(data);
});
// var myMap = L.map("map", {
//     center: [28.114718, -25.043680],
//     zoom: 2,
//   });

//   var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/satellite-v9",
//     accessToken: API_KEY
//   }).addTo(myMap);

//   var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "light-v10",
//   accessToken: API_KEY
// });

// var street = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "streets-v11",
//   accessToken: API_KEY
// });

// var baseMaps = {
//     Satellite: satellite,
//     Street: street,
//     Light: light,
//   };
  
// L.control.layers(baseMaps).addTo(myMap);



// // d3.json(url).then(function(data) {
// //   console.log(data)

//   var lat = data.map (data => data.Lat);
//   var lng = data.map (data => data.Lng);

// //Loop through data and add markers to map

//   for (var i = 0; i < data.length; i++) {
//     var winery = data[i];
    
//     L.marker([
//       parseFloat(lat[i]), 
//       parseFloat(lng[i]) 
//     ]).addTo(myMap)
//       .bindPopup("<h2>" + winery.title + "</h2><hr> <h3> Variety : " + winery.variety + "<br>Province: " + winery.province + "<br>Price : " + winery.price + "<br>GWS (Global Wine Score): " + winery.points +"</h3> ")
//   }

});

  
