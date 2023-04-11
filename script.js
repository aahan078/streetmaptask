function showLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showMap);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showMap(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
  
    var map = L.map('map').setView([lat, lon], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    //     '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);
  
    var marker = L.marker([lat, lon]).addTo(map);
  
    L.Control.geocoder({
      defaultMarkGeocode: false
    }).on('markgeocode', function (e) {
      var bbox = e.geocode.bbox;
      var poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest()
      ]).addTo(map);
      map.fitBounds(poly.getBounds());
    }).addTo(map);
  }
  
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
