ymaps.ready(function () {
    // Координаты встроены прямо в код
    var coordinates = [
        [56.5091741, 52.9615513],
        [56.5088109, 52.9620633],
        [56.5092115, 52.9628911],
        [56.5089792, 52.9633888],
        [56.5093327, 52.9640929],
        [56.5085892, 52.9649373],
        [56.5083891, 52.9642994],
        [56.5068323, 52.9658936],
        [56.5067809, 52.9683492],
        [56.5033207, 52.9710697],
        [56.5005053, 52.9729486],
        [56.4902329, 52.9727697]
    ];

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
