// Create tile layer that will be the default background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});

// Create base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with center and zoom level.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Pass our map layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Access majorAirports.json file
let torontoHoods = "https://raw.githubusercontent.com/rickystuart1/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Create style for lines 
let myStyle = {
    color: "blue",
    weight: 1,
    fillColor: "yellow"
};

// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Create a Geojson Layer with data
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            console.log(feature);
            layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>")
        }
    }).addTo(map);
});



