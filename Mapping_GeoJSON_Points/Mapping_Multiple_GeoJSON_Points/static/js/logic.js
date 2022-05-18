// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 3);

// Create tile layer that will be the background of the map
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
}).addTo(map);

// Access majorAirports.json file
let airportData = "https://raw.githubusercontent.com/rickystuart1/Mapping_Earthquakes/main/majorAirports.json"

// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    // Create a Geojson Layer with data
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            console.log(feature);
            layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h4> Airport Name: " + feature.properties.name + "</h4>")
        }
    }).addTo(map);
});

