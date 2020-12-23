$(document).ready(function () {
    getIp();

    function getIp() {

        //to get users ip address for first page launch
        const url = 'https://api.ipify.org/?format=json';
        // $.getJSON(url, function (data) {
        //     get_data(data.ip);
        // });

        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            async: true,
            success: function (data) {
                console.log('ajax data ---> ', data);
                get_data(data.ip);
            }

        });

    }

    function get_data(input_value) {
        var ip, domain, api_key, url, lng, lat, location, timezone, isp;

        var ValidIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        var ValidHostnameRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

        api_key = 'at_qkkRQqb5bntENNhF9xE38cZ1jUGIW';

        if (ValidIpAddressRegex.test(input_value)) {
            ip = input_value;
            url = 'https://geo.ipify.org/api/v1?apiKey=' + api_key + '&ipAddress=' + ip;
        } else if (ValidHostnameRegex.test(input_value)) {
            domain = input_value;
            url = 'https://geo.ipify.org/api/v1?apiKey=' + api_key + '&domain=' + domain;
        }

        // url = 'https://geo.ipify.org/api/v1?apiKey=' + api_key + '&ipAddress=' + input_value;

        // $.getJSON(url, function (data) {
        //     console.log(data);
        //     ip = data.ip;
        //     lat = data.location.lat;
        //     lng = data.location.lng;
        //     location = data.location.city + ', ' + data.location.region;
        //     timezone = data.location.timezone;
        //     isp = data.isp;

        //     create_info_panel(ip, location, timezone, isp);
        //     display_map(lng, lat);

        // })
        //     .fail(function (jqxhr, textStatus, error) {
        //         $('.error-cont p').text('Please, enter valid search term');
        //         $('.error-cont').css('visibility', 'visible');
        //         $('#search-input').addClass('input-err');
        //     })
        //     .done(function () {
        //         $('.error-cont p').text('');
        //         $('#search-input').removeClass('input-err');
        //         $('.error-cont').css('visibility', 'hidden');
        //     });

        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            async: true,
            success: function (data) {
                console.log('ajax data ------> ', data);
                ip = data.ip;
                lat = data.location.lat;
                lng = data.location.lng;
                location = data.location.city + ', ' + data.location.region;
                timezone = data.location.timezone;
                isp = data.isp;

                create_info_panel(ip, location, timezone, isp);
                display_map(lng, lat);

                if ($('.error-cont').css('visibility') == 'visible') {
                    $('.error-cont p').text('');
                    $('#search-input').removeClass('input-err');
                    $('.error-cont').css('visibility', 'hidden');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('.error-cont p').text('Please, enter valid search term');
                $('.error-cont').css('visibility', 'visible');
                $('#search-input').addClass('input-err');
            }
            
        });

    }

    function create_info_panel(ip, location, timezone, isp) {
        $('#ip-address').find('p').text(ip);
        $('#location').find('p').text(location);
        $('#timezone').find('p').text('UTC' + timezone);
        $('#isp').find('p').text(isp);
    }

    function display_map(lng, lat) {
        var mapid = $('#mapCont').attr('id');

        mapboxgl.accessToken = 'pk.eyJ1IjoibmFyeml6IiwiYSI6ImNraXJ3cmo3aTA3eW4ycG5seGpvbjltcjAifQ.1rCoykMn2NxdCGyZ3gsbOA';
        var map = new mapboxgl.Map({
            container: mapid, // container id
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [lng, lat], // starting position [lng, lat] 12.550343, 55.665957
            zoom: 11 // starting zoom
        });

        var marker = new mapboxgl.Marker({
            color: '#2b2b2b'
        }).setLngLat([lng, lat])
            .addTo(map);
    }

    function search_location() {
        var input_value = $('#search-input').val();
        get_data(input_value);
    }

    $('#search-btn').on('click', function () {
        search_location();
    });

    $('#search-input').on('keypress', function (e) {
        if (e.which == 13) {
            search_location();
            return false
        }

    });
});


