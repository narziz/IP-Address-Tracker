
window.onload = function () {
    var elem = document.getElementById('mapCont');
    var elemId = elem.getAttribute('id')

    mapboxgl.accessToken = 'pk.eyJ1IjoibmFyeml6IiwiYSI6ImNraXJ3cmo3aTA3eW4ycG5seGpvbjltcjAifQ.1rCoykMn2NxdCGyZ3gsbOA';
    var map = new mapboxgl.Map({
        container: elemId, // container id
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
};


