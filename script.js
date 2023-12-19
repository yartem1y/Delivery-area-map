// Инициализация карты с центром и начальным масштабом
var map = L.map('map').setView(coordinates[0], 15);

// Добавление слоя OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Добавление маркеров для каждой точки
for (var i = 0; i < coordinates.length; i++) {
    L.marker(coordinates[i]).addTo(map);
}

// Создание ломаной линии
var polyline = L.polyline(coordinates, {color: 'blue'}).addTo(map);

// Создание полигона
var polygon = L.polygon(coordinates, {color: 'blue', fillColor: 'green', fillOpacity: 0.4}).addTo(map);

// Удаление маркеров
map.eachLayer(function(layer) {
    if (layer instanceof L.Marker) {
        map.removeLayer(layer);
    }
});
