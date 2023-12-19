ymaps.ready(function () {
    // Асинхронная загрузка координат
    loadCoordinates(function (coordinates) {
        // Инициализация карты с центром и начальным масштабом
        var map = new ymaps.Map("map", {
            center: coordinates[0],
            zoom: 15
        });

        // Добавление маркеров для каждой точки
        for (var i = 0; i < coordinates.length; i++) {
            var marker = new ymaps.Placemark(coordinates[i]);
            map.geoObjects.add(marker);
        }

        // Создание ломаной линии
        var polyline = new ymaps.Polyline(coordinates, {}, { color: 'blue' });
        map.geoObjects.add(polyline);

        // Создание полигона
        var polygon = new ymaps.Polygon([coordinates], {}, { color: 'blue', fillColor: 'green', fillOpacity: 0.4 });
        map.geoObjects.add(polygon);
    });
});

// Функция для асинхронной загрузки координат с использованием колбэка
function loadCoordinates(callback) {
    // Асинхронная загрузка файла
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'coordinates.js', true); // true - асинхронная загрузка
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Парсим содержимое файла coordinates.js как JSON
            var coordinates = JSON.parse(xhr.responseText);
            callback(coordinates);
        }
    };
    xhr.send();
}
