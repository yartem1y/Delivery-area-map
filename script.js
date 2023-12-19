ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64], // центр карты
        zoom: 10 // масштаб карты
    });

    // Массив с данными для меток
    var markersData = [
        { coordinates: [55.76, 37.64], hintContent: 'Москва', balloonContent: 'Столица России' },
        // Добавьте другие данные для меток
    ];

    // Добавление меток на карту
    markersData.forEach(function (marker) {
        var myPlacemark = new ymaps.Placemark(marker.coordinates, {
            hintContent: marker.hintContent,
            balloonContent: marker.balloonContent
        });

        myMap.geoObjects.add(myPlacemark);
    });
}
