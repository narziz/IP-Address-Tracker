var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoibmFyeml6IiwiYSI6ImNraXJ3cmo3aTA3eW4ycG5seGpvbjltcjAifQ.1rCoykMn2NxdCGyZ3gsbOA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmFyeml6IiwiYSI6ImNraXJ3cmo3aTA3eW4ycG5seGpvbjltcjAifQ.1rCoykMn2NxdCGyZ3gsbOA'
}).addTo(mymap);