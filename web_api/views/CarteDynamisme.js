var map = L.map('map').setView([48.866, 2.33], 11);
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

osm.addTo(map);

// googleStreets

// googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// googleStreets.addTo(map);

// googleSat

// googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// googleSat.addTo(map);

//Icon 
var myIcon1 = L.icon({
    iconUrl: 'theatre.png',
    iconSize: [20, 60],
    iconAnchor: [20, 60],
    popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var myIcon2 = L.icon({
    iconUrl: 'culture.png',
    iconSize: [20, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var myIcon3 = L.icon({
    iconUrl: 'feux-dartifice.png',
    iconSize: [20, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var myIcon4 = L.icon({
    iconUrl: 'route.png',
    iconSize: [20, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var myIcon5 = L.icon({
    iconUrl: 'stade.png',
    iconSize: [20, 60],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//Maker
var FirstMaker = L.marker([48.865, 2.33], {icon:myIcon1}).addTo(map);
FirstMaker.bindPopup("<b>Temple Run</b>");

var FirstMaker = L.marker([48.856, 2.35], {icon:myIcon2}).addTo(map);
FirstMaker.bindPopup("<b>Temple Run</b>");

var FirstMaker = L.marker([48.863, 2.31], {icon:myIcon3}).addTo(map);
FirstMaker.bindPopup("<b>Temple Run</b>");

var FirstMaker = L.marker([48.852, 2.30], {icon:myIcon4}).addTo(map);
FirstMaker.bindPopup("<b>Temple Run</b>");

var FirstMaker = L.marker([48.838, 2.31], {icon:myIcon5}).addTo(map);
FirstMaker.bindPopup("<b>Temple Run</b>");
