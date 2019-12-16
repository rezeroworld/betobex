/*function initMap() {
    var location = { lat: 35.673918, lng: -0.5446911999999884 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}*/

var mymap = L.map('mapid').setView([35.643781, -0.584043], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiemFyb3VyLW1haGRpaSIsImEiOiJjazQzYW82N2wwNWo5M21xY3M2NnpwMzZyIn0.tT4cEx0x-UO13rHGDRQjIA'
}).addTo(mymap);
var marker = L.marker([35.643781, -0.584043]).addTo(mymap);

var mymap2 = L.map('mapid2').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiemFyb3VyLW1haGRpaSIsImEiOiJjazQzYW82N2wwNWo5M21xY3M2NnpwMzZyIn0.tT4cEx0x-UO13rHGDRQjIA'
}).addTo(mymap2);