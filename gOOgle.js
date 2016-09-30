$(function () {
    $("#suBmit").click(function (ev) {

        getFromGoogle();
        $("#zip").val("");

    });
    

})

var getFromGoogle = function () {
    var zipCode = $("#zip").val();
    //var googleKey = "&key=AIzaSyBMBe4SWYwo0lxpHh7abF8zTQEqPzOdojw";
    var google = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBPY4LKbTgzhE9wjzBw_zx9_p98y1A7PKo";


    $.ajax(google).done(function (data) {

        var lati = data.results[0].geometry.location.lat;
        var lon = data.results[0].geometry.location.lng;
        console.log(lati, lon);

        initMap(lati, lon);

    });
}
var initMap = function (lati, lon) {
    var myLatLng = { lat: + lati, lng: + lon };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng
    })
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map

    })
}