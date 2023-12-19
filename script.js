ymaps.ready(init);

function init() {
    // Подключаем координаты из файла coordinates.js
    var coordinates = getCoordinates();

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

    // Удаление маркеров
    map.geoObjects.each(function (geoObject) {
        if (geoObject instanceof ymaps.Placemark) {
            map.geoObjects.remove(geoObject);
        }
    });
}

// Функция для загрузки координат из файла coordinates.js
function getCoordinates() {
    // Переменная, в которую будут загружены координаты
    var coordinates = [];

    // Асинхронная загрузка файла
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'coordinates.js', false); // false - синхронная загрузка
    xhr.send();

    // Если запрос выполнен успешно
    if (xhr.status == 200) {
        // Парсим содержимое файла coordinates.js как JavaScript код
        // (в данном случае, предполагается, что файл содержит валидный массив координат)
        eval(xhr.responseText);
        coordinates = window.coordinates;
    }

    return coordinates;
}
