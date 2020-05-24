let coors = [];
let map = L.map('map-template');

const socket = io();

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', (e) => {
    coors = [e.latitude, e.longitude];
    map.setView(coors, 13);
    L.marker(coors).addTo(map)
    .bindPopup('You are here')
    .openPopup();

    socket.emit('userCoors', e.latlng)
})

socket.on('newUserCoors', coors => {
    console.log(coors);
    L.marker(coors).addTo(map)
    .bindPopup('New user')
    .openPopup();
})
