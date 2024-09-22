var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var locations = [
  { lat: 40.785091, lng: -73.968285 },
  { lat: 41.084045, lng: -73.874245 },
  { lat: 40.754932, lng: -73.984016 },
];

// Initialize the map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 40.785091, lng: -73.968285 },
  });

  // Create an array of markers
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
      map: map, // Add marker to the map
    });
  });

  // Create the marker clusterer
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
