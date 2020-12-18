
// window.onload = function () {
//     var elem = document.getElementById('mapCont');
//     var elemId = elem.getAttribute('id');

//     mapboxgl.accessToken = 'pk.eyJ1IjoibmFyeml6IiwiYSI6ImNraXJ3cmo3aTA3eW4ycG5seGpvbjltcjAifQ.1rCoykMn2NxdCGyZ3gsbOA';
//     var map = new mapboxgl.Map({
//         container: elemId, // container id
//         style: 'mapbox://styles/mapbox/streets-v11', // style URL
//         center: [12.550343, 55.665957], // starting position [lng, lat]
//         zoom: 9 // starting zoom
//     });

//     var marker = new mapboxgl.Marker({
//         color: '#2b2b2b'
//     }).setLngLat([12.550343, 55.665957])
//         .addTo(map);
// };

$(document).ready(function () {
    getIp();

    function getIp() {
        //to get users ip address for first page launch
        $.getJSON('https://api.ipify.org/?format=json', function (data) {
            // init_page(data.ip);
            get_data(data.ip);
        });
    }

    function get_data(ip){
        var url = 'https://geo.ipify.org/api/v1?apiKey=at_qkkRQqb5bntENNhF9xE38cZ1jUGIW&ipAddress=' + ip;
        var ip, lng, lat, location, timezone, isp; 
        console.log(url);

        $.getJSON(url, function(data){
            console.log(data);
            ip = data.ip;
            lat = data.location.lat;
            lng = data.location.lng;
            location = data.location.city + ', ' + data.location.region;
            timezone = data.location.timezone;
            isp = data.isp;

            display_map(lng, lat);
            create_info_panel(ip, location, timezone, isp);
        });
    }

    function create_info_panel(ip, location, timezone, isp){
        $('#ip-address').find('p').text(ip);
        $('#location').find('p').text(location);
        $('#timezone').find('p').text('UTC'+timezone);
        $('#isp').find('p').text(isp);
    }

    function display_map(lng, lat) {
        var mapid = $('#mapCont').attr('id');
        console.log(mapid);

        mapboxgl.accessToken = 'pk.eyJ1IjoibmFyeml6IiwiYSI6ImNraXJ3cmo3aTA3eW4ycG5seGpvbjltcjAifQ.1rCoykMn2NxdCGyZ3gsbOA';
        var map = new mapboxgl.Map({
            container: mapid, // container id
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [lng, lat], // starting position [lng, lat] 12.550343, 55.665957
            zoom: 9 // starting zoom
        });

        var marker = new mapboxgl.Marker({
            color: '#2b2b2b'
        }).setLngLat([lng, lat])
            .addTo(map);
    }


});


