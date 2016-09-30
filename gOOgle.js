 $(function () {
    $("#suBmit").click(function (ev) {
        var zipCode = $("#zip").val();
        getFromGoogle(zipCode);
        $("#zip").val("");
    });
    $("#clEar").click(function(){
        location.reload();
    })

});

var getFromGoogle = function (zipCode) {
    var googleKey = "AIzaSyDddtmAMdXoJlhu5DfiirduPfHp-WdbMtI";
    var google = "https://maps.googleapis.com/maps/api/js?key=" + googleKey + " & " + darkSky + "=" + "initMap"

 getFromDarkSky(lati, lon);
    });
}


var getFromDarkSky = function (latitude, longitude, nameCity) {
    var darkSkyKey = "3cb454feee3d28662007fe5bef209096";
    var darkSky = "https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude;
    $.ajax(darkSky, { dataType: "jsonp" }).done(function (data) {

    };