// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.752522, lng: -1.282092 };
    -1.2820990669472752
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }