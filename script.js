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

      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);
  
    var marker = L.marker([lat, lon]).addTo(map);
  
   
  }
  
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
