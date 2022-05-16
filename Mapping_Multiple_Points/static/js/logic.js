// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

let cityData = cities;

// Loop through cities array and create a marker for each city
cityData.forEach(function(city){
    console.log(city);
    L.circleMarker(city.location, {
        lineweight: 4,
        radius: city.population/200000,
        color: 'orange'
    })
    .bindPopup('<h2>' + city.city + ', ' + city.state + '</h2> <hr> <h3>Population: ' + city.population.toLocaleString() + '</h3>')
    .addTo(map);
});

// Create tile layer that will be the background of the map
// Change to dark map version 10
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});

// Then we add our grey
streets.addTo(map);

